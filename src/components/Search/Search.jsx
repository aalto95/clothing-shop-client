import styles from './Search.module.css';
import {useEffect, useState} from "react";
import Products from "../Products/Products";

const Search = (props) => {

    useEffect(props.toggleSearchbar, [])

    return (
        <>
            <div className={styles.searchPage}>
                <p>There are {props.groceries.length} matches</p>
                <Products
                    groceries={props.groceries}
                    cart={props.cart}
                    addToCart={props.addToCart}
                    addOne={props.addOne}
                />
            </div>
        </>
    )

}

export default Search