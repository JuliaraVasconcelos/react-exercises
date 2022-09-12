import React, { useState, useEffect } from "react";
import HomeView from "./HomeView";

const HomeController = () => {

    const [alignment, setAlignment] = React.useState('web');
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

        return (
            <HomeView 
            handleChange={handleChange}
            value={value}
                 />
        );
    }

export default HomeController;
