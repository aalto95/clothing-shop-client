import React, {useEffect} from "react";
import {connect} from "react-redux";
import ItemPage from "./ItemPage";
import {withRouter} from "react-router-dom";
import {addOne, addToCart, getSpecificItem} from "../../redux/products-reducer";

const ItemPageContainer = (props) => {
    let itemId = props.match.params.itemId
    useEffect(() => props.getSpecificItem(itemId), [itemId])

    let addToCart = (id) => {

        let alreadyInCart = false
        let index = 0

        for (let j = 0; j < props.cart.length; j++) {
            if (props.specificItem.title === props.cart[j].title) {
                alreadyInCart = true
                index = j
            }
        }
        if (alreadyInCart) {
            props.addOne(index)
        } else {
            props.addToCart(id)
        }
    }

    return (
        <ItemPage {...props} addToCart={() => addToCart(props.specificItem.id)}/>
    )
}

let mapStateToProps = (state) => {
    return {
        items: state.productsPage.items,
        cart: state.productsPage.cart,
        isFetching: state.productsPage.isFetching,
        specificItem: state.productsPage.specificItem
    }
}

let mapDispatchToProps = {
    getSpecificItem,
    addToCart,
    addOne
}

let withUrlDataContainerComponent = withRouter(ItemPageContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withUrlDataContainerComponent)