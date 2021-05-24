import styles from './../Products.module.css'

const Product = (props) => {

    return (
        <div className={styles.productWrap}>
            <div
                className={styles.productImage}
                style={props.style}
            >
            </div>
            <p>{props.name} <b>{props.price}$</b></p>
            <div
                className={styles.addToCart}
                onClick={ props.onAddToCartClick }
            >
                <button
                    className={styles.onAddToCart}
                >Add to cart</button>
            </div>
        </div>
    )
}

export default Product