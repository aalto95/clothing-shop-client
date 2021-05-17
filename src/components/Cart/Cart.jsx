import React from "react";
import styles from './Cart.module.css'

const Cart = (props) => {
    console.log(props.cart)

    const forceUpdate: () => void = React.useState()[1].bind(null, {})

    let onAddMore = (id) => {
        props.addMore(id)
        forceUpdate()
    }

    let onCheckout = () => {
        props.checkout()
        console.log(props.cart)
        forceUpdate()
    }

    let totalPrice = () => {
        let subTotal = 0
        props.cart.map(product => {
            subTotal += (product.price * product.quantity)
        })
        return subTotal
    }

    return (
        <div className={styles.cart}>
            {props.cart.map((product) =>
                <div key={product.id}>
                    <img src={product.img} className={styles.productImg}/>
                    <p>{product.name} x {product.quantity} <b>{product.price * product.quantity}$</b></p>
                    <button onClick={() => onAddMore(product.cartId)}>Add More</button>
                </div>
            )}
            {totalPrice()}
            <button
                className={styles.checkoutButton}
                onClick={onCheckout}
            >Checkout</button>
        </div>
    )
}

export default Cart