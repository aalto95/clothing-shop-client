import {connect} from "react-redux";
import Navbar from "./Navbar";
import {logout} from "../../redux/login-reducer";

const NavbarContainer = (props) => {
    return (
        <Navbar
            cart={props.cart}
            isLogged={props.isLogged}
            isAdmin={props.isAdmin}
            cartSize={props.cartSize}
        />
    )
}

let mapStateToProps = state => {
    return {
        cart: state.productsPage.cart,
        isLogged: state.loginPage.isLogged,
        isAdmin: state.loginPage.isAdmin,
        cartSize: state.productsPage.cartSize
    }
}

let mapDispatchToProps = {
    logout
}



export default connect(mapStateToProps, mapDispatchToProps) (NavbarContainer)