import styles from './Products.module.scss'
import Product from "./Product/Product";
import {Item} from "../../models/types";
import React from "react";

type PropsType = {
    items: Array<Item>
}

const Products: React.FC<PropsType> = (props) => {

    const productElements = props.items.map((item, i) => <Product
        key={item.id}
        id={item.id}
        price={item.price}
        brand={item.brand}
        title={item.title}
        color={item.color}
        style={{backgroundImage: `url(${item.img_small})`}}
    />)

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.productContainer}>
                    {productElements}
                </div>
            </div>
        </>
    )
}

export default Products
