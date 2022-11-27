import React, { useEffect, useState } from "react";
import styles from "./CartPage.module.scss";
import deleteIcon from "../../assets/icons/delete.svg";
import { ReactSVG } from "react-svg";
import { Item } from "../../models/types";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { firebaseApp } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { cartSet } from "../../features/app-slice";

interface Props {
  items: Item[];
  checkout: Function;
}

const CartPage: React.FC<Props> = (props) => {
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const [user] = useAuthState(auth);
  const cart = useAppSelector((state) => state.app.cart);
  const dispatch = useAppDispatch();

  async function onAdd(uid: string, quantity: number) {
    const cartRef = doc(firestore, "carts", user!.uid);
    try {
      await updateDoc(cartRef, {
        items: cart.map((item: any) => {
          if (item.uid === uid) {
            return { ...item, quantity: quantity + 1 };
          } else {
            return item;
          }
        }),
      });
      console.log("Document updated");
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
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubtract(uid: string, quantity: number) {
    if (quantity > 1) {
      const cartRef = doc(firestore, "carts", user!.uid);
      try {
        await updateDoc(cartRef, {
          items: cart.map((item: any) => {
            if (item.uid === uid) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          }),
        });
        console.log("Document updated");
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
      } catch (error) {
        console.log(error);
      }
    } else {
      onRemoveFromCart(uid);
    }
  }

  let onCheckout = () => {
    props.checkout();
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
      await updateDoc(cartRef, {
        items: cart.filter((item: any) => item.uid !== uid),
      });
      console.log("Document updated");
      dispatch(cartSet(cart.filter((item: any) => item.uid !== uid)));
    } catch (error) {
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
              {product.brand.name} {product.name} x {product.quantity} ={" "}
              <b>{product.price * product.quantity!}$</b>
            </p>
            <div className={styles.buttonGroup}>
              <button
                className={styles.quantityButton}
                onClick={() => onAdd(product.uid!, product.quantity!)}
              >
                +
              </button>
              <button
                className={styles.quantityButton}
                onClick={() => onSubtract(product.uid!, product.quantity!)}
              >
                -
              </button>
              <ReactSVG
                className={styles.deleteIcon}
                src={deleteIcon}
                onClick={() => {
                  onRemoveFromCart(product.uid!);
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
