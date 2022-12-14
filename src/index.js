import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import App from "./App";
// import MapContainer from './component/googleMap';
import store from "./store";
import { persistor } from "./store";
import * as serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
