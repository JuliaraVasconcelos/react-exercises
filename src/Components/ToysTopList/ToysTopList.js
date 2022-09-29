import React from 'react';
import { Grid, Button, Stack } from '@mui/material';
import TableViewIcon from '@mui/icons-material/TableView';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './ToysTopList.css'
const ToysTopList = ({ addToy, onChangeView, viewType }) => {

    let classTable = "";
    let classCard = "";
    let colorTable = "";
    let colorCard = "";
    if (viewType === "cards") {
        classTable = "ViewOptionDiv ViewOptionNotSelect";
        classCard = "ViewOptionDiv ViewOptionSelect";
        colorTable = "";
        colorCard = "primary";
    } else {
        classTable = "ViewOptionDiv ViewOptionSelect";
        classCard = "ViewOptionDiv ViewOptionNotSelect";
        colorTable = "primary";
        colorCard = "";
    }

    let chooseView = null;
    if (window.innerWidth > 1000) {
        chooseView = (
            <Grid item xs={12} md={6} lg={6} xl={6} className="ViewInfo">
                <Stack direction="row" className='stackViewInfo'>
                    <div className={classCard} onClick={() => onChangeView("cards")}>
                        <DashboardIcon color={colorCard} />
                    </div>
                    <div className={classTable} onClick={() => onChangeView("table")} >
                        <TableViewIcon color={colorTable} />
                    </div>
                </Stack>
            </Grid>
        );
    }
    return (
        <>
            {chooseView}
            <Grid item xs={12} md={6} lg={6} xl={6} className="toysTopButton">
                <Button variant='primary' className='buttonClass' onClick={addToy}>Cadastrar brinquedo</Button>
            </Grid>
        </>
    );
};

export default ToysTopList;