import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT } from '../Constant';

const initialState = {
  cartList: [
    {
      isSelected: true,
      shop: 'GameStop',
      products: [
        {
          isSelected: true,
          image: require('~/resources/imgs/ps5.jpg'),
          name: 'Máy chơi game PlayStation 5 hàng chính hãng',
          property: 'Standard',
          properties: ['Normal', 'Standard', 'Premium'],
          price: '7.000.000 VNĐ',
          number: 1,
          remain: 4,
        },
        {
          isSelected: true,
          image: require('~/resources/imgs/ps4.jpg'),
          name: 'Máy chơi game PlayStation 4 thế hệ mới',
          property: 'Premium',
          properties: ['Normal', 'Standard', 'Premium'],
          price: '5.550.000 VNĐ',
          number: 1,
          remain: 2,
        },
      ],
    },
    {
      isSelected: true,
      shop: 'UwU Shop',
      products: [
        {
          isSelected: true,
          image: require('~/resources/imgs/vaydo.jpg'),
          name: 'Váy đỏ tươi sành điệu cho các nàng',
          property: 'XXL',
          properties: ['M', 'L', 'XL', 'XXL'],
          price: '120.000 VNĐ',
          number: 1,
          remain: 1,
        },
      ],
    },
    {
      isSelected: false,
      shop: 'Cholesterol Shop',
      products: [
        {
          isSelected: false,
          image: require('~/resources/imgs/tatay.jpg'),
          name: 'Tạ tay bọc cao su Tuấn Vũ cao cấp bảo hành trọn đời',
          property: '8kg',
          properties: ['6kg', '8kg', '10kg'],
          price: '700.000 VNĐ',
          number: 2,
          remain: 12,
        },
      ],
    },
  ],
  totalPrice: 0,
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
        cartList: [...state.cartList].map((shop) => {
          shop.filter((item) => item.id !== action.payload)
        }),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
