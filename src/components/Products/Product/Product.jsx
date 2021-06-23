import styles from './../Products.module.css'

const Product = (props) => {
    let showGender = () => {
        if (props.sex === 'm') {
            return 'male'
        }
        else if (props.sex === 'f') {
            return 'female'
        }
        else return 'unisex'
    }
    return (
        <div className={styles.productWrap}>
            <div
                className={styles.productImage}
                style={props.style}
            >
            </div>
            <p> {props.brand} {props.title} <b>{props.price}$</b></p>
            <p>{showGender()}</p>
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