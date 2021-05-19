import s from './Products.module.css'
import Products from "./Products";
import {connect} from "react-redux";
import {addToCart, setProducts, showDetails, toggleIsFetching} from "../../redux/products-reducer";
import axios from "axios";
import {useEffect} from "react";
import Preloader from "../Preloader/Preloader";

const ProductsContainer = (props) => {

    let getProducts = () => {
        props.toggleIsFetching(true)
        axios.get("https://60a0e51dd2855b00173b15c9.mockapi.io/products")
            .then(response => {
                props.toggleIsFetching(false)
                props.setProducts(response.data)
            })
    }

    useEffect(getProducts, [])

    return <>
        {props.isFetching ? <Preloader /> : <Products
            groceries={props.groceries}
            cart={props.cart}
            isFetching={props.isFetching}
            addToCart={props.addToCart}
        />}
    </>
}

let mapStateToProps = state => {

    return {
        groceries: state.productsPage.groceries,
        cart: state.productsPage.cart,
        isFetching: state.productsPage.isFetching
    }
}

export default connect(mapStateToProps, {
    showDetails,
    addToCart,
    setProducts,
    toggleIsFetching
}) (ProductsContainer)