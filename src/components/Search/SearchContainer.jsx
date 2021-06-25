import {connect} from "react-redux";
import Search from "./Search";
import {
    addOne,
    addToCart, onSearchFieldChange,
    setProducts,
    toggleIsFetching, toggleIsRedirecting,
    toggleIsSearching,
    toggleSearchbar
} from "../../redux/products-reducer";
import {withRouter} from 'react-router-dom'

const SearchContainer = (props) => {
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
    setProducts,
    addToCart,
    toggleSearchbar,
    addOne,
    toggleIsSearching,
    onSearchFieldChange,
    toggleIsRedirecting
}

let withUrlDataContainerComponent = withRouter(SearchContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withUrlDataContainerComponent)