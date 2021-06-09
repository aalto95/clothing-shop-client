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

const ProductsContainer = (props) => {

    let getPageQuantity = () => {
        axios.get(`https://60a0e51dd2855b00173b15c9.mockapi.io/products`)
            .then(response => {
                console.log(response.data.length)
                props.setPageQuantity(response.data.length)
            })
    }

    let getProducts = () => {
        props.toggleIsFetching(true)
        axios.get(`https://60a0e51dd2855b00173b15c9.mockapi.io/products?page=${props.currentPage}&limit=8`)
            .then(response => {
                props.toggleIsFetching(false)
                props.setProducts(response.data)
            })
    }

    useEffect(getPageQuantity, [])
    useEffect(getProducts, [])

    return <>
        {props.isFetching ? <Preloader /> : <Products
            groceries={props.groceries}
            cart={props.cart}
            isFetching={props.isFetching}
            addToCart={props.addToCart}
            addOne={props.addOne}
            getProducts={getProducts}
            currentPage={props.currentPage}
            showPreviousPage={props.showPreviousPage}
            showNextPage={props.showNextPage}
        />}
    </>
}

let mapStateToProps = state => {

    return {
        groceries: state.productsPage.groceries,
        cart: state.productsPage.cart,
        isFetching: state.productsPage.isFetching,
        currentPage: state.productsPage.currentPage,
        pageQuantity: state.productsPage.pageQuantity
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