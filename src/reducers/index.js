import { combineReducers } from "redux";
import testReducer from "./testReducer";
import ItemReducers from "../components/Card-Offers/ItemReducers";

export default combineReducers({
  test: testReducer,
  item: ItemReducers
});
