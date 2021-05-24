import React from "react";
import Admin from "./Admin";
import {connect} from "react-redux";

const AdminContainer = (props) => {

    return (
        <Admin isLogged={props.isLogged}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isLogged: state.loginPage.isLogged
    }
}


export default connect(mapStateToProps, null) (AdminContainer)