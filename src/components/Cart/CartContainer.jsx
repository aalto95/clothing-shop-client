import s from './Cart.module.css'
import {connect} from "react-redux";
import Cart from "./Cart";
import {
    addOneActionCreator,
    checkoutActionCreator,
    removeFromCartActionCreator, subtractOneActionCreator
} from "../../redux/products-reducer";

let mapStateToProps = state => {
    return {
        groceries: state.productsPage.groceries,
        cart: state.productsPage.cart
    }
}

let mapDispatchToProps = dispatch => {
    return {
        addOne: (id) => {
            dispatch(addOneActionCreator(id))
        },
        subtractOne: (id) => {
            dispatch(subtractOneActionCreator(id))
        },
        checkout: () => {
            dispatch(checkoutActionCreator())
        },
        removeFromCart: (id) => {
            dispatch(removeFromCartActionCreator(id))
        },
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps) (Cart)

export default CartContainer