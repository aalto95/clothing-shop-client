import s from './Products.module.css'
import Products from "./Products";
import {connect} from "react-redux";
import {addOne, addToCart, setProducts, showDetails, toggleIsFetching} from "../../redux/products-reducer";
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
            addOne={props.addOne}
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

let mapDispatchToProps = {
    showDetails,
    addToCart,
    setProducts,
    toggleIsFetching,
    addOne
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer)