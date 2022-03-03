import React, {useEffect, useState} from "react";
import styles from './AddedToCartPopup.module.scss'

const AddedToCartPopup = (props) => {
    const [cart, setCart] = useState(0)
    let useStateCondition = cart !== props.cartSize && props.cartSize !== 0
    let popupCondition = cart === props.cartSize && props.cartSize !== 0
    useEffect(() => {
        if (useStateCondition) {
            setCart(props.cartSize)
        }
    }, [props.cartSize, useStateCondition])
    return (
        <div>
            <div className={popupCondition ? styles.active : styles.hidden}>
                <p>added to cart</p>
            </div>
        </div>
    )
}

export default AddedToCartPopup