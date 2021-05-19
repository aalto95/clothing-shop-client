import s from './Products.module.css'
import Products from "./Products";
import {connect} from "react-redux";
import {addToCart, setProducts, showDetails} from "../../redux/products-reducer";

let mapStateToProps = state => {
    return {
        groceries: state.productsPage.groceries,
        cart: state.productsPage.cart
    }
}

const ProductsContainer = connect(mapStateToProps, {
    showDetails,
    addToCart,
    setProducts
}) (Products)

export default ProductsContainer