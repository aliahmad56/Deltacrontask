import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// **************
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));



root.render(
  //Jo component store ko access kar rhe hain unko yahan provider ke andar store ke sath likenge
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>
  // document.getElementById("root")
);


