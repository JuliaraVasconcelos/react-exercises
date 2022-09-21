import { Typography, MenuItem, Select } from "@mui/material";
import React from "react";
import "./CustomSelect.css";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Sizes from "../../Utils/Common/Sizes";
import Colors from "../../Utils/Common/Colors";

const CustomSelect = ({
    label,
    errorMessage,
    value,
    placeholder,
    hasError,
    onChange,
    list,
    disabled,
}) => {
    let colorLabel = "neutral";
    let borderNormal = "1px solid " + Colors.NeutralMedium;
    if (hasError) {
        colorLabel = "error";
        borderNormal = "1px solid " + Colors.Error;
    }

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        "label + &": {
            marginTop: "10px",
            "&:focus": {
                color: "blue",
            },
        },
        "& .MuiInputBase-input": {
            borderRadius: 4,
            position: "relative",
            backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
            border: borderNormal,
            fontSize: Sizes.FontSizeSM,
            width: "100%",
            padding: "10px 12px",
        },
    }));

    return (
        <div className="boxCustomSelect">
            <FormControl>
                <InputLabel shrink error={hasError} color={colorLabel}>
                    {label}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={value}
                    size="small"
                    displayEmpty
                    placeholder={placeholder}
                    disabled={disabled}
                    error={hasError}
                    input={<BootstrapInput />}
                    onChange={onChange}
                    renderValue={(selected) => {
                        if (!selected || selected.length === 0) {
                            return <em>{placeholder}</em>;
                        }

                        let valueText = "";
                        list.forEach((element) => {
                            if (element.value === value) {
                                valueText = element.label;
                            }
                        });
                        return valueText;
                    }}
                >
                    {list.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                <Typography
                    variant="minSize"
                    color={colorLabel}
                    htmlFor="bootstrap-input"
                    className="labelMessageCustomInput"
                >
                    {errorMessage}
                </Typography>
            </FormControl>
        </div>
    );
};

export default CustomSelect;
