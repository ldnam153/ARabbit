import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT } from '../Constant';

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
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_AMOUNT: {
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload,
      };
    }
    case DECREASE_AMOUNT: {
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload,
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload.price,
        cartList: [...state.cartList].map(shop => {return {...shop, products: shop.products.filter(p => p.id !== action.payload.id)}})
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
