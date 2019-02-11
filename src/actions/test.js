import { TEST_LOADING } from './types';

export const setLoading = () => dispatch => {
  dispatch({
    type: TEST_LOADING
  });
};
