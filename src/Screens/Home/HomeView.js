import * as React from 'react';
import './Home.css'
import { Box, Container, Grid, Typography, Snackbar } from '@mui/material';
import Header from '../../Components/Header/Header';

import ToysTableView from '../../Components/ToysTableView/ToysTableView';
import ToysCardsView from '../../Components/ToysCardsView/ToysCardsView';
import ToysTopList from '../../Components/ToysTopList/ToysTopList';
import renderIf from 'render-if';
import ConfirmDialog from '../../Components/ConfirmDialog/ConfirmDialog';

export default function HomeView({ loading, arrayToys, goToPage, info, getDataPage, viewType, onChangeViewType, addToy,
    onDeleteToy, isLoadingDelete, showAlertInfo, onCloseAlertInfo, messageInfo, showConfirmDeleteDialog, onHandleCloseDialog,
    tableRef }) {

    let isLoading = false;
    if (loading || isLoadingDelete) {
        isLoading = true;
    }
    return (
        <Container fixed className="container" maxWidth="lg">
            <Header />
            <Box className="contentBox">
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                >
                    <Grid item lg={12} xl={12} className="titlePage">
                        <Typography variant="h1" >
                            Base de Brinquedos - {info}
                        </Typography>
                    </Grid>
                    <ToysTopList onChangeView={onChangeViewType} viewType={viewType} addToy={addToy} />

                    <Grid item lg={12} xl={12} sx={{ width: '100%' }} >
                        {renderIf(viewType === "cards")(
                            <ToysCardsView loading={isLoading} arrayToys={arrayToys} goToPage={goToPage} onDeleteToy={onDeleteToy} />
                        )}
                        {renderIf(viewType === "table")(
                            <ToysTableView loading={isLoading} goToPage={goToPage} getDataPage={getDataPage} onDeleteToy={onDeleteToy} tableRef={tableRef} />
                        )}
                    </Grid>
                </Grid>
                <ConfirmDialog messageDialog={"Deseja remover o item?"} messageOption1={"Não"} messageOption2={"Sim"}
                    onHandleClose={onHandleCloseDialog} open={showConfirmDeleteDialog} />
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={showAlertInfo}
                    autoHideDuration={6000}
                    onClose={onCloseAlertInfo}
                >
                    {messageInfo}
                </Snackbar>
            </Box>
        </Container>
    );
}