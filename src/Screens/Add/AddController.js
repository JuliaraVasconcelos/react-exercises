import React, { useState, useContext } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import toys from '../../Services/APIs/Toys/toys';
import AddView from './AddView';
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { InfoContext } from "../../store/InfoContext";
import format from 'date-fns/format'
import { Alert } from '@mui/material';

const AddController = () => {


    const { state: { toy, latitude, longitude } } = useLocation();

    //Checking by new Toy
    let isNewToy = true;
    let toyInfo = null;
    let imageInitInfo = ["", "", ""];
    let statusToyInit = 1;
    if (toy && toy !== "") {
        toyInfo = JSON.parse(toy);
        console.log(toyInfo);
        isNewToy = false;
        statusToyInit = toyInfo.status;
        imageInitInfo = [toyInfo.mainImage, toyInfo.detailImage1, toyInfo.detailImage2];
    }

    const [isLoading, setIsLoading] = useState(false)
    const [mainImg, setMainImg] = useState(imageInitInfo[0]);
    const [detailImg1, setDetailImg1] = useState(imageInitInfo[1]);
    const [detailImg2, setDetailImg2] = useState(imageInitInfo[2]);
    const [statusToy, setStatusToy] = useState(statusToyInit);
    const [showMessageInfo, setShowMessageInfo] = useState(false);
    const [messageInfo, setMessageInfo] = useState(null);
    const context = useContext(InfoContext);

    const uploadToysPhotoAPI = useAPI(toys.uploadToysPhoto);
    const addToyAPI = useAPI(toys.addToy);
    const editToyAPI = useAPI(toys.editToy);

    const navigate = useNavigate();


    const signInSchema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        toyCode: Yup.string().required("Código é obrigatório"),
        donateDate: Yup.string().required("A data de doação é obrigatória"),
        donatedName: Yup.string().required("O nome do doador é obrigatório"),
        toyConditions: Yup.number().min(0).max(4).required("A condição é obrigatório"),
    });

    const onSubmit = (values) => {
        if (mainImg === "" || detailImg1 === "" || detailImg2 === "") {
            setMessageInfo(
                <Alert severity="error">
                    Escolha as 3 imagens para prosseguir
                </Alert>
            )
            setShowMessageInfo(true);
            return;
        }

        var convertedDate = format(
            new Date(values.donateDate),
            'yyyy-MM-dd'
        )

        if (isNewToy) {
            addToy(values, convertedDate)
        } else {
            editToy(values, convertedDate)
        }

    }

    const addToy = (values, convertedDate) => {
        let infoSend = {
            name: values.name,
            mainImage: mainImg,
            detailImage1: detailImg1,
            detailImage2: detailImg2,
            conditionType: values.toyConditions,
            code: values.toyCode,
            receiveDate: convertedDate,
            receiveResponsable: values.donatedName,
            latitude: latitude,
            longitude: longitude,
            status: 1,
        }
        setIsLoading(true);
        addToyAPI.requestPromise(context.tokenLogin, infoSend)
            .then(info => {
                setMessageInfo(
                    <Alert severity="success">
                        Brinquedo salvo com sucesso
                    </Alert>
                )
                setShowMessageInfo(true);
                setTimeout(() => {
                    navigate(-1);
                }, 6000);
            })
            .catch(error => {
                setIsLoading(false);
                setMessageInfo(
                    <Alert severity="error">
                        Erro ao cadastrar brinquedo {error.status}
                    </Alert>
                )
                setShowMessageInfo(true);
                console.log(error);
            })
    }

    const editToy = (values, convertedDate) => {
        let infoSend = {
            toyID: toyInfo._id,
            name: values.name,
            mainImage: mainImg,
            detailImage1: detailImg1,
            detailImage2: detailImg2,
            conditionType: values.toyConditions,
            code: values.toyCode,
            receiveDate: convertedDate,
            receiveResponsable: values.donatedName,
            latitude: latitude,
            longitude: longitude,
            status: statusToy,
        }
        setIsLoading(true);
        editToyAPI.requestPromise(context.tokenLogin, infoSend)
            .then(info => {
                setMessageInfo(
                    <Alert severity="success">
                        Brinquedo salvo com sucesso
                    </Alert>
                )
                setShowMessageInfo(true);
                setTimeout(() => {
                    navigate(-1);
                }, 3000);
            })
            .catch(error => {
                setIsLoading(false);
                setMessageInfo(
                    <Alert severity="error">
                        Erro ao editar o brinquedo {error.status}
                    </Alert>
                )
                setShowMessageInfo(true);
                console.log(error);
            })
    }

    const onChangeImage = (imageType, image) => {

        let newImage = image.replace("data:image/jpeg;base64,", "");
        newImage = newImage.replace("data:image/png;base64,", "");
        let infoSend = {
            image: newImage
        }
        setIsLoading(true);
        uploadToysPhotoAPI.requestPromise(context.tokenLogin, infoSend)
            .then(info => {
                setIsLoading(false);
                if (imageType === 1) {
                    setMainImg(info.info.url);
                } else if (imageType === 2) {
                    setDetailImg1(info.info.url);
                } else if (imageType === 3) {
                    setDetailImg2(info.info.url);
                }
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
                let messageError = "";
                if (error.data && error.data.message) {
                    messageError = error.data.message
                }
                setMessageInfo(
                    <Alert severity="error">
                        Erro ao enviar a imagem {error.status} {messageError}
                    </Alert>
                )
                setShowMessageInfo(true);
            })
    }

    const onDeleteImage = (imageType) => {
        if (imageType === 1) {
            setMainImg("");
        } else if (imageType === 2) {
            setDetailImg1("");
        } else if (imageType === 3) {
            setDetailImg2("");
        }
    }

    const onCloseMessage = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowMessageInfo(false);
    };

    const onChangeToyStatus = () => {
        setStatusToy((statusToy) => {
            return statusToy === 0 ? 1 : 0;
        });
    }
    const onBack = () => {
        navigate(-1);
    }
    return (
        <AddView onSubmit={onSubmit} signInSchema={signInSchema} onChangeImage={onChangeImage} onDeleteImage={onDeleteImage}
            isNewToy={isNewToy} toyInfo={toyInfo} onBack={onBack} isLoading={isLoading}
            mainImage={mainImg} detailImage1={detailImg1} detailImage2={detailImg2}
            messageInfo={messageInfo} showMessageInfo={showMessageInfo} onCloseMessage={onCloseMessage}
            statusToy={statusToy} onChangeToyStatus={onChangeToyStatus} />
    );
};

export default AddController;