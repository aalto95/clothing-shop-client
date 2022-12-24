import React from "react";
import { Thing } from "../models/thing.model";
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
    cart.map((product: Thing) => {
      subTotal += product.price * product.quantity!;
    });
    return subTotal;
  };

  let totalItems = () => {
    let total = 0;
    cart.map((product: Thing) => {
      total += product.quantity!;
    });
    return total;
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
      console.error(error);
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
      <div className="w-screen min-h-screen h-screen bg-gray-100 p-4 pt-12 flex justify-center">
        <div className="w-350 max-w-350 h-full">
          <h1 className="text-left text-3xl font-bold my-4">Cart</h1>
          <div className="flex flex-col gap-2">
            {cart.map((product: Thing, i: number) => (
              <div key={i} className="flex flex-col w-full bg-white p-4">
                <div className="flex items-center gap-2 border-b-1 pb-4">
                  <img
                    src={product.image}
                    className="w-16 h-16"
                    alt="product-img"
                  />
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
                      onClick={() =>
                        onSubtract(product.uid!, product.quantity!)
                      }
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

          <div className="w-full pt-2">
            <div className="flex justify-between">
              <p>{totalItems()} Items</p>
              <p>{totalPrice()}$</p>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-blue-500 text-white rounded-full h-12"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-12 flex justify-center items-center">
      <h1 className="text-left text-3xl font-bold my-4 text-center">
        Your cart is empty
      </h1>
    </div>
  );
};

export default CartPage;
