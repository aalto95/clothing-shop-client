import React, {useEffect} from "react";
import {connect} from "react-redux";
import ItemPage from "./ItemPage";
import {withRouter} from "react-router-dom";
import {getSpecificItem} from "../../redux/products-reducer";

const ItemPageContainer = (props) => {
    let itemId = props.match.params.itemId
    useEffect(() => props.getSpecificItem(itemId), [itemId])
    return (
        <ItemPage {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        items: state.productsPage.items,
        isFetching: state.productsPage.isFetching,
        specificItem: state.productsPage.specificItem
    }
}

let mapDispatchToProps = {
    getSpecificItem
}

let withUrlDataContainerComponent = withRouter(ItemPageContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withUrlDataContainerComponent)