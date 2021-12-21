// // import { combineReducers } from "redux";

// import logger from "redux-logger";
// // import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
// // import { contactsManage, contactsFilter } from "./contacts/reducers";

import { allReducers } from "./contacts/reducers";
import { configureStore } from "@reduxjs/toolkit";
// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// // const store = createStore(contactsReducer, composeWithDevTools());
// // const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore(
  {
    reducer: allReducers,
    // devtools: process.env.NODE_ENV === "development",
  }
  // middleware,
);

// console.log("store.getState", store.getState());
// // console.log(combineReducers);
