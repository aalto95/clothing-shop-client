import React from "react";
import Searchbar from "./Searchbar";
import {connect} from "react-redux";
import {toggleIsRedirecting} from "../../../redux/products-reducer";
import {onSearchFieldChange} from "../../../redux/search-reducer";

const SearchbarContainer = (props) => {
    return (
        <Searchbar {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isRedirecting: state.productsPage.isRedirecting,
        isSearchbarToggled: state.search.isSearchbarToggled,
        searchField: state.search.searchField
    }
}

let mapDispatchToProps = {
    toggleIsRedirecting,
    onSearchFieldChange
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchbarContainer)
