import {connect} from "react-redux";
import NavbarDesktop from "./NavbarDesktop";
import {logout} from "../../redux/login-reducer";
import NavbarMobile from "./NavbarMobile";
import {
    onSearchFieldChange,
    setProducts,
    toggleIsFetching,
    toggleIsSearching,
    toggleSearchbar,
    toggleIsRedirecting
} from "../../redux/products-reducer";

const NavbarContainer = (props) => {
    return (
        <>
            <NavbarDesktop {...props}/>
            <NavbarMobile {...props}/>
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
        isFetching: state.productsPage.isFetching,
        searchField: state.productsPage.searchField,
        isSearching: state.productsPage.isSearching,
        isRedirecting: state.productsPage.isRedirecting
    }
}

let mapDispatchToProps = {
    logout,
    toggleSearchbar,
    toggleIsFetching,
    onSearchFieldChange,
    setProducts,
    toggleIsSearching,
    toggleIsRedirecting
}

export default connect(mapStateToProps, mapDispatchToProps) (NavbarContainer)