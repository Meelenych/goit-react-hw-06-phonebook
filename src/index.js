import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { createStore } from "redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} />
    {/* <PersistGate loading={null} persistor={store.persistor}> */}
    <App />
    {/* </PersistGate> */}
    <Provider />
  </React.StrictMode>,
  document.getElementById("root")
);
