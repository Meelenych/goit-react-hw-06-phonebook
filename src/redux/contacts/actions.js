import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contact/add", (contact) => {
  return {
    payload: { ...contact },
  };
});

export const delContact = createAction("contact/del", (contact) => {
  return {
    payload: { ...contact },
  };
});

export const filterContact = createAction("contact/filter", (value) => {
  return {
    payload: value,
  };
});
