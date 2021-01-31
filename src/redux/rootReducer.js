import { combineReducers } from "redux";
import { reducerForm } from "./form/formReducr";

export const rootReducer = combineReducers({
  form: reducerForm,
});
