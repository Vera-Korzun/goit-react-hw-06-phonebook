import { v4 as uuidv4 } from "uuid";
import {
  ADDNEWCONTACT,
  DELETECONTACT,
  SETFILTER,
} from "../constants/constants";

export const addNewContact = (data) => {
  return {
    type: ADDNEWCONTACT,
    payload: { ...data, id: uuidv4() },
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETECONTACT,
    payload: id,
  };
};

export const setFiler = (value) => {
  return {
    type: SETFILTER,
    payload: value,
  };
};
