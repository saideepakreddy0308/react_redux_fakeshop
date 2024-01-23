import React from "react";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

const appRoot = createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
