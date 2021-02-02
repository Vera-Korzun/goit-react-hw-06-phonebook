import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// import {
//   ADDNEWCONTACT,
//   DELETECONTACT,
//   SETFILTER,
//   GETCONTACTS,
// } from "../constants/constants";

export const addNewContact = createAction(
  "@contacts/addNewContact",
  (data) => ({
    payload: {
      ...data,
      id: uuidv4(),
    },
  })
);
export const deleteContact = createAction("@contacts/deleteContact");
export const setFiler = createAction("@contacts/setFilter");
export const getContacts = createAction("@contacts/getContacts");

// export const addNewContact = (data) => {
//   return {
//     type: ADDNEWCONTACT,
//     payload: { ...data, id: uuidv4() },
//   };
// };

// export const deleteContact = (id) => {
//   return {
//     type: DELETECONTACT,
//     payload: id,
//   };
// };

// export const setFiler = (value) => {
//   return {
//     type: SETFILTER,
//     payload: value,
//   };
// };

// export const getContacts = (data) => {
//   return {
//     type: GETCONTACTS,
//     payload: data,
//   };
// };
