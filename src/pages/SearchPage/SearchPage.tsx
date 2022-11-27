import styles from "./SearchPage.module.scss";
import Products from "../../components/Products/Products";
import Preloader from "../../components/Preloader/Preloader";
import { Item } from "../../models/types";
import {
  collection,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firebaseApp } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAppSelector } from "../../app/hooks";
import { useParams } from "react-router-dom";

const SearchPage: React.FC = () => {
  const firestore = getFirestore(firebaseApp);
  const thingsRef = collection(firestore, "things");
  const {
    sexEnum,
    category,
    brand,
    searchText,
  }: {
    sexEnum: "0" | "1" | "2";
    category: string;
    brand: string;
    searchText: string;
  } = useParams();

  const [things, isLoadingThings, isErrorThings] = useCollectionData(
    query(
      thingsRef,
      where("sex", "==", sexEnum),
      where(
        category ? "category.name" : "sex",
        "==",
        category ? category : sexEnum
      ),
      where(brand ? "brand.name" : "sex", "==", brand ? brand : sexEnum)
    )
  );

  return (
    <div className={styles.searchPage}>
      {!isLoadingThings && things && (
        <Products items={things} searchText={""} />
      )}
      {isLoadingThings && <Preloader />}
      {!things && !isLoadingThings && <h1>Nothing to show</h1>}
    </div>
  );
};

export default SearchPage;
