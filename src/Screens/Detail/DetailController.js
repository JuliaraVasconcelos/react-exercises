import React from "react";
import DetailView from "./DetailView";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const DetailController = () => {
    const { infoID } = useParams();
    const {
        state: { toy },
    } = useLocation();
    // const info = useLocation();
    //   const toy = info.state.toy;  

    const toyInfo = JSON.parse(toy);
    let navigate = useNavigate();

    const onBackButton = () => {
        navigate(-1);
    };

    return (
        <DetailView infoID={infoID} toyInfo={toyInfo} onBackButton={onBackButton} />
    );
};

export default DetailController;
