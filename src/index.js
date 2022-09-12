import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MuiThemes from './Utils/Commom/MuiThemes';
import HomeController from './Screens/Home/HomeController';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes/RouteController';
// import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <MuiThemes>
      {/* <BrowserRouter>
        <Routes />
      </BrowserRouter> */}
      <HomeController/>
    </MuiThemes>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();