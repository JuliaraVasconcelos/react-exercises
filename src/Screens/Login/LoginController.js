import React, { Component, useEffect, useState } from "react";
import LoginView from "./LoginView";

//--------------------------[React Hook]-------------------------------
const LoginController =() => {
    const [isLoading, setIsLoading] = useState(false)

    const onClickButton = () => {
        console.log('carregando')
        setIsLoading(current => !current)
    }

    return (
        <LoginView isLoading={isLoading} onClickButton={onClickButton} />
    )
}

export default LoginController;

//-------------------------[React Old]---------------------------------
// export default class LoginController extends Component {
//     constructor() {
//         super();
//         this.state = {
//             isLoading: 0,
//         };
//     }

//     onClickButton = () => {
//         this.setState({
//             isLoading: true,
//         });
//     };

//     render() {
//         return (
//             <LoginView
//                 isLoading={this.state.isLoading}
//                 onClickButton={this.onClickButton}
//             />
//         );
//     }
// }
