import s from './Cart.module.css'

const Cart = (props) => {
    console.log(props.cart)
    return (
        <div className={s.cart}>
            {props.cart.map((product) => <p>{product.name}</p> )}
        </div>
    )
}

export default Cart