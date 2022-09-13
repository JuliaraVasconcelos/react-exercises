<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MuiThemes from "./Utils/Common/MuiThemes";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/RouteController";
import { InfoContextProvider } from "./Store/InfoContext";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MuiThemes from './Utils/Commom/MuiThemes';
import HomeController from './Screens/Home/HomeController';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes/RouteController';
// import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 2b5a94ed2fef609fa39e64d1bd1032fd32ac7c6d

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MuiThemes>
<<<<<<< HEAD
      <BrowserRouter>
        <InfoContextProvider>
          <Routes />
        </InfoContextProvider>
      </BrowserRouter>
=======
      {/* <BrowserRouter>
        <Routes />
      </BrowserRouter> */}
      <HomeController/>
>>>>>>> 2b5a94ed2fef609fa39e64d1bd1032fd32ac7c6d
    </MuiThemes>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
