import { IProduto } from '../models/types/types';

export const TEST_LOADING = 'TEST_LOADING';
export const SET_PRODUTOS_LOADING = 'SET_PRODUTOS_LOADING';
export const GET_PRODUTOS = 'GET_PRODUTOS';

interface GetProdutos {
  type: typeof GET_PRODUTOS;
  payload: IProduto[];
}

interface SetProdutosLoading {
  type: typeof SET_PRODUTOS_LOADING;
  payload: boolean;
}

export type ProdutosTypes = GetProdutos | SetProdutosLoading;
