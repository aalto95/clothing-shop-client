import s from './Products.module.css'
import Products from "./Products";
import {connect} from "react-redux";
import {showDetailsActionCreator} from "../../redux/products-reducer";

let mapStateToProps = state => {
    return {
        groceries: state.productsPage.groceries
    }
}

let mapDispatchToProps = dispatch => {
    return {
        showDetails: (id) => {
            dispatch(showDetailsActionCreator(id))
        }
    }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps) (Products)

export default ProductsContainer