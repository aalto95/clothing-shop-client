import s from './Products.module.css'
import Product from "./Product/Product";

const Products = (props) => {

    let showDetails = (e) => {
        let id = e.target.attributes.productid.value
        props.showDetails(id)
    }

    let addToCart = (e) => {
        let id = e.target.attributes.productid.value
        console.log(id)
        props.addToCart(id)
    }

    let productElements = props.groceries.map((grocery) => <Product
        productid={grocery.id}
        key={grocery.id}
        price={grocery.price}
        onProductClick={ showDetails }
        onAddToCartClick = { addToCart }
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