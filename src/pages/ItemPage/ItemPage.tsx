import React, { useEffect } from "react";
import styles from "./ItemPage.module.scss";
import { Item } from "../../models/types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { cartSet } from "../../features/app-slice";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../../firebase";
import { NavLink, useParams } from "react-router-dom";

const ItemPage: React.FC = () => {
  const cart = useAppSelector((state) => state.app.cart);
  const dispatch = useAppDispatch();

  const auth = getAuth(firebaseApp);
  const [user] = useAuthState(auth);
  const firestore = getFirestore(firebaseApp);
  const [isLoading, setIsLoading] = React.useState(false);

  async function addToCart(uid: string) {
    setIsLoading(true);
    const cartRef = doc(firestore, "carts", user!.uid);
    await updateDoc(cartRef, {
      items: [...cart, { ...item, quantity: 1 }],
    }).then(() => {
      setIsLoading(false);
      dispatch(cartSet([...cart, { ...item, quantity: 1 }]));
      console.log("Document successfully updated!");
    });
  }

  const [item, setItem] = React.useState<Item | null>(null);

  const { itemId }: { itemId: string } = useParams();

  async function getItem() {
    const docRef = doc(firestore, "things", itemId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setItem({ ...docSnap.data(), quantity: 1 } as Item);
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className={styles.itemPage}>
      <div className={styles.item}>
        <img src={item?.image} alt="item-img" className={styles.itemImage} />
        <div className={styles.infoBlock}>
          <h2>{item?.brand.name}</h2>
          <p>
            {item?.color} {item?.name}
          </p>
          <h5>Select Size:</h5>
          <select name="sizes">
            {item?.sizes.map((size: any) => (
              <option value={size} key={size}>
                {size}
              </option>
            ))}
          </select>
          <h2>{item?.price}$</h2>
          {cart.find((cartItem: any) => cartItem.uid === item?.uid) ? (
            <NavLink to="/cart" className={styles.addToCart}>
              Already in Cart
            </NavLink>
          ) : (
            <button
              className={styles.addToCart}
              onClick={() => addToCart(user!.uid)}
              disabled={isLoading}
              style={{
                cursor: isLoading ? "not-allowed" : "pointer",
                opacity: isLoading ? 0.5 : 1,
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
