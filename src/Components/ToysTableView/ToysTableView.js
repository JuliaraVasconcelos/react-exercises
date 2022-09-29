
import React from 'react';
import { Grid } from '@mui/material';
import MaterialTable from 'material-table';
import Colors from '../../Utils/Common/Colors'

const ToysTableView = ({ loading, goToPage, getDataPage, onDeleteToy, tableRef }) => {

    const columns = [
        { title: 'Nome', field: 'name', },
        { title: 'Código', field: 'code' },
        { title: 'Responsável', field: 'receiveResponsable' }
    ];

    return (
        <Grid item lg={12} xl={12}>
            <MaterialTable
                xs={12}
                tableRef={tableRef}
                title="Remote Data Preview"
                columns={columns}
                className="customTable"
                data={getDataPage}
                isLoading={loading}
                actions={[
                    {
                        icon: 'visibility',
                        tooltip: 'Ver detalhe',
                        onClick: (event, rowData) => {
                            goToPage(rowData)
                        }
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Apagar brinquedo',
                        onClick: (event, rowData) => {
                            onDeleteToy(rowData)
                        }
                    }
                ]}
                options={{
                    showTitle: false,
                    search: true,
                    actionsColumnIndex: -1,
                    headerStyle: {
                        backgroundColor: '#f2f2f2',
                        color: Colors.PrimaryDark,
                    },
                    rowStyle: {
                        color: Colors.PrimaryDark
                    },
                    searchFieldStyle: {
                        color: Colors.PrimaryDark,
                        borderBottom: '2px solid #333',
                    }
                }}
            />
        </Grid>
    );
};

export default ToysTableView;