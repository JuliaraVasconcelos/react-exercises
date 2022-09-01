import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function TrafficView({ count, status, iniciar, yellow, red, green }) {

    
    let buttons = null

    if (status === 'change') {
        buttons = (
            <>
                <Button variant={"primary"} onClick={yellow}>Yellow</Button>
                <Button variant={"primary"} onClick={red}>Red</Button>
                <Button variant={"primary"} onClick={green}>Green</Button>
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
