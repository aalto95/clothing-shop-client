import {connect} from "react-redux";
import Search from "./Search";
import {
    addOne,
    addToCart,
    startSearch,
    toggleIsFetching,
    toggleSearchbar
} from "../../redux/products-reducer";
import {withRouter} from 'react-router-dom'
import {useEffect} from "react";

const SearchContainer = (props) => {
    useEffect(startSearch, [props.searchString])
    let searchString = props.match.params.string
    return (
        <Search {...props} searchString={searchString}/>
    )
}

let mapStateToProps = state => {
    return {
        searchField: state.productsPage.searchField,
        isFetching: state.productsPage.isFetching,
        items: state.productsPage.items,
        cart: state.productsPage.cart,
        isSearching: state.productsPage.isSearching,
    }
}

let mapDispatchToProps = {
    toggleIsFetching,
    addToCart,
    toggleSearchbar,
    addOne,
    startSearch
}

let withUrlDataContainerComponent = withRouter(SearchContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withUrlDataContainerComponent)