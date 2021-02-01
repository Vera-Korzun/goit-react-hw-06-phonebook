import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import formReducer from "./reducers/formReducer";

export const store = createStore(formReducer, composeWithDevTools());
