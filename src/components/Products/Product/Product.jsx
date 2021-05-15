import s from './../Products.module.css'

const Product = (props) => {
    return (
        <div className={s.productWrap}>
            <div
                listid={props.listid}
                className={s.productImage}
                style={props.style}
                onClick={ props.onProductClick }
            >
            </div>
            <p>{props.name} <b>{props.price}</b></p>
            <div className={s.addToCart}
                 onClick={ props.onAddToCartClick }
            >
                <p>Add to cart</p>
                <img src="https://img-premium.flaticon.com/png/512/833/833314.png?token=exp=1621087217~hmac=7ab8c9188900f857af108eb158294f2a" alt="cart-icon" className={s.cartIcon}/>
            </div>
        </div>
    )
}

export default Product