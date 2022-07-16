import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./app/store";

import { ApolloProvider } from "@apollo/client";
import client from "./app/aplClient";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <GlobalStyle/>  
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
    <ToastContainer style={{fontSize : "1.6rem", width : "50vh"}}/>
  </Router>

  // </React.StrictMode>
);