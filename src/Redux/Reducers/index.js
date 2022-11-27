import { combineReducers } from "redux";
import GeneralReducer from "./GeneralReducer";
import CartReducer from "./CartReducer";
import BookmarkReducer from "./BookmarkReducer";
import CategoryReducer from "./CategoryReducer";

export default combineReducers({
  generalState: GeneralReducer,
  cartState: CartReducer,
  bookmarkState: BookmarkReducer,
  categoryState: CategoryReducer
});
