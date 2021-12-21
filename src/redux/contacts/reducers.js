import { v4 as uuidv4 } from "uuid";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, delContact, filterContact } from "./actions";

// import { types } from "node-sass";

const initState = {
  contacts: {
    items: [
      { id: uuidv4(), name: "Rosie Simpson", phoneNumber: "459-12-56" },
      { id: uuidv4(), name: "Hermione Kline", phoneNumber: "443-89-12" },
      { id: uuidv4(), name: "Eden Clements", phoneNumber: "645-17-79" },
      { id: uuidv4(), name: "Annie Copeland", phoneNumber: "227-91-26" },
    ],
    filter: "",
  },
};

const contactsManage = createReducer(initState, {
  [addContact]: (state, { payload }) => [...state, payload],
  [delContact]: (state, { payload }) => {
    const contactsPrevState = [...state];
    const elemToRemove = contactsPrevState.find((item) => item.id === payload);
    const elemIndex = contactsPrevState.indexOf(elemToRemove);
    contactsPrevState.splice(elemIndex, 1);
    return (state = contactsPrevState);
  },
});

const contactsFilter = createReducer("", {
  [filterContact]: (state, { payload }) => state === payload,
});

export const allReducers = combineReducers({
  contactsManage,
  contactsFilter,
});
