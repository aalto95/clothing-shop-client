import {connect} from "react-redux";
import Search from "./Search";
import {addToCart, setProducts, toggleIsFetching, toggleSearchbar} from "../../redux/products-reducer";

const SearchContainer = (props) => {
    return (
        <Search
            searchField={props.searchField}
            toggleIsFetching={props.toggleIsFetching}
            isFetching={props.isFetching}
            groceries={props.groceries}
            toggleSearchbar={props.toggleSearchbar}
        />
    )
}

let mapStateToProps = state => {
    return {
        searchField: state.productsPage.searchField,
        isFetching: state.productsPage.isFetching,
        groceries: state.productsPage.groceries
    }
}

let mapDispatchToProps = {
    toggleIsFetching,
    setProducts,
    addToCart,
    toggleSearchbar
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchContainer)