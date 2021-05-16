import s from './Cart.module.css'

const Cart = (props) => {
    console.log(props.cart)

    let addMore = (e) => {
        let id = e.target.attributes.productid.value
        console.log(id)
        props.addMore(id)
    }

    return (
        <div className={s.cart}>
            {props.cart.map((product) =>
                <div>
                    <img src={product.img} className={s.productImg}/>
                    <p>{product.name} {product.quantity}</p>
                    <button onClick={addMore} productid={product.cartId}>Add More</button>
                </div>
            )}
        </div>
    )
}

export default Cart