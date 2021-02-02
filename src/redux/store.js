// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import formReducer from "./reducers/formReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: formReducer,
});

//export const store = createStore(formReducer, composeWithDevTools());
