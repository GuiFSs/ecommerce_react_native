import { SET_PRODUTOS_LOADING, GET_PRODUTOS } from '../actions/types';

const initialState = {
  produtos: [],
  loading: false
};

const produtosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUTOS:
      return {
        ...state,
        produtos: action.payload
      };
    case SET_PRODUTOS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return { ...state };
  }
};

export default produtosReducer;
