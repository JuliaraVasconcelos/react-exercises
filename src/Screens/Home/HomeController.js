import React, { useState, useEffect, useRef, useContext } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import toys from '../../Services/APIs/Toys/toys';
import HomeView from './HomeView';
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../../store/InfoContext";
import { Alert } from '@mui/material';

const HomeController = () => {

    const getToysGetAPI = useAPI(toys.getAllToys);
    const getToysPaginateAPI = useAPI(toys.getToysPaginate);
    const deleteToyAPI = useAPI(toys.deleteToy);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);
    const [messageInfo, setMessageInfo] = useState(null);
    const [showAlertInfo, setShowAlertInfo] = useState(false);
    const [showConfirmDeleteDialog, setShowConfirmDeleteDialog] = useState(false);
    const choseToy = useRef(-1);
    const tableRef = useRef(null);

    const navigate = useNavigate();
    const userCoordinates = useRef(null);
    const context = useContext(InfoContext);
    const [viewType, setViewType] = useState("cards");

    useEffect(() => {
        getToysGetAPI.request(1);
    }, []);

    const getDataPage = (query) => {
        return new Promise((resolve, reject) => {
            console.log(query);

            let page = query.page + 1
            let info = `page=${page}&perPage=${query.pageSize}`;
            if (query.orderBy !== undefined && query.orderBy !== "") {
                info += `&orderBy=${query.orderBy.field}`
            }
            if (query.orderDirection !== undefined && query.orderDirection !== "") {
                info += `&orderDirection=${query.orderDirection}`
            }
            if (query.search !== undefined && query.search !== "") {
                info += `&search=${query.search}`
            }
            getToysPaginateAPI.requestPromise(info, context.tokenLogin)
                .then(info => {
                    console.log(info);
                    resolve({
                        data: info.toys,
                        page: info.page - 1,
                        totalCount: info.totalItems
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        })
    }

    const onChangeViewType = (viewTypeInfo) => {
        console.log(viewTypeInfo);
        setViewType(viewTypeInfo);
    }

    const addToy = () => {
        navigate("/detail/add", {
            state: {
                latitude: userCoordinates.current ? userCoordinates.current.latitude : 0,
                longitude: userCoordinates.current ? userCoordinates.current.longitude : 0
            }
        })
    }

    console.log(userCoordinates);
    const goToPage = (toy) => {

        navigate("/detail/" + toy._id, {
            state: {
                toy: JSON.stringify(toy),
                latitude: userCoordinates.current ? userCoordinates.current.latitude : 0,
                longitude: userCoordinates.current ? userCoordinates.current.longitude : 0
            }
        })
    }

    const onHandleCloseDialog = (buttonClicked) => {

        if (buttonClicked === 2) {
            setIsLoadingDelete(true);
            console.log("AQUI - " + choseToy.current);

            deleteToyAPI.requestPromise(context.tokenLogin, choseToy.current)
                .then(info => {
                    console.log(info);
                    setIsLoadingDelete(false);
                    setMessageInfo(
                        <Alert severity="success">
                            Brinquedo removido com sucesso
                        </Alert>
                    )
                    setShowAlertInfo(true);
                    getToysGetAPI.request(1);
                    if (tableRef.current) {
                        tableRef.current.onQueryChange();
                    }
                })
                .catch(error => {
                    console.log(error);
                    setIsLoadingDelete(false);
                    setShowAlertInfo(true);
                    setMessageInfo(
                        <Alert severity="error">
                            Erro ao remover o brinquedo {error.code}
                        </Alert>
                    )
                })
        }
        setShowConfirmDeleteDialog(false);
    }

    const onDeleteToy = (toy) => {
        console.log(toy);
        choseToy.current = toy._id;
        setShowConfirmDeleteDialog(true);
    }

    const onCloseAlertInfo = () => {
        setShowAlertInfo(false);
    }

    return <HomeView arrayToys={getToysGetAPI.data} loading={getToysGetAPI.loading}
        goToPage={goToPage} info={context.info} getDataPage={getDataPage}
        viewType={viewType} onChangeViewType={onChangeViewType}
        addToy={addToy} onDeleteToy={onDeleteToy} isLoadingDelete={isLoadingDelete} messageInfo={messageInfo}
        showConfirmDeleteDialog={showConfirmDeleteDialog} onHandleCloseDialog={onHandleCloseDialog} showAlertInfo={showAlertInfo}
        onCloseAlertInfo={onCloseAlertInfo} tableRef={tableRef} />
}
export default HomeController;