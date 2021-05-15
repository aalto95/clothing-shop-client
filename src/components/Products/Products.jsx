import s from './Products.module.css'
import Product from "./Product/Product";

const Products = (props) => {
    console.log(props.groceries)

    let showDetails = (e) => {
        let id = e.target.attributes.listid.value
        props.showDetails(id)
    }

    let addToCart = (e) => {

    }

    let productElements = props.groceries.map((grocery) => <Product
        listid={grocery.id}
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