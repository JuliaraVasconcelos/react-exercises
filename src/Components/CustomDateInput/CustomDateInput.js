import { Typography } from "@mui/material";
import React, { useState } from "react";
import "./CustomDateInput.css";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Sizes from "../../Utils/Common/Sizes";
import Colors from "../../Utils/Common/Colors";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { ptBR } from "date-fns/locale";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const BootstrapInput = styled(InputBase)(({ theme, error }) => {
    let borderNormal = "1px solid " + Colors.NeutralMedium;
    let borderFocused = "2px solid " + Colors.SecondaryMedium;
    if (error) {
        borderNormal = "1px solid " + Colors.Error;
        borderFocused = "2px solid " + Colors.Error;
    }

    return {
        "label + &": {
            marginTop: "18px",
        },
        "& .MuiInputBase-input": {
            borderRadius: 4,
            position: "relative",
            backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
            border: borderNormal,
            fontSize: Sizes.FontSizeSM,
            width: "100%",
            padding: "10px 12px",
            transition: theme.transitions.create([
                "border-color",
                "background-color",
                "box-shadow",
            ]),
            "&:focus": {
                border: borderFocused,
            },
        },
    };
});

const CustomDateInput = ({
    label,
    errorMessage,
    onChange,
    value,
    placeholder,
    hasError,
    disabled,
}) => {
    const [open, setOpen] = useState(false);

    const onClickCalendar = () => {
        if (!disabled) {
            setOpen((open) => !open);
        }
    };
    let colorLabel = "";
    if (hasError) {
        colorLabel = "error";
    }

    return (
        <div className="boxCustomInput">
            <FormControl variant="standard">
                <InputLabel
                    color="secondary"
                    shrink
                    htmlFor="bootstrap-input"
                    error={hasError}
                >
                    {label}
                </InputLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
                    <DatePicker
                        value={value}
                        onChange={(newValue) => {
                            setOpen(false);
                            onChange(newValue);
                        }}
                        placeholder={placeholder}
                        disabled={disabled}
                        open={open}
                        renderInput={(params) => (
                            <BootstrapInput
                                {...params}
                                error={hasError}
                                endAdornment={
                                    <InputAdornment
                                        position="end"
                                        onClick={onClickCalendar}
                                        sx={{ cursor: "pointer" }}
                                    >
                                        <CalendarMonthIcon />
                                    </InputAdornment>
                                }
                            />
                        )}
                    />
                </LocalizationProvider>
                <Typography
                    variant="minSize"
                    color={colorLabel}
                    className="labelMessageCustomInput"
                >
                    {errorMessage}
                </Typography>
            </FormControl>
        </div>
    );
};
export default CustomDateInput;
