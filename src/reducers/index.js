import { combineReducers } from 'redux';

import voucherReducer from './voucherReducer';
import cartReducer from './cartReducer';
import addressReducer from './addressReducer';

const rootReducer = combineReducers({
  voucherReducer: voucherReducer,
  cartReducer: cartReducer,
  addressReducer: addressReducer,
});

export default rootReducer;
