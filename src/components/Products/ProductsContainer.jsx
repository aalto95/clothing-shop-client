import s from './Products.module.css'
import Products from "./Products";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        groceries: state.productsPage.groceries
    }
}

let mapDispatchToProps = dispatch => {
    return {

    }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps) (Products)

export default ProductsContainer