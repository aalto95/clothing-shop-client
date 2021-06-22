import {connect} from "react-redux";
import Search from "./Search";
import {addOne, addToCart, setProducts, toggleIsFetching, toggleSearchbar} from "../../redux/products-reducer";

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
        />
    )
}

let mapStateToProps = state => {
    return {
        searchField: state.productsPage.searchField,
        isFetching: state.productsPage.isFetching,
        groceries: state.productsPage.groceries,
        cart: state.productsPage.cart
    }
}

let mapDispatchToProps = {
    toggleIsFetching,
    setProducts,
    addToCart,
    toggleSearchbar,
    addOne
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchContainer)