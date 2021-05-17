import s from './Products.module.css'
import Product from "./Product/Product";
import axios from "axios";

const Products = (props) => {

    if (!props.groceries.length) {
        axios.get("https://60a0e51dd2855b00173b15c9.mockapi.io/products")
            .then(response => {
                props.setProducts(response.data)
            })
    }

    let showDetails = (e) => {
        let id = e.target.attributes.productid.value
        props.showDetails(id)
    }

    let addToCart = (id) => {
        props.addToCart(id)
    }

    let productElements = props.groceries.map((grocery) => <Product
        productid={grocery.id}
        key={grocery.id}
        price={grocery.price}
        onAddToCartClick = { () => addToCart(grocery.id - 1) }
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