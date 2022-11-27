import React from "react";
import styles from "./CartPage.module.scss";
import deleteIcon from "../../assets/icons/delete.svg";
import { ReactSVG } from "react-svg";
import { Item } from "../../models/types";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { firebaseApp } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { cartSet, orderPushed } from "../../features/app-slice";

const CartPage: React.FC = () => {
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const [user] = useAuthState(auth);
  const cart = useAppSelector((state) => state.app.cart);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = React.useState(false);

  async function onAdd(uid: string, quantity: number) {
    const cartRef = doc(firestore, "carts", user!.uid);
    try {
      setIsLoading(true);
      await updateDoc(cartRef, {
        items: cart.map((item: any) => {
          if (item.uid === uid) {
            return { ...item, quantity: quantity + 1 };
          } else {
            return item;
          }
        }),
      });
      dispatch(
        cartSet(
          cart.map((item: any) => {
            if (item.uid === uid) {
              return { ...item, quantity: quantity + 1 };
            } else {
              return item;
            }
          })
        )
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  async function onSubtract(uid: string, quantity: number) {
    if (quantity > 1) {
      const cartRef = doc(firestore, "carts", user!.uid);
      try {
        setIsLoading(true);
        await updateDoc(cartRef, {
          items: cart.map((item: any) => {
            if (item.uid === uid) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          }),
        });
        dispatch(
          cartSet(
            cart.map((item: any) => {
              if (item.uid === uid) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return item;
              }
            })
          )
        );
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    } else {
      onRemoveFromCart(uid);
    }
  }

  let onCheckout = async () => {
    const ordersRef = collection(
      firestore,
      "order_history",
      user!.uid,
      "orders"
    );
    const cartRef = doc(firestore, "carts", user!.uid);
    await addDoc(ordersRef, {
      items: cart,
      createdAt: serverTimestamp(),
    });
    await updateDoc(cartRef, {
      items: [],
    }).then(() => {
      dispatch(cartSet([]));
      dispatch(
        orderPushed({
          items: cart,
          createdAt: serverTimestamp(),
        })
      );
    });
  };

  let totalPrice = () => {
    let subTotal = 0;
    // eslint-disable-next-line array-callback-return
    cart.map((product: Item) => {
      subTotal += product.price * product.quantity!;
    });
    return subTotal;
  };

  async function onRemoveFromCart(uid: string) {
    const cartRef = doc(firestore, "carts", user!.uid);
    try {
      setIsLoading(true);
      await updateDoc(cartRef, {
        items: cart.filter((item: any) => item.uid !== uid),
      });
      dispatch(cartSet(cart.filter((item: any) => item.uid !== uid)));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  if (!user) {
    return (
      <div className={styles.emptyCart}>
        <h1>Please Sign In</h1>
      </div>
    );
  }

  if (cart && cart.length > 0) {
    return (
      <div className={styles.cart}>
        {cart.map((product: Item, i: number) => (
          <div key={i} className={styles.product}>
            <img
              src={product.image}
              className={styles.productImg}
              alt="product-img"
            />
            <p className={styles.productName}>
              {product?.brand.name} {product.name} x {product.quantity} ={" "}
              <b>{product.price * product.quantity!}$</b>
            </p>
            <div className={styles.buttonGroup}>
              <button
                className={styles.quantityButton}
                onClick={() => onAdd(product.uid!, product.quantity!)}
                disabled={isLoading}
                style={{
                  cursor: isLoading ? "not-allowed" : "pointer",
                  opacity: isLoading ? 0.5 : 1,
                }}
              >
                +
              </button>
              <button
                className={styles.quantityButton}
                onClick={() => onSubtract(product.uid!, product.quantity!)}
                disabled={isLoading}
                style={{
                  cursor: isLoading ? "not-allowed" : "pointer",
                  opacity: isLoading ? 0.5 : 1,
                }}
              >
                -
              </button>
              <ReactSVG
                className={styles.deleteIcon}
                src={deleteIcon}
                onClick={() => {
                  onRemoveFromCart(product.uid!);
                }}
                style={{
                  cursor: isLoading ? "not-allowed" : "pointer",
                  opacity: isLoading ? 0.5 : 1,
                }}
              />
            </div>
          </div>
        ))}
        <div className={styles.checkoutGroup}>
          <p>
            Subtotal: <b>{totalPrice()}$</b>
          </p>
          <button className={styles.checkoutButton} onClick={onCheckout}>
            Checkout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.emptyCart}>
      <h1>Your cart is empty</h1>
    </div>
  );
};

export default CartPage;
