import React, { useEffect, useState } from "react";
import useAPI from "../../Services/APIs/Common/useAPI";
import toys from "../../Services/APIs/Toys/toys";
import HomeView from "./HomeView";
import { useNavigate } from "react-router-dom";

export default function HomeController() {
    const getToysGetAPI = useAPI(toys.getAllToys);
    const navigate = useNavigate();

    useEffect(() => {
        getToysGetAPI.request();
    }, []);

    const goToPage = (toy) => {
        navigate("/detail/" + toy._id, {
            state: {
                toy: JSON.stringify(toy),
            },
        });
    };

    console.log(getToysGetAPI.data);
    return (
        <HomeView
            arrayToys={getToysGetAPI.data}
            loading={getToysGetAPI.loading}
            goToPage={goToPage}
        />
    );
}
