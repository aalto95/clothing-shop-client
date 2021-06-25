import styles from './Search.module.css';
import Products from "../Products/Products";
import Preloader from "../Preloader/Preloader";
import {productsAPI} from "../../api/api";
import {useEffect} from "react";

const Search = (props) => {
    let startSearch = () => {
        props.toggleIsRedirecting(false)
        props.toggleIsSearching(true)
        productsAPI.searchProducts(props.searchString)
            .then(response => {
                props.setProducts(response)
                props.toggleIsSearching(false)
                props.onSearchFieldChange('')
            })
    }

    useEffect(startSearch, [props.searchString])

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