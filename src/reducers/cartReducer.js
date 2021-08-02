import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT, REMOVE_ALL, TOGGLE_ALL } from '../Constant';

const initialState = {
  cartList: [
    {
      isSelected: true,
      shop: 'GameStop',
      shopId: "S01",
      products: [
        {
          isSelected: true,
          image: require('~/resources/imgs/ps5.jpg'),
          name: 'Máy chơi game PlayStation 5 hàng chính hãng',
          property: 'Standard',
          properties: ['Normal', 'Standard', 'Premium'],
          price: 7000000,
          number: 1,
          remain: 4,
          id: "P01"
        },
        {
          isSelected: true,
          image: require('~/resources/imgs/ps4.jpg'),
          name: 'Máy chơi game PlayStation 4 thế hệ mới',
          property: 'Premium',
          properties: ['Normal', 'Standard', 'Premium'],
          price: 5550000 ,
          number: 1,
          remain: 2,
          id: "P02"
        },
      ],
    },
    {
      isSelected: true,
      shop: 'UwU Shop',
      shopId: "S02",
      products: [
        {
          isSelected: true,
          image: require('~/resources/imgs/vaydo.jpg'),
          name: 'Váy đỏ tươi sành điệu cho các nàng',
          property: 'XXL',
          properties: ['M', 'L', 'XL', 'XXL'],
          price: 120000,
          number: 1,
          remain: 1,
          id: "P03"
        },
      ],
    },
    {
      isSelected: false,
      shop: 'Cholesterol Shop',
      shopId: "S03",
      products: [
        {
          isSelected: false,
          image: require('~/resources/imgs/tatay.jpg'),
          name: 'Tạ tay bọc cao su Tuấn Vũ cao cấp bảo hành trọn đời',
          property: '8kg',
          properties: ['6kg', '8kg', '10kg'],
          price: 700000,
          number: 2,
          remain: 12,
          id: "P04"
        },
      ],
    },
  ],
  totalPrice: 14070000,
  isAllSelected: false,
  checkedProducts: 3, //cai nay nam ke nut thanh toan ne, hien thi co bao nhieu LOAI SAN PHAM dang duoc selected <3
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_AMOUNT: {
      return {
        ...state,
        totalPrice: action.payload.isSelected === true ? state.totalPrice + action.payload.amount : state.totalPrice,
      };
    }
    case DECREASE_AMOUNT: {
      return {
        ...state,
        totalPrice: action.payload.isSelected === true ? state.totalPrice - action.payload.amount : state.totalPrice,
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...state,
        checkedProducts: action.payload.isSelected === true ? state.checkedProducts - 1 : state.checkedProducts,
        totalPrice: action.payload.isSelected === true ? state.totalPrice - action.payload.price : state.totalPrice,
        cartList: [...state.cartList].map(shop => {return {...shop, products: shop.products.filter(p => p.id !== action.payload.id)}})
      };
    }
    case REMOVE_ALL: {
      return {
        ...state,
        checkedProducts: 0,
        totalPrice: 0,
        cartList: [...state.cartList].map(shop => {return {...shop, products: []}})
      };
    }
    case TOGGLE_ALL: {  //data thay doi nhung UI chua re-render (check/uncheck) dua tren data
      return {
        ...state,
        isAllSelected: action.payload,
        cartList: [...state.cartList].map(shop => {return {...shop,isSelected:action.payload,products: shop.products.map(p => {return{...p,isSelected:action.payload}})}})
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
