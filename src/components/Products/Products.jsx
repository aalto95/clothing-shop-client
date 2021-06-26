import styles from './Products.module.css'
import Product from "./Product/Product";

const Products = (props) => {

    let productElements = props.items.map((item, i) => <Product
        id={item.id}
        key={item.id}
        price={item.price}
        brand={item.brand}
        title={item.title}
        style={{backgroundImage: `url(${item.img_small})`}}
        sex={item.sex}
        color={item.color}
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
            {/*    <button disabled={props.currentPage === props.pagesQuantity} onClick={props.nextPage}>&#8594;</button>*/}
            {/*</div>*/}
        </>
    )
}

export default Products