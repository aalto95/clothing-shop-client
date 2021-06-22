import {connect} from "react-redux";
import NavbarDesktop from "./NavbarDesktop";
import {logout} from "../../redux/login-reducer";
import NavbarMobile from "./NavbarMobile";
import {onSearchFieldChange, toggleIsFetching, toggleSearchbar} from "../../redux/products-reducer";

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
                isFetching={props.isFetching}
                toggleIsFetching={props.toggleIsFetching}
                onSearchFieldChange={props.onSearchFieldChange}
            />
            <NavbarMobile
                cart={props.cart}
                isLogged={props.isLogged}
                isAdmin={props.isAdmin}
                cartSize={props.cartSize}
                logout={props.logout}
                isSearchbarToggled={props.isSearchbarToggled}
                toggleSearchbar={props.toggleSearchbar}
                isFetching={props.isFetching}
                toggleIsFetching={props.toggleIsFetching}
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
        isSearchbarToggled: state.productsPage.isSearchbarToggled,
        isFetching: state.productsPage.isFetching
    }
}

let mapDispatchToProps = {
    logout,
    toggleSearchbar,
    toggleIsFetching,
    onSearchFieldChange
}



export default connect(mapStateToProps, mapDispatchToProps) (NavbarContainer)