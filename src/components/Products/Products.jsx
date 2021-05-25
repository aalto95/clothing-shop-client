import s from './Products.module.css'
import Product from "./Product/Product";

const Products = (props) => {

    let addToCart = (id) => {

        let alreadyInCart = false
        let index = 0

        for (let j = 0; j < props.cart.length; j++) {
            if (props.groceries[id].name === props.cart[j].name) {
                alreadyInCart = true
                index = j
            }
        }
        if (alreadyInCart) {
            props.addOne(index)
        } else {
            props.addToCart(id)
        }
    }

    let productElements = props.groceries.map((grocery, i) => <Product
        productid={grocery.id}
        key={grocery.id}
        price={grocery.price}
        onAddToCartClick = { () => {
            addToCart(i)
        } }
        name={grocery.name}
        style={{backgroundImage: `url(${grocery.img})`}}
    />)

    return (
        <div className={s.productContainer}>
            {productElements}
        </div>
    )
}

export default Products