import React, { useContext } from "react";
import "./ItemsView.css";
import { Grid, Typography } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import CardInfo from "../../Components/CardInfo/CardInfo";
import { InfoContext } from "../../store/InfoContext";

export default function HomeView({ loading, arrayToys, goToPage }) {
    const context = useContext(InfoContext);
    let infoBox = [];
    if (arrayToys) {
        let indItems = 0;
        arrayToys.toys.forEach((toy) => {
            if (indItems < context.qtdItems) {
                infoBox.push(
                    <Grid
                        key={toy._id}
                        item
                        sm={12}
                        md={6}
                        lg={2}
                        xl={2}
                        className="itemClass"
                        onClick={() => goToPage(toy)}
                    >
                        <Card className="cardClass">
                            <CardMedia
                                component="img"
                                height="140"
                                src={toy.mainImage}
                                alt={toy.name}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    component="div"
                                    className="titleCard"
                                >
                                    {toy.name}
                                </Typography>
                                <CardInfo />
                            </CardContent>
                        </Card>
                    </Grid>
                );
            }
            indItems++;
        });
    }
    return <>{infoBox}</>;
}
