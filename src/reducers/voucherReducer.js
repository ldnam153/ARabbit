import { UPDATE_ACTIVE_VOUCHER } from '../Constant';

const initialState = {
  listVoucher: [{
    image: '../../resources/imgs/voucher/voucher-image.png',
    title: 'Voucher miễn phí vận chuyển',
    desc: 'Đơn tối thiểu 100k, giảm tối thiểu 15k',
    expiration: '01/08/2021',
    shortName: "Miễn phí vận chuyển",
    disable: false,
    type: "V1",
    discountValue: 100
  },
  {
    image: '../../resources/imgs/voucher/voucher-image.png',
    title: 'Voucher giảm giá 10%',
    desc: 'Đơn tối thiểu 100k, giảm tối thiểu 50k',
    expiration: '01/08/2021',
    shortName: "Giảm 10%",
    disable: false,
    type: "V2",
    discountValue: 10
  },
  {
    image: '../../resources/imgs/voucher/voucher-image.png',
    title: 'Voucher miễn phí vận chuyển',
    desc: 'Đơn tối thiểu 20 triệu, giảm tối đa 5 triệu',
    expiration: '01/08/2021',
    shortName: "Miễn phí vận chuyển",
    disable: true,
    type: "V1",
    discountValue: 100
  },],
  activeVoucher: null,
};

const voucherReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_VOUCHER: {
      return {
        ...state,
        activeVoucher: action.payload,
        activeVoucherObject: action.payload !== null ? [...state.listVoucher][action.payload] : null
      };
    }
    default: {
      return state;
    }
  }
};

export default voucherReducer;
