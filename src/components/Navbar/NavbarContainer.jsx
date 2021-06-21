import {connect} from "react-redux";
import NavbarDesktop from "./NavbarDesktop";
import {logout} from "../../redux/login-reducer";
import NavbarMobile from "./NavbarMobile";
import {toggleSearchbar} from "../../redux/products-reducer";

const NavbarContainer = (props) => {
    return (
        <>
            <NavbarDesktop
                cart={props.cart}
                isLogged={props.isLogged}
                isAdmin={props.isAdmin}
                cartSize={props.cartSize}
                logout={props.logout}
                isSearchbarToggled={props.isSearchbarToggled}
                toggleSearchbar={props.toggleSearchbar}
            />
            <NavbarMobile
                cart={props.cart}
                isLogged={props.isLogged}
                isAdmin={props.isAdmin}
                cartSize={props.cartSize}
                logout={props.logout}
                isSearchbarToggled={props.isSearchbarToggled}
                toggleSearchbar={props.toggleSearchbar}
            />
        </>
    )
}

let mapStateToProps = state => {
    return {
        cart: state.productsPage.cart,
        isLogged: state.loginPage.isLogged,
        isAdmin: state.loginPage.isAdmin,
        cartSize: state.productsPage.cartSize,
        isSearchbarToggled: state.productsPage.isSearchbarToggled
    }
}

let mapDispatchToProps = {
    logout,
    toggleSearchbar
}



export default connect(mapStateToProps, mapDispatchToProps) (NavbarContainer)