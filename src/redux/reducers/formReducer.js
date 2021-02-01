import {
  ADDNEWCONTACT,
  DELETECONTACT,
  SETFILTER,
} from "../constants/constants";

const initialState = {
  contacts: [
    // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const formReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADDNEWCONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case DELETECONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter((contact) => contact.id !== action.payload),
        ],
      };

    case SETFILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default formReducer;
