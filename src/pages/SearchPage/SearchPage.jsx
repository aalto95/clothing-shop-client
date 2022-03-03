import styles from './SearchPage.module.scss';
import Products from "../../components/Products/Products";
import Preloader from "../../components/Preloader/Preloader";

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
