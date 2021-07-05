import React from "react";
import Searchbar from "./Searchbar";
import {connect} from "react-redux";
import {onSearchFieldChange, toggleIsRedirecting} from "../../../redux/products-reducer";

const SearchbarContainer = (props) => {
    return (
        <Searchbar {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isRedirecting: state.productsPage.isRedirecting,
        isSearchbarToggled: state.productsPage.isSearchbarToggled,
        searchField: state.productsPage.searchField
    }
}

let mapDispatchToProps = {
    toggleIsRedirecting,
    onSearchFieldChange
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchbarContainer)
