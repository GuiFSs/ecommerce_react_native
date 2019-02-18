import axios from 'axios';
import { SET_PRODUTOS_LOADING, GET_PRODUTOS } from './types';

const BASE_URL = 'https://aux-ecommerce-api.herokuapp.com/api/produtos';

export const getProdutos = () => async dispatch => {
  dispatch(setProdutosLoading(true));
  try {
    const produtos = await axios.get(BASE_URL);
    dispatch({
      type: GET_PRODUTOS,
      payload: produtos.data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUTOS,
      payload: []
    });
  }
  dispatch(setProdutosLoading(false));
};

export const setProdutosLoading = bool => {
  return {
    type: SET_PRODUTOS_LOADING,
    payload: bool
  };
};
