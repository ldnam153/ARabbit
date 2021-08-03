import { UPDATE_ACTIVE_VOUCHER } from '../Constant';

const initialState = {
  listVoucher: [{
    image: '../../resources/imgs/voucher/voucher-image.png',
    title: 'Voucher miễn phí vận chuyển',
    desc: 'Đơn tối thiểu 100k, giảm tối thiểu 15k',
    expiration: '01/08/2021',
    shortName: "Miễn phí vận chuyển",
    disable: false,
  },
  {
    image: '../../resources/imgs/voucher/voucher-image.png',
    title: 'Voucher giảm giá 10%',
    desc: 'Đơn tối thiểu 100k, giảm tối thiểu 50k',
    expiration: '01/08/2021',
    shortName: "Miễn phí vận chuyển",
    disable: false,
  },
  {
    image: '../../resources/imgs/voucher/voucher-image.png',
    title: 'Voucher miễn phí vận chuyển',
    desc: 'Đơn tối thiểu 100k, giảm tối thiểu 15k',
    expiration: '01/08/2021',
    shortName: "Miễn phí vận chuyển",
    disable: true,
  },],
  activeVoucher: null,
};

const voucherReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_VOUCHER: {
      return {
        ...state,
        activeVoucher: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default voucherReducer;
