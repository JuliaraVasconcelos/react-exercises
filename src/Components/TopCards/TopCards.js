import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InfoContext } from "../../store/InfoContext";

const TopCards = () => {
    const context = useContext(InfoContext);
    const onHandleChange = (e, value) => {
        context.onChangeCardItems(value.props.value);
    };
    const sizes = [1, 3, 5, 10, 20];
    let pushItems = [];

    sizes.forEach((element) => {
        pushItems.push(
            <MenuItem key={element} value={element}>
                {element}
            </MenuItem>
        );
    });

    return (
        <div>
            <InputLabel id="demo-simple-select-label">Itens</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={context.qtdItems}
                label="Itens"
                onChange={onHandleChange}
            >
                {pushItems}
            </Select>
        </div>
    );
};

export default TopCards;
