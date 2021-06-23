import {connect} from "react-redux";
import Search from "./Search";
import {
    addOne,
    addToCart,
    setProducts,
    toggleIsFetching,
    toggleIsSearching,
    toggleSearchbar
} from "../../redux/products-reducer";

const SearchContainer = (props) => {
    return (
        <Search
            searchField={props.searchField}
            toggleIsFetching={props.toggleIsFetching}
            isFetching={props.isFetching}
            groceries={props.groceries}
            toggleSearchbar={props.toggleSearchbar}
            cart={props.cart}
            addToCart={props.addToCart}
            addOne={props.addOne}
            toggleIsSearching={props.toggleIsSearching}
            isSearching={props.isSearching}
        />
    )
}

let mapStateToProps = state => {
    return {
        searchField: state.productsPage.searchField,
        isFetching: state.productsPage.isFetching,
        groceries: state.productsPage.groceries,
        cart: state.productsPage.cart,
        isSearching: state.productsPage.isSearching
    }
}

let mapDispatchToProps = {
    toggleIsFetching,
    setProducts,
    addToCart,
    toggleSearchbar,
    addOne,
    toggleIsSearching
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchContainer)