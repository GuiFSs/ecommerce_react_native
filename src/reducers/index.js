import { combineReducers } from 'redux';
import testReducer from './test';
import produtosReducer from './produtos';

export default combineReducers({
  test: testReducer,
  produtos: produtosReducer
});
