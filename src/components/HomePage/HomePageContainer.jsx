import HomePage from "./HomePage";
import {connect} from "react-redux";
import {setProducts} from "../../redux/products-reducer";

const HomePageContainer = (props) => {
    return (
        <HomePage {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        searchField: state.productsPage.searchField
    }
}

let mapDispatchToProps = {
    setProducts
}

export default connect(mapStateToProps, mapDispatchToProps) (HomePageContainer)
