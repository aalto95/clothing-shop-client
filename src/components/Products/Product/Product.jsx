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
            <p>{props.color} {props.brand} {props.title} <b>{props.price}$</b></p>
        </div>
    )
}

export default Product