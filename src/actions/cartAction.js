import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT } from '../Constant';

export const incrementAmount = (amount) => {
  return {
    type: INCREASE_AMOUNT,
    payload: amount,
  };
};

export const decrementAmount = (amount) => {
  return {
    type: DECREASE_AMOUNT,
    payload: amount,
  };
};

export const removeProduct = (id, price) => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id,
      price
    }
  };
};
