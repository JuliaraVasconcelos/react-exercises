import React from 'react';
import { Stack, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './CardInfo.css'
const CardInfo = (toy) => {

    if (toy.toy.status === 1) {
        return (
            <Stack direction="row" justifyContent="center" alignItems="center" className='boxClass'>
                <CheckCircleOutlineIcon color="success" fontSize="small" />
                <Typography variant="body2" component="div" className="CardInfoText">
                    Disponível
                </Typography>
            </Stack>
        );
    } else {
        return (
            <Stack direction="row" justifyContent="center" alignItems="center" className='boxClass'>
                <HighlightOffIcon color="error" fontSize="small" />
                <Typography variant="body2" component="div" className="CardInfoText">
                    Indisponível
                </Typography>
            </Stack>
        );
    }

};

export default CardInfo;