import styles from './Search.module.css';
import Products from "../Products/Products";
import Preloader from "../Preloader/Preloader";

const Search = (props) => {

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