import styles from './Login.module.css'
import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {onFormSubmit, onLoginChange, onPasswordChange} from "../../redux/login-reducer";

const LoginContainer = (props) => {

    return (
        <Login
            onFormSubmit={props.onFormSubmit}
            onLoginChange={props.onLoginChange}
            onPasswordChange={props.onPasswordChange}
            login={props.login}
            password={props.password}
            isLogged={props.isLogged}
        />
    )
}

let mapStateToProps = (state) => {
       return {
           login: state.loginPage.login,
           password: state.loginPage.password,
           isLogged: state.loginPage.isLogged
       }
}

let mapDispatchToProps = {
    onLoginChange,
    onPasswordChange,
    onFormSubmit
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginContainer)