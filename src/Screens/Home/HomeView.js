import * as React from "react";
import "./Home.css";
import {
    Box,
    Container,
    CircularProgress,
    Grid,
    Typography,
    Button,
} from "@mui/material";
import ItemsView from "../../Components/ItemsView/ItemsView";
import TopCards from "../../Components/TopCards/TopCards";

export default function HomeView({ loading, arrayToys, goToPage }) {
    let infoBox = [];

    if (loading) {
        infoBox.push(
            <Grid key={1} item lg={12} xl={12} className="itemClass">
                <CircularProgress />
            </Grid>
        );
    } else if (arrayToys) {
        infoBox.push(
            <ItemsView key={2} arrayToys={arrayToys} goToPage={goToPage} />
        );
    }
    return (
        <Container fixed className="container" maxWidth="lg">
            <Box className="contentBox">
                <Grid container spacing={3} alignItems="center">
                    <Grid item md={6} lg={6} xl={6} className="titlePage">
                        <Typography variant="h1">Base de Brinquedos</Typography>
                    </Grid>
                    <Grid item md={6} lg={6} xl={6} className="titleButton">
                        <Button variant="primary" className="buttonClass">
                            Cadastrar brinquedo
                        </Button>
                    </Grid>
                    <Grid item md={12} lg={12} xl={12} className="titleButton">
                        <TopCards />
                    </Grid>
                    {infoBox}
                </Grid>
            </Box>
        </Container>
    );
}
