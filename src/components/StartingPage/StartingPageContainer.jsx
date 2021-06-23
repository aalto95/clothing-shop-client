import StartingPage from "./StartingPage";
import {connect} from "react-redux";
import {onSearchFieldChange, setProducts} from "../../redux/products-reducer";

const StartingPageContainer = (props) => {
    return (
        <StartingPage
            searchField={props.searchField}
            setProducts={props.setProducts}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        searchField: state.productsPage.searchField
    }
}

let mapDispatchToProps = {
    onSearchFieldChange,
    setProducts
}

export default connect(mapStateToProps, mapDispatchToProps) (StartingPageContainer)