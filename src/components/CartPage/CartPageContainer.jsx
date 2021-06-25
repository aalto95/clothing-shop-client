import {connect} from "react-redux";
import CartPage from "./CartPage";
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

const CartPageContainer = connect(mapStateToProps, {
    addOne,
    subtractOne,
    checkout,
    removeFromCart
}) (CartPage)

export default CartPageContainer