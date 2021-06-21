import {connect} from "react-redux";
import NavbarDesktop from "./NavbarDesktop";
import {logout} from "../../redux/login-reducer";
import NavbarMobile from "./NavbarMobile";

const NavbarContainer = (props) => {
    return (
        <>
            <NavbarDesktop
                cart={props.cart}
                isLogged={props.isLogged}
                isAdmin={props.isAdmin}
                cartSize={props.cartSize}
                logout={props.logout}
            />
            <NavbarMobile
                cart={props.cart}
                isLogged={props.isLogged}
                isAdmin={props.isAdmin}
                cartSize={props.cartSize}
                logout={props.logout}
            />
        </>
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