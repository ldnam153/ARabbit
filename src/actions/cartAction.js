import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT, REMOVE_ALL_PRODUCT } from '../Constant';

export const incrementAmount = (amount, isSelected) => {
  return {
    type: INCREASE_AMOUNT,
    payload: {
      amount: amount,
      isSelected: isSelected,
    }
  };
};

export const decrementAmount = (amount, isSelected) => {
  return {
    type: DECREASE_AMOUNT,
    payload: {
      amount: amount,
      isSelected: isSelected,
    }
  };
};

export const removeProduct = (id, price, isSelected) => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id,
      price,
      isSelected,
    }
  };
};
