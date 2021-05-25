import React from "react";
import Admin from "./Admin";
import {connect} from "react-redux";
import {
    addProductToDatabase,
    onProductImageURLChange,
    onProductNameChange,
    onProductPriceChange, onProductTypeChange
} from "../../redux/admin-reducer";

const AdminContainer = (props) => {
    return (
        <Admin
            isLogged={props.isLogged}
            name={props.name}
            price={props.price}
            imageURL={props.imageURL}
            productType={props.productType}
            onProductNameChange={props.onProductNameChange}
            onProductPriceChange={props.onProductPriceChange}
            onProductImageURLChange={props.onProductImageURLChange}
            onProductTypeChange={props.onProductTypeChange}
            addProductToDatabase={props.addProductToDatabase}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        isLogged: state.loginPage.isLogged,
        name: state.adminPage.name,
        price: state.adminPage.price,
        imageURL: state.adminPage.imageURL,
        productType: state.adminPage.productType
    }
}

let mapDispatchToProps = {
    onProductNameChange,
    onProductPriceChange,
    onProductImageURLChange,
    onProductTypeChange,
    addProductToDatabase
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminContainer)