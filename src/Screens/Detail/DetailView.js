import React from 'react';
import { Container, Stack, Button, Typography, Box } from '@mui/material';
import './Detail.css'

const DetailView = ({ toyInfo, onBackButton }) => {

    return (
        <Container>
            <Box className="contentBox">
                <Stack spacing={2} className='box'>
                    <Typography gutterBottom variant="h2" className="text">
                        <img src={toyInfo.mainImage} height="150" />
                    </Typography>
                    <Typography gutterBottom variant="h2" className="text">
                        {toyInfo.name}
                    </Typography>
                    <Typography gutterBottom variant="h2" className="text">
                        {toyInfo.code}
                    </Typography>
                    <Typography gutterBottom variant="h2" className="text">
                        {toyInfo.receiveDate}
                    </Typography>
                    <Button variant="contained" onClick={() => onBackButton()}>Voltar</Button>
                </Stack>
            </Box>
        </Container>
    );
};


export default DetailView;