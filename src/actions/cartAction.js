import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT, REMOVE_ALL, TOGGLE_ALL } from '../Constant';

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

export const removeAll = () => {
  return {
    type: REMOVE_ALL,
    payload: null,
  };
};

export const toggleAll = (value) => {
  return {
    type: TOGGLE_ALL,
    payload: value,
  };
};

export const addMessageForShop = (message, shopId) => {
  return {
    type: 'MESSAGE',
    payload: {
      message: message,
      shopId: shopId,
    }
  };
};
