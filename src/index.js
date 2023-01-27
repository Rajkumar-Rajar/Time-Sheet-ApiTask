import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import Appj from "./Appj"
import Root12 from './ro1';
import Tablejs from './Tablejs';
import Table from './Table';
import Tableb from './Tableb';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <Appj /> */}
    {/* <Table /> */}
    {/* <Root12 /> */}
    <Tablejs />
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




{/* <Column dataField="name" />
          <Column dataField="username" />
          <Column dataField="email" />
          <Column dataField="phone"  />
          <Column dataField="website" /> */}