import styles from "./SearchPage.module.scss";
import Products from "../../components/Products/Products";
import Preloader from "../../components/Preloader/Preloader";
import { Item } from "../../models/types";
import { collection, getFirestore, orderBy, query } from "firebase/firestore";
import { firebaseApp } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAppSelector } from "../../app/hooks";

const SearchPage: React.FC = () => {
  const searchText = useAppSelector((state) => state.app.searchText);
  const firestore = getFirestore(firebaseApp);
  const thingsRef = collection(firestore, "things");
  const [things, isLoadingThings, isErrorThings] = useCollectionData(
    query(thingsRef, orderBy("createdAt"))
  );
  return (
    <div className={styles.searchPage}>
      {!isLoadingThings ? (
        <Products items={things} searchText={searchText} />
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default SearchPage;
