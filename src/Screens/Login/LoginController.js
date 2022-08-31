import React, { Component } from "react";
import LoginView from "./LoginView";

export default class LoginController extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: 0,
        };
    }

    onClickButton = () => {
        this.setState({
            isLoading: true,
        });
    };

    render() {
        return (
            <LoginView
                isLoading={this.state.isLoading}
                onClickButton={this.onClickButton}
            />
        );
    }
}
