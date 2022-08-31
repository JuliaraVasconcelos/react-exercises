import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Colors from "./Colors";
import Sizes from "./Sizes";

const MuiThemes = ({ children }) => {
    const theme = createTheme({
        typography: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            h1: {
                fontSize: Sizes.FontSizeLG,
                color: Colors.NeutralDark,
            },
            h2: {
                fontSize: Sizes.FontSizeSM,
                color: Colors.NeutralDark,
                fontWeight: "bold",
            },
            body1: {
                fontSize: Sizes.FontSizeSM,
                color: Colors.NeutralDark,
            },
            body2: {
                fontSize: Sizes.FontSizeXS,
                color: Colors.NeutralDark,
            },
            minSize: {
                fontSize: Sizes.FontSizeEXS,
                color: Colors.NeutralDark,
            },
            button: {
                fontSize: Sizes.FontSizeXS,
            },
        },
        status: {
            warning: Colors.Warning,
            info: Colors.Report,
            error: Colors.Error,
            success: Colors.Success,
            neutral: Colors.NeutralDark,
        },
        palette: {
            primary: {
                light: Colors.PrimaryLight,
                main: Colors.PrimaryMedium,
                dark: Colors.PrimaryDark,
                lightest: Colors.PrimaryLightest,
            },
            secondary: {
                light: Colors.SecondaryLight,
                main: Colors.SecondaryMedium,
                dark: Colors.SecondaryDark,
                lightest: Colors.SecondaryLightest,
            },
            tertiary: {
                light: Colors.TertiaryLight,
                main: Colors.TertiaryMedium,
                dark: Colors.TertiaryDark,
                lightest: Colors.TertiaryLightest,
            },
            neutral: {
                light: Colors.NeutralMedium,
                main: Colors.NeutralDark,
                dark: Colors.NeutralDark,
                lightest: Colors.NeutralLightest,
            },
        },
        components: {
            MuiButton: {
                variants: [
                    {
                        props: { variant: "primary" },
                        style: {
                            textTransform: "none",
                            background: Colors.PrimaryMedium,
                            minWidth: 200,
                            fontSize: Sizes.FontSizeSM,
                            fontWeight: 700,
                            lineHeight: "27px",
                            borderRadius: 24,
                            boxShadow:
                                "0px 4px 4px rgba(251, 181, 122, 0.44), 0px 5px 4px rgba(255, 193, 140, 0.36), 0px 7px 15px 2px rgba(255, 175, 107, 0.58); border- radius: 24px;",
                            color: Colors.White,
                            marginTop: "15px",
                            marginBottom: "15px",
                            "&:hover": {
                                background: Colors.PrimaryMedium,
                                boxShadow:
                                    "0px 22px 17px rgba(243, 129, 33, 0.14), 0px 4px 30px 3px rgba(243, 129, 33, 0.43)",
                            },
                            "&:active": {
                                background: Colors.PrimaryDark,
                                boxShadow:
                                    "0px 22px 17px rgba(243, 129, 33, 0.14), 0px 4px 30px 3px rgba(243, 129, 33, 0.43)",
                            },
                        },
                    },
                    {
                        props: { variant: "secondary" },
                        style: {
                            textTransform: "none",
                            background: Colors.White,
                            border: "2px solid " + Colors.SecondaryDark,
                            boxSizing: "border-box",
                            minWidth: 200,
                            fontSize: Sizes.FontSizeSM,
                            fontWeight: 700,
                            lineHeight: "27px",
                            borderRadius: 24,
                            color: Colors.SecondaryDark,
                            marginTop: "15px",
                            marginBottom: "15px",
                            "&:hover": {
                                background: Colors.SecondaryMedium,
                                color: Colors.White,
                            },
                            "&:active": {
                                background: Colors.SecondaryDark,
                                color: Colors.White,
                            },
                        },
                    },
                    {
                        props: { variant: "disabled" },
                        style: {
                            textTransform: "none",
                            background: Colors.BackgroundDisabled,
                            minWidth: 200,
                            fontSize: Sizes.FontSizeSM,
                            fontWeight: 700,
                            lineHeight: "27px",
                            borderRadius: 24,
                            color: Colors.NeutralMedium,
                            marginTop: "15px",
                            marginBottom: "15px",
                        },
                    },
                ],
            },
        },
    });
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemes;
