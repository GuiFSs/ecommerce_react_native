import {
  SET_PRODUTOS_LOADING,
  GET_PRODUTOS,
  ProdutosTypes,
} from '../actions/types';
import { IProduto } from '../models/types/types';

export interface IProdutoState {
  produtos: IProduto[];
  loading: boolean;
}

const initialState: IProdutoState = {
  produtos: [],
  loading: false,
};

const produtosReducer = (state = initialState, action: ProdutosTypes) => {
  switch (action.type) {
    case GET_PRODUTOS:
      return {
        ...state,
        produtos: action.payload,
      };
    case SET_PRODUTOS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return { ...state };
  }
};

export default produtosReducer;
