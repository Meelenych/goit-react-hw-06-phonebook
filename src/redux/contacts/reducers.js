import { v4 as uuidv4 } from "uuid";
import { combineReducers } from "redux";

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

const contactsFilter = (state = initState, action) => {
  return state;
};

const contactsManage = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];

    case "DELETE_CONTACT":
      return state.filter((contact) => contact.id !== action.payload.id);

    default:
      return state;
  }
};

export const contactsReducer = combineReducers({
  contacts: contactsManage,
  filter: contactsFilter,
});

//Композиция редюсеров
//import { combineReducers } from 'redux';
// import notesReducer from './notes';
// import filterReducer from './filter';

// const rootReducer = combineReducers({
//   notes: notesReducer,
//   filter: filterReducer,
// });

// export default rootReducer;
