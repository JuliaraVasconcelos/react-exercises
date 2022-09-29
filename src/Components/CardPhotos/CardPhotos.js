import React, { useRef } from 'react';
import { Grid, Button, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ImageCard from '../../Images/imageCard.png'
import PropTypes from 'prop-types';
import './CardPhotos.css'
import DeleteIcon from '@mui/icons-material/Delete';

const CardPhotos = ({ mainImage, detailImage1, detailImage2, onChangeImage, onDeleteImage, isLoading }) => {

    let loadindImageType = -1
    const mainInputFile = useRef(null);
    const detail1InputFile = useRef(null);
    const detail2InputFile = useRef(null);

    const onStartChangeImage = (buttonIndex) => {
        loadindImageType = buttonIndex;
        if (buttonIndex === 1) {
            mainInputFile.current.click();
        } else if (buttonIndex === 2) {
            detail1InputFile.current.click();
        } else {
            detail2InputFile.current.click();
        }
    }

    const handleInputChange = (event) => {
        console.log("AQUI");
        console.log(event);
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            onChangeImage(loadindImageType, e.target.result);
        }

    }
    const mountCard = (type, buttonIndex) => {

        let classButton = "";
        let classButtonDiv = "";
        if (type === "detail") {
            classButton = "bottomDetailCardButtonPhotosEmpty"
            classButtonDiv = "bottomDetailCardPhotosEmpty"
        } else {
            classButton = "bottomMainCardButtonPhotosEmpty"
            classButtonDiv = "bottomMainCardPhotosEmpty"
        }

        let button = (<Button variant='secondary' className={classButton} onClick={() => onStartChangeImage(buttonIndex)}>Adicionar Foto</Button>);
        if (isLoading) {
            button = (<CircularProgress color="secondary" size={13} className="circularPhoto" />);
        }

        let currentInputFile = null;
        if (buttonIndex === 1) {
            currentInputFile = mainInputFile;
        } else if (buttonIndex === 2) {
            currentInputFile = detail1InputFile;
        } else {
            currentInputFile = detail2InputFile;
        }
        return (
            <Card>
                <CardContent className="">
                    <Grid
                        container
                        spacing={3}
                        alignItems="center"
                    >
                        <Grid item lg={12} className="topCardPhotosEmpty">
                            <img src={ImageCard} alt="children" height='100px' />
                            <input ref={currentInputFile} type="file" className="inputHiddenFile" name={"upload_file" + type}
                                onChange={handleInputChange} />
                        </Grid>
                        <Grid item lg={12} className={classButtonDiv}>
                            {button}
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        )
    }
    const mountCardNotEmpty = (type, image) => {

        let imageClass = "mainImageDetail";
        let altImage = "Imagem principal do brinquedo";
        if (type === 2) {
            imageClass = "mainImageDetail";
            altImage = "Imagem 1 do brinquedo";
        } else if (type === 3) {
            imageClass = "mainImageDetail";
            altImage = "Imagem 2 do brinquedo";
        }

        let button = null;
        if (isLoading) {
            button = (<CircularProgress color="error" size={13} className="circularPhoto" />);
        } else {
            button = (
                <Button variant='terceary' className="deleteCardButton" onClick={() => onDeleteImage(type)}>
                    <DeleteIcon color="error" />
                </Button>
            );
        }

        return (
            <>
                <img src={image} width="100%" className={imageClass} alt={altImage} />
                <div className='deleteCardButtonDiv'>
                    {button}
                </div>

            </>

        )
    }

    let mainImageBox = null;
    let detailImage1Box = null;
    let detailImage2Box = null;
    if (mainImage) {
        mainImageBox = mountCardNotEmpty(1, mainImage);
    } else {
        mainImageBox = mountCard("main", 1);
    }
    if (detailImage1) {
        detailImage1Box = mountCardNotEmpty(2, detailImage1);
    } else {
        detailImage1Box = mountCard("detail", 2);
    }
    if (detailImage2) {
        detailImage2Box = mountCardNotEmpty(3, detailImage2);
    } else {
        detailImage2Box = mountCard("detail", 3);
    }

    return (
        <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{ marginBottom: '20px' }}
        >
            <Grid item lg={12} className="titlePage">
                {mainImageBox}
            </Grid>
            <Grid item lg={6} className="titlePage">
                {detailImage1Box}
            </Grid>
            <Grid item lg={6} className="titlePage">
                {detailImage2Box}
            </Grid>
        </Grid>
    );
};

CardPhotos.propTypes = {
    mainImage: PropTypes.string,
    detailImage1: PropTypes.string,
    detailImage2: PropTypes.string,
    onChangeImage: PropTypes.func.isRequired,
    onDeleteImage: PropTypes.func.isRequired,
};

export default CardPhotos;