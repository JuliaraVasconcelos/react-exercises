import * as React from 'react';
import './Home.css'
import { Box, Container, CircularProgress, Grid, Typography, Button, Stack } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import CardInfo from '../../Components/CardInfo/CardInfo'
import Header from '../../Components/Header/Header';

<<<<<<< HEAD
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
=======
import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Youtube from "../../Components/InnerComponent/Youtube";
import Twitch from "../../Components/InnerComponent/Twitch";
import Instagram from "../../Components/InnerComponent/Instagram";
import TikTok from "../../Components/InnerComponent/TikTok";
import Parcerias from "../../Components/InnerComponent/Parcerias";

export default function HomeView({ handleChange, value, a11yProps }) {

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    
    return (
        
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Youtube" {...a11yProps(0)} />
                        <Tab label="Twitch" {...a11yProps(1)} />
                        <Tab label="TikTok" {...a11yProps(2)} />
                        <Tab label="Instagram" {...a11yProps(3)} />
                        <Tab label="Parcerias" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Youtube />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Twitch />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <TikTok />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Instagram />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Parcerias />
                </TabPanel>
            </Box>
        </div>
>>>>>>> 2b5a94ed2fef609fa39e64d1bd1032fd32ac7c6d
    );
}