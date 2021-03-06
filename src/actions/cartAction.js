import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT, REMOVE_ALL, TOGGLE_ALL, TOGGLE_PRODUCT_CHECKBOX, TOGGLE_SHOP_CHECKBOX, ADD_TO_CART, UPDATE_TOTAL_PAYMENT } from '../Constant';

export const incrementAmount = (id, amount, isSelected) => {
  return {
    type: INCREASE_AMOUNT,
    payload: {
      id,
      amount: amount,
      isSelected: isSelected,
    }
  };
};

export const decrementAmount = (id, amount, isSelected) => {
  return {
    type: DECREASE_AMOUNT,
    payload: {
      id,
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

// export const removeAll = () => {
//   return {
//     type: REMOVE_ALL,
//     payload: null,
//   };
// };

// export const toggleAll = (value) => {
//   return {
//     type: TOGGLE_ALL,
//     payload: value,
//   };
// };

export const addMessageForShop = (message, shopId) => {
  return {
    type: 'MESSAGE',
    payload: {
      message: message,
      shopId: shopId,
    }
  };
};

export const addMessageForAll = (message) => {
  return {
    type: 'MESSAGE ALL',
    payload: {
      message: message,
    }
  };
};

// export const toggleProductCheckbox = (value, productID) => {
//   return {
//     type: TOGGLE_PRODUCT_CHECKBOX,
//     payload: {
//       value,
//       productID
//     }
//   }
// }

// export const toggleShopCheckbox = (value, shopID) => {
//   return {
//     type: TOGGLE_SHOP_CHECKBOX,
//     payload: {
//       value,
//       shopID
//     }
//   }
// }

export const addToCart = (shop, product, number, property) => {

  product.isSelected = true
  product.number = number
  product.property = property
  var products = []
  products.push(product)
  return {
    type: ADD_TO_CART,
    payload: {
      id: "6242" + Math.floor(Math.random()* 100).toString(),
      isSelected: true,
      shop,
      shopId: shop,
      products
    }
  }
}

export const updateTotalPayment = (value) => {
  return {
    type: UPDATE_TOTAL_PAYMENT,
    payload: value,
  };
};