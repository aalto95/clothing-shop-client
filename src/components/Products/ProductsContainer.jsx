import s from './Products.module.css'
import Products from "./Products";
import {connect} from "react-redux";
import {addToCartActionCreator, showDetailsActionCreator} from "../../redux/products-reducer";

let mapStateToProps = state => {
    return {
        groceries: state.productsPage.groceries,
        cart: state.productsPage.cart
    }
}

let mapDispatchToProps = dispatch => {
    return {
        showDetails: (id) => {
            dispatch(showDetailsActionCreator(id))
        },
        addToCart: (id) => {
            dispatch(addToCartActionCreator(id))
        }
    }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps) (Products)

export default ProductsContainer