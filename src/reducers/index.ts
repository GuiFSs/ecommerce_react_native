import { combineReducers } from 'redux';
import produtosReducer from './produtos';

export const rootReducer = combineReducers({
  produtos: produtosReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
