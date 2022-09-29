import React, { useContext } from 'react';
import HomeController from '../Screens/Home/HomeController';
import LoginController from '../Screens/Login/LoginController';
import { Routes, Route } from "react-router-dom";
import { InfoContext } from '../store/InfoContext';
import AddController from '../Screens/Add/AddController';

const RouteController = () => {

    const { tokenLogin, onMakeLogin } = useContext(InfoContext);

    let hasToken = false;
    if (tokenLogin === undefined || tokenLogin === null) {
        let storageToken = localStorage.getItem("tokenLogin");
        if (storageToken !== null && storageToken !== undefined) {
            onMakeLogin(storageToken);
            hasToken = true;
        }
    } else {
        hasToken = true;
    }

    if (hasToken) {
        return (
            <Routes>
                <Route path="/" element={<HomeController />} />
                <Route path="detail">
                    <Route path=":infoID" element={<AddController />} />
                    <Route path="add" element={<AddController />} />
                </Route>
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route path="/" element={<LoginController />} />
                <Route path="*" element={<LoginController />} />
            </Routes>
        );
    }
};

export default RouteController;