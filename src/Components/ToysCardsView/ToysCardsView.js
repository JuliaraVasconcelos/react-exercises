import React from 'react';
import { Grid, Typography, CircularProgress, Button } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import CardInfo from '../../Components/CardInfo/CardInfo'
import './ToysCardsView.css'
import DeleteIcon from '@mui/icons-material/Delete';

const ToysCardsView = ({ loading, arrayToys, goToPage, onDeleteToy }) => {

    let cards = [];
    console.log(loading);
    if (loading) {
        cards.push(
            <Grid key={1} item lg={12} xl={12} className="itemClass">
                <CircularProgress />
            </Grid>

        )
    } else if (arrayToys) {
        arrayToys.toys.forEach(toy => {
            cards.push(
                <Grid key={toy._id} item sm={12} md={6} lg={2} xl={2} className="itemClass" >
                    <Card className='cardClass'>
                        <CardMedia
                            component="img"
                            height="140"
                            src={toy.mainImage}
                            alt={toy.name}
                            onClick={() => goToPage(toy)}
                        />
                        <CardContent>
                            <Button variant='terceary' className="deleteMainCardButton" onClick={() => onDeleteToy(toy)}>
                                <DeleteIcon color="error" />
                            </Button>
                            <Typography gutterBottom variant="body2" component="div" className='toysTitleCard' onClick={() => goToPage(toy)}>
                                {toy.name}
                            </Typography>
                            <CardInfo toy={toy} />
                        </CardContent>
                    </Card>
                </Grid>
            )
        });
    }
    return (
        <Grid item lg={12} >
            <Grid
                container
                spacing={3}
                alignItems="center"
            >
                {cards}
            </Grid>
        </Grid>
    );
};

export default ToysCardsView;