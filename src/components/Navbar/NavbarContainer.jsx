import {connect} from "react-redux";
import NavbarDesktop from "./NavbarDesktop";
import {logout} from "../../redux/login-reducer";
import NavbarMobile from "./NavbarMobile";
import {
    onSearchFieldChange,
    setProducts,
    toggleIsFetching,
    toggleIsSearching,
    toggleSearchbar
} from "../../redux/products-reducer";

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
                searchField={props.searchField}
                setProducts={props.setProducts}
                isSearching={props.isSearching}
                toggleIsSearching={props.toggleIsSearching}
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
                onSearchFieldChange={props.onSearchFieldChange}
                searchField={props.searchField}
                setProducts={props.setProducts}
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
        isFetching: state.productsPage.isFetching,
        searchField: state.productsPage.searchField,
        isSearching: state.productsPage.isSearching
    }
}

let mapDispatchToProps = {
    logout,
    toggleSearchbar,
    toggleIsFetching,
    onSearchFieldChange,
    setProducts,
    toggleIsSearching
}



export default connect(mapStateToProps, mapDispatchToProps) (NavbarContainer)