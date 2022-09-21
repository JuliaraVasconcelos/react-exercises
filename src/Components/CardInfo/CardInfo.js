import React from "react";
import {
    Box,
    Stack,
    Container,
    CircularProgress,
    Grid,
    Typography,
    Button,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./CardInfo.css";
const CardInfo = () => {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="boxClass"
        >
            <CheckCircleOutlineIcon color="success" fontSize="small" />
            <Typography variant="body2" component="div" className="CardInfoText">
                Disponível
            </Typography>
        </Stack>
    );
};

export default CardInfo;
