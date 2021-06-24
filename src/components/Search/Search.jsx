import styles from './Search.module.css';
import {useEffect, useState} from "react";
import Products from "../Products/Products";
import Preloader from "../Preloader/Preloader";
import {useLocation} from "react-router-dom";
import {productsAPI} from "../../api/api";

const Search = (props) => {

    let searchRequest = useLocation().pathname.replace('/search/', '')

    if (props.isSearching) {
        productsAPI.searchProducts(searchRequest)
            .then(response => {
                props.setProducts(response)
                props.toggleIsSearching(false)
            })
    }

    return (
        <>
            <div className={styles.searchPage}>
                <p>There are {props.items.length} matches</p>
                {
                    !props.isSearching
                    ? <Products
                        items={props.items}
                        cart={props.cart}
                        addToCart={props.addToCart}
                        addOne={props.addOne}
                        pagesQuantity={props.pagesQuantity}
                        currentPage={props.currentPage}
                        previousPage={props.previousPage}
                        nextPage={props.nextPage}
                    />
                    : <Preloader />
                }
            </div>
        </>
    )

}

export default Search