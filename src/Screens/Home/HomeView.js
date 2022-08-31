import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function HomeView({ count, status, iniciar, pausar, parar, zerar }) {

    let buttons = null

    if (status === "Rodando") {
        buttons = (
            <>
                <Button variant={"primary"} onClick={pausar}>Pausar</Button>
                <Button variant={"primary"} onClick={parar}>Parar</Button>
                <Button variant={"primary"} onClick={zerar}>Zerar</Button>
            </>
        );
    } else if (status === "Parado") {
        buttons = (
            <>
                <Button variant={"primary"} onClick={iniciar}>Iniciar</Button>
            </>
        );
    } else {
        buttons = (
            <>
                <Button variant={"primary"} onClick={iniciar}>Re-Iniciar</Button>
            </>
        );
    }
    return (
        <Container maxWidth="xl">
            <Typography variant="h1">Contador = {count} </Typography>
            {buttons}
        </Container>
    );
}
