import styles from './Search.module.css';
import {useEffect} from "react";
import Products from "../Products/Products";
import Preloader from "../Preloader/Preloader";

const Search = (props) => {

    useEffect(() => props.toggleSearchbar, [props.toggleSearchbar])

    return (
        <>
            <div className={styles.searchPage}>
                <p>There are {props.groceries.length} matches</p>
                {
                    props.isSearching
                    ? <Products
                        groceries={props.groceries}
                        cart={props.cart}
                        addToCart={props.addToCart}
                        addOne={props.addOne}
                        pageQuantity={props.pagesQuantity}
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