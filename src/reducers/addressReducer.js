import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT, REMOVE_ALL, TOGGLE_ALL, TOGGLE_PRODUCT_CHECKBOX, TOGGLE_SHOP_CHECKBOX, ADD_TO_CART, UPDATE_TOTAL_PAYMENT } from '../Constant';

const initialState = {
  receiver: [
    {
      name: 'Lưu Thiện Nhân',
      phone: '0703002347',
      ward: 'phường 10',
      district: 'quận 3',
      city: 'TP.HCM',
      address: '193E Trần Văn Đang',
    },
    {
      name: 'Nguyễn Anh Duy',
      phone: '0912345678',
      ward: 'phường XY',
      district: 'Quận Z',
      city: 'TP.HCM',
      address: '123 ABC',
    },
    {
      name: 'Lý Duy Nam',
      phone: '0762103550',
      ward: 'Phường 2',
      district: 'Quận 5',
      city: 'TP.HCM',
      address: '686 Trần Hưng Đạo',
    },
  ],
  picked_index: 2,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INDEX': {
      return {
        ...state,
        picked_index: action.payload.picked_index,
      };
    }
    default:
      return state;
  }
};

export default addressReducer;
