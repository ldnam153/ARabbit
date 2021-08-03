import { combineReducers } from 'redux';

import voucherReducer from './voucherReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  voucherReducer: voucherReducer,
  cartReducer: cartReducer,
});

export default rootReducer;
