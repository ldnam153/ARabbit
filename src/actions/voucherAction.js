import { UPDATE_ACTIVE_VOUCHER } from '../Constant';

export const setActiveVoucher = (id) => {
  return {
    type: UPDATE_ACTIVE_VOUCHER,
    payload: id,
  };
};
