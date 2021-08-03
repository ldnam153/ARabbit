import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT, REMOVE_ALL, TOGGLE_ALL, TOGGLE_PRODUCT_CHECKBOX, TOGGLE_SHOP_CHECKBOX, ADD_TO_CART, UPDATE_TOTAL_PAYMENT } from '../Constant';
import controller from "../controller/product_controller"

const initialState = {
  cartList: controller.getCatList(),
  totalPrice: 0,
  isAllSelected: false,
  checkedProducts: 0, //cai nay nam ke nut thanh toan ne, hien thi co bao nhieu LOAI SAN PHAM dang duoc selected <3
  totalPayment: 0
};

const sumReducer = (list) => {
  const array = [];
  list.forEach(shop => shop.products.forEach(product => product.isSelected && array.push(product.price * product.number)))
  return array;
}

const changeShopCheckbox = (list) => {
  return [...list].map(shop => {
    return {...shop, isSelected: shop.products.every(p => p.isSelected) ? true : shop.products.every(p => !p.isSelected) ? false : false}
  })
}

const changeProductCheckbox = (list, shopID, value) => {
  return list.map(shop => {return {...shop, isSelected: shop.shopId === shopID ? value : shop.isSelected, products: shop.shopId === shopID ? shop.products.map(p => {return {...p, isSelected: value}}) : shop.products}})
}

const checkAllSelected = (list) => {
  return list.every(shop => shop.products.every(p => p.isSelected))
}

const checkProductExisted = (list, productID) => {
  return list.some(shop => shop.products.some(p => p.id === productID));
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_AMOUNT: {
      return {
        ...state,
        cartList: [...state.cartList].map(shop => {return {...shop, products: shop.products.map(p => {return {...p, number: p.id === action.payload.id ? p.number + 1 : p.number }})}}),
        totalPrice: action.payload.isSelected === true ? state.totalPrice + action.payload.amount : state.totalPrice,
      };
    }
    case DECREASE_AMOUNT: {
      return {
        ...state,
        cartList: [...state.cartList].map(shop => {return {...shop, products: shop.products.map(p => {return {...p, number: p.id === action.payload.id ? p.number - 1 : p.number }})}}),
        totalPrice: action.payload.isSelected === true ? state.totalPrice - action.payload.amount : state.totalPrice,
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...state,
        checkedProducts: action.payload.isSelected === true ? state.checkedProducts - 1 : state.checkedProducts,
        totalPrice: action.payload.isSelected === true ? state.totalPrice - action.payload.price : state.totalPrice,
        cartList: [...state.cartList].map(shop => {return {...shop, products: shop.products.filter(p => p.id !== action.payload.id)}})
      };
    }
    case REMOVE_ALL: {
      return {
        ...state,
        checkedProducts: 0,
        totalPrice: 0,
        cartList: [...state.cartList].map(shop => {return {...shop, products: []}})
      };
    }
    case TOGGLE_ALL: {  //data thay doi nhung UI chua re-render (check/uncheck) dua tren data
      const newCartList = [...state.cartList].map(shop => {return {...shop,isSelected:action.payload,products: shop.products.map(p => {return{...p,isSelected:action.payload}})}})
      return {
        ...state,
        isAllSelected: action.payload,
        cartList: newCartList,
        totalPrice: sumReducer(newCartList).reduce(((accumulator, currentValue) => accumulator + currentValue), 0)
      };
    }
    case 'MESSAGE': {
      return {
        ...state,
        cartList: [...state.cartList].map(shop => {if(shop.shopId == action.payload.shopId) {return {...shop, message: action.payload.message}}else return {...shop}})
      };
    }
    case TOGGLE_PRODUCT_CHECKBOX : {
      const newCartList = [...state.cartList].map(shop => {return {...shop, products: shop.products.map(p => {return {...p, isSelected: p.id === action.payload.productID ? action.payload.value : p.isSelected}})}});
      return {
        ...state,
        cartList: changeShopCheckbox(newCartList),
        totalPrice: sumReducer(newCartList).reduce(((accumulator, currentValue) => accumulator + currentValue), 0),
        isAllSelected: checkAllSelected(newCartList)
      }
    }
    case TOGGLE_SHOP_CHECKBOX: {
      const newCartList = changeProductCheckbox([...state.cartList], action.payload.shopID, action.payload.value);
      return {
        ...state,
        cartList: newCartList,
        totalPrice: sumReducer(newCartList).reduce(((accumulator, currentValue) => accumulator + currentValue), 0),
        isAllSelected: checkAllSelected(newCartList)
      }
    }
    case ADD_TO_CART: {
      const newCartList = checkProductExisted(state.cartList, action.payload.products[0].id) ? 
      [...state.cartList].map(shop => { return {...shop, products: shop.products.map(p => {return {...p, number: p.id === action.payload.products[0].id ? p.number + action.payload.products[0].number : p.number}})}}):
      [...state.cartList, action.payload];
      return {
        ...state,
        cartList: newCartList,
        totalPrice: sumReducer(newCartList).reduce(((accumulator, currentValue) => accumulator + currentValue), 0),
      }
    }
    case UPDATE_TOTAL_PAYMENT: {
      return {
        ...state,
        totalPayment: action.payload
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
