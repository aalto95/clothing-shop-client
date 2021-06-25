import Products from "./Products";
import {connect} from "react-redux";
import {
    addToCart,
    addOne,
    showPreviousPage,
    showNextPage, getPagesQuantity, getProducts
} from "../../redux/products-reducer";
import {useEffect} from "react";

const ProductsContainer = (props) => {

    let previousPage = () => {
        props.showPreviousPage()
        props.getProducts(props.currentPage - 1)
    }

    let nextPage = () => {
        props.showNextPage()
        props.getProducts(props.currentPage + 1)

    }

    useEffect(getPagesQuantity, [])
    useEffect(getProducts, [])

    return (
        <Products
            {...props}
            nextPage={nextPage}
            previousPage={previousPage}
        />
    )
}

let mapStateToProps = state => {

    return {
        items: state.productsPage.items,
        cart: state.productsPage.cart,
        currentPage: state.productsPage.currentPage,
        pageQuantity: state.productsPage.pageQuantity,
    }
}

let mapDispatchToProps = {
    addToCart,
    addOne,
    showPreviousPage,
    showNextPage,
    getPagesQuantity,
    getProducts
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer)