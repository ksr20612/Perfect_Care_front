import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
import client from "./app/aplClient";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <GlobalStyle/>  
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    <ToastContainer />
  </>

  // </React.StrictMode>
);