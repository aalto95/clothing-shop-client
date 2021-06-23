import React from "react";
import Searchbar from "./Searchbar";
import {connect} from "react-redux";
import {onSearchFieldChange, setProducts, toggleIsFetching, toggleIsSearching} from "../../../redux/products-reducer";

const SearchbarContainer = (props) => {
    return (
        <Searchbar
            isSearching={props.isSearching}
            toggleIsSearching={props.toggleIsSearching}
            isSearchbarToggled={props.isSearchbarToggled}
            toggleIsFetching={props.toggleIsFetching}
            onSearchFieldChange={props.onSearchFieldChange}
            searchField={props.searchField}
            setProducts={props.setProducts}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        isSearching: state.productsPage.isSearching,
        isSearchbarToggled: state.productsPage.isSearching,
        searchField: state.productsPage.searchField,
    }
}

let mapDispatchToProps = {
    toggleIsSearching,
    toggleIsFetching,
    onSearchFieldChange,
    setProducts
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchbarContainer)