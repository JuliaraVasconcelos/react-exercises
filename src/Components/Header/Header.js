import React, { useContext } from 'react';
import { InfoContext } from '../../store/InfoContext';
import { Typography, Grid, Stack } from '@mui/material';
import logoImg from '../../Images/Logo.gif'
import './Header.css'
import { ToastContainer } from 'react-toastify';


const Header = () => {

    const context = useContext(InfoContext);
    let userInitial = context.info[0];

    return (
        <>
            <ToastContainer />
            <Grid
                container
                spacing={3}
                alignItems="center"
                className='gridHeader'
            >
                <Grid item xs={12} md={6} xl={6} className="leftHeader">
                    <img src={logoImg} alt="children" width={'50px'} className="logo Img" />
                </Grid>
                <Grid item xs={12} md={6} xl={6} className="rightHeader">
                    <Stack direction="row" className="rightHeader">
                        <Stack direction="column" className="rightHeader">
                            <Typography variant="h2" >
                                Olá, {context.info}!
                            </Typography>
                            <div className='logoutButton' onClick={() => context.onMakeLogout()}>
                                <Typography variant="minSize" className='logoutButton'>
                                    Logout
                                </Typography>
                            </div>

                        </Stack>

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