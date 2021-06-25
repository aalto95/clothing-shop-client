import styles from './Product.module.css'
import {NavLink} from "react-router-dom";

const Product = (props) => {
    return (
        <div className={styles.productWrap}>
            <NavLink to={'/items/' + props.id}>
                <div
                    className={styles.productImage}
                    style={props.style}
                >
                </div>
            </NavLink>
            <p> {props.brand} {props.title} <b>{props.price}$</b></p>
            <div
                className={styles.addToCart}
                onClick={ () => props.onAddToCartClick() }
            >
                <button
                    className={styles.onAddToCart}
                >Add to cart</button>
            </div>
        </div>
    )
}

export default Product