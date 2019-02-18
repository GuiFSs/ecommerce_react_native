import axios from "axios";

const BASE_URL = "https://aux-ecommerce-api.herokuapp.com/api/produtos/todos";

export const getList = () => {
  let produtos = axios.get(BASE_URL);
  return {
    type: "LIST_PRODUTO",
    payload: produtos
  };
};
