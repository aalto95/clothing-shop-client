import {connect} from "react-redux";
import NavbarDesktop from "./NavbarDesktop";
import {logout} from "../../redux/login-reducer";
import NavbarMobile from "./NavbarMobile";
import {toggleSearchbar} from "../../redux/products-reducer";

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
        cartSize: state.productsPage.cartSize,
        isSearchbarToggled: state.productsPage.isSearchbarToggled,
    }
}

let mapDispatchToProps = {
    logout,
    toggleSearchbar
}

export default connect(mapStateToProps, mapDispatchToProps) (NavbarContainer)
