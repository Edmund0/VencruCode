import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import './index.tw.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />             {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  </React.StrictMode>
);

// Tutorial React-Router: https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
