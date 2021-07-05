import React from "react";
import styles from './CartPage.module.css'
import deleteIcon from '../../assets/icons/delete.svg'
import {ReactSVG} from "react-svg";

const CartPage = (props) => {

    let onAdd = (id) => {
        props.addOne(id)
    }

    let onSubtract = (id) => {
        if (props.cart[id].quantity > 1) {
            props.subtractOne(id)
        } else {
            props.removeFromCart(id)
        }
    }

    let onCheckout = () => {
        props.checkout()
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
    }

    if (props.cart.length) {
        return (
            <div className={styles.cart}>
                {props.cart.map((product, i) =>
                    <div key={i} className={styles.product}>
                        <img src={product.img_small} className={styles.productImg} alt="product-img"/>
                        <p className={styles.productName}>{product.brand} {product.title} x {product.quantity} = <b>{product.price * product.quantity}$</b></p>
                        <div className={styles.buttonGroup}>
                            <button className={styles.quantityButton} onClick={() => onAdd(i)}>+</button>
                            <button className={styles.quantityButton} onClick={() => onSubtract(i)}>-</button>
                            <ReactSVG className={styles.deleteIcon} src={deleteIcon} onClick={() => { onRemoveFromCart(i)}}/>
                        </div>

                    </div>
                )}
                <div className={styles.checkoutGroup}>
                    <p>Subtotal: <b>{totalPrice()}$</b></p>
                    <button className={styles.checkoutButton} onClick={onCheckout}>Checkout</button>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.emptyCart}>
            <h1>Your cart is empty</h1>
        </div>
    )
}

export default CartPage
