import s from './Cart.module.css'
import {connect} from "react-redux";
import Cart from "./Cart";
import {addMoreActionCreator, checkoutActionCreator} from "../../redux/products-reducer";

let mapStateToProps = state => {
    return {
        groceries: state.productsPage.groceries,
        cart: state.productsPage.cart
    }
}

let mapDispatchToProps = dispatch => {
    return {
        addMore: (id) => {
            dispatch(addMoreActionCreator(id))
        },
        checkout: () => {
            dispatch(checkoutActionCreator())
        }
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps) (Cart)

export default CartContainer