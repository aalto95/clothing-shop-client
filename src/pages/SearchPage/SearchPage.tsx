import styles from "./SearchPage.module.scss";
import Products from "../../components/Products/Products";
import Preloader from "../../components/Preloader/Preloader";
import { Item } from "../../models/types";

interface Props {
  items: Item[];
  isSearching: boolean;
  searchText: string;
}

const SearchPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.searchPage}>
      {!props.isSearching ? (
        <Products items={props.items} searchText={props.searchText} />
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default SearchPage;
