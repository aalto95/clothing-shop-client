import styles from './Products.module.css'
import Product from "./Product/Product";

const Products = (props) => {

    let addToCart = (id) => {

        let alreadyInCart = false
        let index = 0

        for (let j = 0; j < props.cart.length; j++) {
            if (props.items[id].title === props.cart[j].title) {
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

    let productElements = props.items.map((item, i) => <Product
        key={item.id}
        price={item.price}
        onAddToCartClick = { () => {addToCart(i) }}
        brand={item.brand}
        title={item.title}
        style={{backgroundImage: `url(${item.img_small})`}}
        sex={item.sex}
    />)

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.productContainer}>
                    {productElements}
                       </div>
            </div>
            {/*<div className={styles.pagination}>*/}
            {/*    <button disabled={props.currentPage === 1} onClick={props.previousPage}>&#8592;</button>*/}
            {/*    <span className={styles.currentPage}>{props.currentPage}</span>*/}
            {/*    <button disabled={props.currentPage === props.pageQuantity} onClick={props.nextPage}>&#8594;</button>*/}
            {/*</div>*/}
        </>
    )
}

export default Products