import React, { createContext, useState } from "react";

export const InfoContext = createContext({
    info: "",
    onChangeInfo: () => { },
});



export const InfoContextProvider = (props) => {

    const [info, setInfo] = useState("")

    const onChangeInfo = (newInfo) => {
        setInfo(newInfo)
    }

    const [count, setCount] = useState(0)

    const onAddCount = () => {
        setCount(count => count + 1)
    }


    return (
        <InfoContext.Provider
            value={{
                info: info,
                onChangeInfo: onChangeInfo,
                count: count,
                onAddCount: onAddCount
            }}
        >
            {props.children}
        </InfoContext.Provider>
    );
        };