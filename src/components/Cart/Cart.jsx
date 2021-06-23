import React from "react";
import styles from './Cart.module.css'
import deleteIcon from '../../assets/icons/delete.svg'
import {ReactSVG} from "react-svg";

const Cart = (props) => {

    const forceUpdate: () => void = React.useState()[1].bind(null, {})

    let onAdd = (id) => {
        props.addOne(id)
        forceUpdate()
    }

    let onSubtract = (id) => {
        if (props.cart[id].quantity > 1) {
            props.subtractOne(id)
        } else {
            props.removeFromCart(id)
        }
        forceUpdate()
    }

    let onCheckout = () => {
        props.checkout()
        forceUpdate()
    }

    let totalPrice = () => {
        let subTotal = 0
        // eslint-disable-next-line array-callback-return
        props.cart.map(product => {
            subTotal += (product.price * product.quantity)
        })
        return subTotal
    }

    let onRemoveFromCart = (id) => {
        props.removeFromCart(id)
        forceUpdate()
    }

    if (props.cart.length) {
        return (
            <div className={styles.cart}>
                {props.cart.map((product, i) =>
                    <div key={i} className={styles.product}>
                        <img src={product.img} className={styles.productImg} alt="product-img"/>
                        <p className={styles.productName}>{product.name} x {product.quantity} = <b>{product.price * product.quantity}$</b></p>
                        <div className={styles.buttonGroup}>
                            <button className={styles.quantityButton} onClick={() => onAdd(i)}>+</button>
                            <button className={styles.quantityButton} onClick={() => onSubtract(i)}>-</button>
                            <ReactSVG className={styles.deleteIcon} src={deleteIcon} onClick={() => { onRemoveFromCart(i)}}/>
                        </div>

                    </div>
                )}
                Subtotal: <b>{totalPrice()}$</b>
                <button className={styles.checkoutButton} onClick={onCheckout}>Checkout</button>
            </div>
        )
    }
    return (
        <div className={styles.emptyCart}>
            <h1>Your cart is empty</h1>
        </div>
    )
}

export default Cart