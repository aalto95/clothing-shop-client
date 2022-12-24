import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { cartSet } from "../features/app-slice";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../firebase";
import { NavLink, useParams } from "react-router-dom";
import { Thing } from "../models/thing.model";

const ItemPage: React.FC = () => {
  const cart = useAppSelector((state) => state.app.cart);
  const dispatch = useAppDispatch();

  const auth = getAuth(firebaseApp);
  const [user] = useAuthState(auth);
  const firestore = getFirestore(firebaseApp);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedSize, setSelectedSize] = React.useState("");

  async function addToCart(uid: string) {
    setIsLoading(true);
    const cartRef = doc(firestore, "carts", user!.uid);
    await updateDoc(cartRef, {
      items: [...cart, { ...item, quantity: 1 }],
    }).then(() => {
      setIsLoading(false);
      dispatch(cartSet([...cart, { ...item, quantity: 1 }]));
    });
  }

  const [item, setItem] = React.useState<Thing | null>(null);

  const { itemId }: { itemId: string } = useParams();

  async function getItem() {
    const docRef = doc(firestore, "things", itemId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setItem({ ...docSnap.data(), quantity: 1 } as Thing);
      if (docSnap.data()?.sizes) {
        setSelectedSize(docSnap.data()?.sizes[0]);
      }
    } else {
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="bg-gray-100 w-full min-h-screen flex justify-center items-center">
      <div className="flex gap-4 flex-col lg:flex-row">
        <img src={item?.image} alt="item-img" />
        <div className="flex flex-wrap flex-col items-center bg-white p-4 rounded-xl">
          <h2 className="text-xl">{item?.brand?.name}</h2>
          <p className="text-sm text-gray-400">
            {item?.color} {item?.name}
          </p>
          {item?.sizes && <h5 className="text-sm my-4">Available sizes</h5>}
          <div className="flex gap-2 pb-4 border-b-1 w-full">
            {item?.sizes?.map((size: any) => (
              <button
                value={size}
                key={size}
                className={
                  "bg-gray-100 p-2 w-full rounded-xl" +
                  (selectedSize === size ? " bg-gray-200" : "")
                }
                onClick={(e) => setSelectedSize(e.currentTarget.value)}
              >
                {size}
              </button>
            ))}
          </div>
          <h2 className="my-2">{item?.price}$</h2>
          {cart.find((cartItem: any) => cartItem.uid === item?.uid) ? (
            <NavLink
              to="/cart"
              className="bg-blue-500 text-white p-2 rounded-xl w-full"
            >
              Already in Cart
            </NavLink>
          ) : (
            <button
              onClick={() => addToCart(user!.uid)}
              disabled={isLoading}
              style={{
                cursor: isLoading ? "not-allowed" : "pointer",
                opacity: isLoading ? 0.5 : 1,
              }}
              className="bg-black text-white p-2 rounded-xl flex flex-col w-full"
            >
              <p>Add To Cart</p>
              {selectedSize}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
