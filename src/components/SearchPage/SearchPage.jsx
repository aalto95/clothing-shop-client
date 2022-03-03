import styles from './SearchPage.module.scss';
import Products from "../Products/Products";
import Preloader from "../Preloader/Preloader";

const SearchPage = (props) => {

    return (
        <>
            <div className={styles.searchPage}>
                <p>{props.items.length} results for '{props.searchText}'</p>
                {
                    !props.isSearching
                    ? <Products items={props.items}/>
                    : <Preloader />
                }
            </div>
        </>
    )

}

export default SearchPage
