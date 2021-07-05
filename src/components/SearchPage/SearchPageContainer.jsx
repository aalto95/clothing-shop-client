import {connect} from "react-redux";
import SearchPage from "./SearchPage";
import {
    addOne,
    addToCart,
    toggleIsFetching,
} from "../../redux/products-reducer";
import {withRouter} from 'react-router-dom'
import {useEffect} from "react";
import {setSearchText, startSearch, toggleSearchbar} from "../../redux/search-reducer";

const SearchPageContainer = (props) => {
    let searchString = props.match.params.string
    useEffect(() => props.startSearch(searchString), [searchString])
    return (
        <SearchPage {...props}/>
    )
}

let mapStateToProps = state => {
    return {
        isFetching: state.productsPage.isFetching,
        items: state.productsPage.items,
        cart: state.productsPage.cart,
        searchField: state.search.searchField,
        isSearching: state.search.isSearching,
        searchText: state.search.searchText
    }
}

let mapDispatchToProps = {
    toggleIsFetching,
    addToCart,
    toggleSearchbar,
    addOne,
    startSearch,
    setSearchText
}

let withUrlDataContainerComponent = withRouter(SearchPageContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withUrlDataContainerComponent)
