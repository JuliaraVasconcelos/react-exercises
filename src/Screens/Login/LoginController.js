import React, { useState, useContext } from "react";
import useAPI from "../../Services/APIs/Common/useAPI";
// import auth from "../../Services/APIs/Auth/Auth";
import LoginView from "./LoginView";
import { InfoContext } from "../../store/InfoContext";
import * as Yup from "yup";

const LoginController = () => {
    // const authLoginAPI = useAPI(auth.login);
    // const authLoginGoogleAPI = useAPI(auth.loginGoogle);

    const [connectMessage, setConnectMessage] = useState("");
    const [connectCode, setConnectCode] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const context = useContext(InfoContext);

    const onClickLogin = (values) => {
        // let infoSend = {
        //   email: values.email,
        //   password: values.password,
        // };

        // setConnectMessage("");
        // setIsLoading(true);
        // authLoginAPI
        //   .requestPromise(infoSend)
        //   .then((info) => {
        //     setIsLoading(false);
        //     context.onMakeLogin(info.token);
        //   })
        //   .catch((error) => {
        //     setIsLoading(false);
        //     setConnectCode(-1);
        //     console.log(error.data);
        //     if (error.status === 401) {
        //       setConnectMessage(error.data.message);
        //     } else {
        //       setConnectMessage("O servidor retornou um erro= " + error.status);
        //     }
        //   });
    };

    // const onResponseGoogle = (info) => {
    //   let infoSend = {
    //     name: info.profileObj.name,
    //     email: info.profileObj.email,
    //     idGoogle: info.profileObj.googleId,
    //   };

    //   setConnectMessage("");
    //   setIsLoading(true);
    //   authLoginGoogleAPI
    //     .requestPromise(infoSend)
    //     .then((info) => {
    //       setIsLoading(false);
    //       context.onMakeLogin(info.token);
    //     })
    //     .catch((error) => {
    //       setIsLoading(false);
    //       setConnectCode(-1);
    //       console.log(error.response);
    //       if (error.response.status === 401) {
    //         setConnectMessage(error.response.data.message);
    //       } else {
    //         setConnectMessage(
    //           "O servidor retornou um erro= " + error.response.status
    //         );
    //       }
    //     });
    // };

    const signInSchema = Yup.object().shape({
        email: Yup.string().email("Email tem de ser válido").required("Email is required"),

        password: Yup.string()
            .required("Password is required")
            .min(4, "Password is too short - should be 4 chars minimum"),
    });

    return (
        <LoginView
            onClickLogin={onClickLogin}
            isLoading={isLoading}
            connectMessage={connectMessage}
            connectCode={connectCode}
            signInSchema={signInSchema}
        />
    );
};

export default LoginController;
