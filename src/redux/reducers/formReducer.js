// import {
//   ADDNEWCONTACT,
//   DELETECONTACT,
//   SETFILTER,
//   GETCONTACTS,
// } from "../constants/constants";

import { createReducer } from "@reduxjs/toolkit";
import {
  addNewContact,
  deleteContact,
  setFilter,
  getContacts,
} from "../actions/formActions";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const formReducer = createReducer(
  { ...initialState },
  {
    [addNewContact]: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),

    [deleteContact]: (state, action) => ({
      ...state,
      contacts: [
        ...state.contacts.filter((contact) => contact.id !== action.payload),
      ],
    }),

    [setFilter]: (state, action) => ({
      ...state,
      filter: action.payload,
    }),

    [getContacts]: (state, action) => ({
      ...state,
      contacts: [...action.payload],
    }),
  }
);

export default formReducer;

// const formReducer = (state = { ...initialState }, action) => {
//   switch (action.type) {
//     case ADDNEWCONTACT:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };

//     case DELETECONTACT:
//       return {
//         ...state,
//         contacts: [
//           ...state.contacts.filter((contact) => contact.id !== action.payload),
//         ],
//       };

//     case SETFILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     case GETCONTACTS:
//       return {
//         ...state,
//         contacts: [...action.payload],
//       };

//     default:
//       return state;
//   }
// };

// export default formReducer;
