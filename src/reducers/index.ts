import { combineReducers } from 'redux';
import testReducer from './test';
import produtosReducer from './produtos';

export const rootReducer = combineReducers({
  test: testReducer,
  produtos: produtosReducer
});

export type AppState = ReturnType<typeof rootReducer>;
