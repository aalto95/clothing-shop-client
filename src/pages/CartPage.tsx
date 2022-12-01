import React from "react";
import { Item } from "../models/types";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { firebaseApp } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { cartSet, orderPushed } from "../features/app-slice";

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
      <div>
        <h1>Please Sign In</h1>
      </div>
    );
  }

  if (cart && cart.length > 0) {
    return (
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-left text-3xl font-bold p-4">Cart</h1>
        <div className="flex flex-col gap-2">
          {cart.map((product: Item, i: number) => (
            <div key={i} className="flex flex-col w-full bg-white p-4">
              <div className="flex items-center gap-2 border-b-1 pb-4">
                <img src={product.image} className="w-16" alt="product-img" />
                <div className="flex w-full justify-between">
                  <p>{product.name}</p>
                  <button
                    onClick={() => {
                      onRemoveFromCart(product.uid!);
                    }}
                    style={{
                      cursor: isLoading ? "not-allowed" : "pointer",
                      opacity: isLoading ? 0.5 : 1,
                    }}
                  ></button>
                </div>
              </div>
              <div className="flex w-full justify-between mt-2">
                <b>{product.price * product.quantity!}$</b>
                <div className="flex bg-gray-200 gap-4 rounded-full items-center px-2">
                  <button
                    className="text-3xl"
                    onClick={() => onSubtract(product.uid!, product.quantity!)}
                    disabled={isLoading}
                    style={{
                      cursor: isLoading ? "not-allowed" : "pointer",
                      opacity: isLoading ? 0.5 : 1,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <rect
                        fill="#454B54"
                        y="4"
                        width="10"
                        height="2"
                        rx="1"
                      ></rect>
                    </svg>
                  </button>
                  <p className="text-md">{product.quantity}</p>
                  <button
                    className="text-3xl"
                    onClick={() => onAdd(product.uid!, product.quantity!)}
                    disabled={isLoading}
                    style={{
                      cursor: isLoading ? "not-allowed" : "pointer",
                      opacity: isLoading ? 0.5 : 1,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <g fill="#454B54">
                        <rect x="4" width="2" height="10" ry="1"></rect>
                        <rect y="4" width="10" height="2" rx="1"></rect>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p>
            Subtotal: <b>{totalPrice()}$</b>
          </p>
          <button onClick={onCheckout}>Checkout</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Your cart is empty</h1>
    </div>
  );
};

export default CartPage;
