import React, { useContext } from 'react';
import { InfoContext } from '../../Store/InfoContext';
import { Typography, Grid, Stack } from '@mui/material';
import logoImg from '../../Images/Logo.gif'
import './Header.css'

const Header = () => {

    const context = useContext(InfoContext);
    let userInitial = context.info[0];
    return (
        <>
            <Grid
                container
                spacing={3}
                alignItems="center"
                className='gridHeader'
            >
                <Grid item lg={6} xl={6} className="leftHeader">
                    <img src={logoImg} alt="children" width={'50px'} className="logo Img" />
                </Grid>
                <Grid item lg={6} xl={6} className="rightHeader">
                    <Stack direction="row" className="rightHeader">
                        <Typography variant="h2" >
                            Olá, {context.info}!
                        </Typography>
                        <div className='headerUserLogoInfo' onClick={() => context.onChangeInfo('Mudou')}>
                            <Typography variant="h1" className='iconFont' >{userInitial}</Typography>
                        </div>
                    </Stack>

                </Grid>
            </Grid>
        </>
    );
};

export default Header;