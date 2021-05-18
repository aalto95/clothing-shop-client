import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = state => {
    return {
        cart: state.productsPage.cart
    }
}

const NavbarContainer = connect(mapStateToProps, null) (Navbar)

export default NavbarContainer