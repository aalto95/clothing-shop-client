import {connect} from "react-redux";
import SearchPage from "./SearchPage";
import {
    addOne,
    addToCart,
    startSearch,
    toggleIsFetching,
    toggleSearchbar
} from "../../redux/products-reducer";
import {withRouter} from 'react-router-dom'
import {useEffect} from "react";

const SearchPageContainer = (props) => {
    let searchString = props.match.params.string
    useEffect(() => props.startSearch(searchString), [searchString])
    return (
        <SearchPage {...props} searchString={searchString}/>
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

let withUrlDataContainerComponent = withRouter(SearchPageContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withUrlDataContainerComponent)