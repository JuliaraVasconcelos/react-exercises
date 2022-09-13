import * as React from 'react';
import './Home.css'
import { Box, Container, CircularProgress, Grid, Typography, Button, Stack } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import CardInfo from '../../Components/CardInfo/CardInfo'
import Header from '../../Components/Header/Header';

export default function HomeView({ loading, arrayToys, goToPage, info }) {

    let infoBox = [];

    if (loading) {
        infoBox.push(
            <Grid key={1} item lg={12} xl={12} className="itemClass">
                <CircularProgress />
            </Grid>

        )
    } else if (arrayToys) {
        arrayToys.toys.forEach(toy => {
            infoBox.push(
                <Grid key={toy._id} item sm={12} md={6} lg={2} xl={2} className="itemClass" onClick={() => goToPage(toy)}>
                    <Card className='cardClass'>
                        <CardMedia
                            component="img"
                            height="140"
                            src={toy.mainImage}
                            alt={toy.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body2" component="div" className='titleCard'>
                                {toy.name}
                            </Typography>
                            <CardInfo />
                        </CardContent>
                    </Card>
                </Grid>
            )
        });
    }
    return (
        <Container fixed className="container" maxWidth="lg">
            <Stack>
                <Header />
                <Box className="contentBox">
                    <Grid
                        container
                        spacing={3}
                        alignItems="center"
                    >
                        <Grid item lg={6} xl={6} className="titlePage">
                            <Typography variant="h1" >
                                Base de Brinquedos - {info}
                            </Typography>
                        </Grid>
                        <Grid item lg={6} xl={6} className="titleButton">
                            <Button variant='primary' className='buttonClass'>Cadastrar brinquedo</Button>
                        </Grid>
                        {infoBox}

                    </Grid>
                </Box>
            </Stack>
        </Container>
    );
}