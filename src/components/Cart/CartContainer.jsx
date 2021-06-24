import {connect} from "react-redux";
import Cart from "./Cart";
import {
    addOne,
    checkout,
    removeFromCart, subtractOne
} from "../../redux/products-reducer";

let mapStateToProps = state => {
    return {
        items: state.productsPage.items,
        cart: state.productsPage.cart
    }
}

const CartContainer = connect(mapStateToProps, {
    addOne,
    subtractOne,
    checkout,
    removeFromCart
}) (Cart)

export default CartContainer