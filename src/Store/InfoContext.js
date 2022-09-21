import React, { useReducer } from "react";
import { createContext } from "react";

export const InfoContext = createContext({
    qtdItems: 10,
    teste: 1,
    onChangeInfo: () => { },
});

const InfoReducer = (state, action) => {
    let newState = { ...state };
    if (action.type === "CHANGE_CARDS_ITEMS") {
        newState.qtdItems = action.val;
        return newState;
    }
};
export const InfoContextProvider = (props) => {
    const [infoState, dispatch] = useReducer(InfoReducer, {
        qtdItems: 10,
        teste: 1,
    });

    const onChangeCardItems = (info) => {
        dispatch({ type: "CHANGE_CARDS_ITEMS", val: info });
    };

    return (
        <InfoContext.Provider
            value={{
                qtdItems: infoState.qtdItems,
                teste: infoState.teste,
                onChangeCardItems: onChangeCardItems,
            }}
        >
            {props.children}
        </InfoContext.Provider>
    );
};
