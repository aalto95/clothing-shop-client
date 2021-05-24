import {connect} from "react-redux";
import Navbar from "./Navbar";
import {logout} from "../../redux/login-reducer";

const NavbarContainer = (props) => {
    return (
        <Navbar />
    )
}

let mapStateToProps = state => {
    return {
        cart: state.productsPage.cart,
        isLogged: state.loginPage.isLogged
    }
}

let mapDispatchToProps = {
    logout
}



export default connect(mapStateToProps, mapDispatchToProps) (Navbar)