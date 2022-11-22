import { createStore, applyMiddleware } from "redux";

import Reducers from "../Reducers";

const Store = createStore(Reducers);

export { Store };
