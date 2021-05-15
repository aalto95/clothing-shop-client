import s from './../Products.module.css'
import CartIcon from './../../../assets/shopping-cart.svg'

const Product = (props) => {
    return (
        <div className={s.productWrap}>
            <div
                productid={props.productid}
                className={s.productImage}
                style={props.style}
                onClick={ props.onProductClick }
            >
            </div>
            <p>{props.name} <b>{props.price}</b></p>
            <div className={s.addToCart}
                 onClick={ props.onAddToCartClick }
                 productid={props.productid}
            >
                <p productid={props.productid}>Add to cart</p>
                <img
                    src={CartIcon}
                    alt="cart-icon"
                    className={s.cartIcon}
                    productid={props.productid}
                />
            </div>
        </div>
    )
}

export default Product