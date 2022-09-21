import React from "react";
import { Box, Button, Grid, Typography, CircularProgress } from "@mui/material";
import childrenImg from "../../Images/Children.png";
import logoImg from "../../Images/Logo.gif";
import "./Login.css";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { Formik, Form } from "formik";

const LoginView = ({
    onClickLogin,
    isLoading,
    connectMessage,
    responseGoogle,
    signInSchema,
}) => {
    let infoMessage = null;
    let info = (
        <div className="buttonGoogleDiv">
            <Button variant="primary" type="submit">
                Entrar
            </Button>
        </div>
    );

    if (isLoading) {
        info = (
            <div className="boxProgress">
                <CircularProgress color="primary" size={25} />
            </div>
        );
    }

    if (connectMessage !== "") {
        infoMessage = (
            <div className="infoErrorMessage">
                <Typography variant="minSize" color="error">
                    {connectMessage}
                </Typography>
            </div>
        );
    }
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            className="gridClass"
        >
            <Grid item md={6} sm={6}>
                <Box className="boxImg">
                    <img
                        src={childrenImg}
                        alt="children"
                        width={"60%"}
                        className="childrenImg"
                    />
                </Box>
            </Grid>
            <Grid item md={6} sm={6}>
                <Box className="boxLogin">
                    <img src={logoImg} alt="Logo" width={"40px"} className="logo" />
                    <Typography variant="h1">Bem-vindo!</Typography>
                    <p></p>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={signInSchema}
                        onSubmit={onClickLogin}
                    >
                        {(formik) => {
                            const { errors, setFieldValue } = formik;
                            return (
                                <Form>
                                    <CustomInput
                                        label="Digite seu e-mail"
                                        placeholder="mario@cqb.com.br"
                                        errorMessage={errors.email}
                                        hasError={errors.hasOwnProperty("email")}
                                        onChange={(e) => setFieldValue("email", e.target.value)}
                                    />
                                    <p></p>
                                    <CustomInput
                                        label="Digite sua senha"
                                        placeholder="**************"
                                        type="password"
                                        errorMessage={errors.password}
                                        hasError={errors.hasOwnProperty("password")}
                                        onChange={(e) => setFieldValue("password", e.target.value)}
                                    />
                                    {infoMessage}
                                    {info}
                                </Form>
                            );
                        }}
                    </Formik>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginView;
