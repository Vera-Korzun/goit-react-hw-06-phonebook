import { combineReducers } from "redux";

export const reducerFormList = (state = [], action) => {
  switch (action.type) {
    case "ADD_FORM":
      return [...state, action.payload];

    default:
      return state;
  }
};

const initialState = {
  name: "",
  number: "",
};

export const reducerFormItem = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_NUMBER":
      return { ...state, number: action.payload };
    case "ADD_FORM":
      return { ...initialState };

    default:
      return state;
  }
};

export const reducerForm = combineReducers({
  list: reducerFormList,
  item: reducerFormItem,
});
