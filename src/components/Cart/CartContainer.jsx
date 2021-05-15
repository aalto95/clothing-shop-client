import s from './Cart.module.css'
import {connect} from "react-redux";
import {addToCartActionCreator, showDetailsActionCreator} from "../../redux/products-reducer";
import Cart from "./Cart";

let mapStateToProps = state => {
    return {
        groceries: state.productsPage.groceries,
        cart: state.productsPage.cart
    }
}

let mapDispatchToProps = dispatch => {
    return {

    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps) (Cart)

export default CartContainer