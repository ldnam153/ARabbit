import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT, REMOVE_ALL, TOGGLE_ALL, TOGGLE_PRODUCT_CHECKBOX, TOGGLE_SHOP_CHECKBOX, ADD_TO_CART, UPDATE_TOTAL_PAYMENT } from '../Constant';

const initialState = {
  receiver: [
    {"address": "268 Hòn Khóm",
     "city": {"code": 2, "codename": "tinh_ha_giang", "districts": [Array], "division_type": "tỉnh", "name": "Tỉnh Hà Giang", "phone_code": 219},
     "district": {"code": 26, "codename": "huyen_dong_van", "division_type": "huyện", "name": "Huyện Đồng Văn", "province_code": 2, "wards": [Array]},
     "name": "Nguyễn Anh Duy",
     "phone": "07034022177",
     "ward": {"code": 712, "codename": "thi_tran_pho_bang", "district_code": 26, "division_type": "thị trấn", "name": "Thị trấn Phó Bảng"}
    },
    {"address": "686 Trần Hưng Đạo",
     "city": {"code": 79, "codename": "thanh_pho_ho_chi_minh", "districts": [Array], "division_type": "thành phố trung ương", "name": "Thành phố Hồ Chí Minh", "phone_code": 28},
     "district": {"code": 760, "codename": "quan_1", "division_type": "quận", "name": "Quận 1", "province_code": 79, "wards": [Array]},
     "name": "Lý Duy Nam", 
     "phone": "0903457869",
     "ward": {"code": 26749, "codename": "phuong_pham_ngu_lao", "district_code": 760, "division_type": "phường", "name": "Phường Phạm Ngũ Lão"}}
  ],
  picked_index: 0,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INDEX': {
      return {
        ...state,
        picked_index: action.payload.picked_index,
      };
    }
    case 'ADD': {
      return {
        ...state,
        receiver: [...state.receiver,action.payload.address],
        picked_index: state.receiver.length,
      };
    }
    case 'CHANGE': {
      return {
        ...state,
        receiver: [...state.receiver].map((item, index) => index === state.picked_index ? action.payload.data : item)
      }
    }
    case 'REMOVE': {
      return {
        ...state,
        picked_index: 0,
        receiver: [...state.receiver].filter((item, index) => index !== state.picked_index)
      }
    }
    default:
      return state;
  }
};

export default addressReducer;
