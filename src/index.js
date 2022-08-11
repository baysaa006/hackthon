import React from "react";
import ReactDOM from "react-dom";
import store from "./server/store";
import Interceptor from "./server/axios-interceptor";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";

const persistor = persistStore(store);
Interceptor(store);
const rootEl = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Component />
      </PersistGate>
    </Provider>,
    rootEl
  );

render(App);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals