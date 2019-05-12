import { TEST_LOADING } from '../actions/types';

const initialState = {
  tests: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
