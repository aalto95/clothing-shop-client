import s from './Products.module.css'
import Products from "./Products";
import {connect} from "react-redux";
import {
    addToCart,
    setProducts,
    toggleIsFetching,
    addOne,
    showPreviousPage,
    showNextPage, setPageQuantity
} from "../../redux/products-reducer";
import axios from "axios";
import {useEffect} from "react";
import Preloader from "../Preloader/Preloader";
import {productsAPI} from "../../api/api";

const ProductsContainer = (props) => {

    let getPageQuantity = () => {
        axios.get(`https://60a0e51dd2855b00173b15c9.mockapi.io/products`)
            .then(response => {
                props.setPageQuantity(response.data.length)
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

    useEffect(getPageQuantity, [])
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
            pageQuantity={props.pageQuantity}
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
    setPageQuantity
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer)