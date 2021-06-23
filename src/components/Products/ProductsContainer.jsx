import Products from "./Products";
import {connect} from "react-redux";
import {
     addToCart,
    setProducts,
    toggleIsFetching,
    addOne,
    showPreviousPage,
    showNextPage, setPagesQuantity
} from "../../redux/products-reducer";
import {useEffect} from "react";
import {productsAPI} from "../../api/api";

const ProductsContainer = (props) => {

    let getPagesQuantity = () => {
        productsAPI.getPagesQuantity()
            .then(response => {
                props.setPagesQuantity(response)
            })
    }

    let getProducts = (page) => {
        props.toggleIsFetching(true)
        productsAPI.getProducts(page, props.pageLength)
            .then(response => {
                props.toggleIsFetching(false)
                props.setProducts(response)
            })
    }

    let previousPage = () => {
        props.showPreviousPage()
        getProducts(props.currentPage - 1)
    }

    let nextPage = () => {
        props.showNextPage()
        getProducts(props.currentPage + 1)

    }

    useEffect(getPagesQuantity, [])
    useEffect(getProducts, [])

    return <>
        {<Products
            groceries={props.groceries}
            cart={props.cart}
            isFetching={props.isFetching}
            addToCart={props.addToCart}
            addOne={props.addOne}
            getProducts={getProducts}
            currentPage={props.currentPage}
            previousPage={previousPage}
            nextPage={nextPage}
            pagesQuantity={props.pagesQuantity}
        />}
    </>
}

let mapStateToProps = state => {

    return {
        groceries: state.productsPage.groceries,
        cart: state.productsPage.cart,
        isFetching: state.productsPage.isFetching,
        currentPage: state.productsPage.currentPage,
        pageQuantity: state.productsPage.pageQuantity,
        pageLength: state.productsPage.pageLength
    }
}

let mapDispatchToProps = {
    addToCart,
    setProducts,
    toggleIsFetching,
    addOne,
    showPreviousPage,
    showNextPage,
    setPagesQuantity
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer)