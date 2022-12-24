import React, { useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { firebaseApp } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

const ProfilePage: React.FC = () => {
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const [user] = useAuthState(auth);
  const [history, setHistory] = React.useState<any[]>([]);

  async function getHistory() {
    const categoriesRef = query(
      collection(firestore, "order_history", user!.uid, "orders"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(categoriesRef);
    const history = snapshot.docs.map((doc) => {
      return doc.data();
    });
    setHistory(history);
  }

  useEffect(() => {
    if (user) {
      getHistory();
    }
  }, [user]);

  return (
    <section className="min-h-screen bg-gray-100 pt-12 p-4">
      <h1 className="text-left text-3xl font-bold my-4">Order history</h1>
      <div className="flex flex-col gap-4">
        {history &&
          history.map((order: any) => {
            return (
              <div
                key={order.createdAt.seconds}
                className="bg-white text-left p-4"
              >
                <h2>
                  {new Date(order.createdAt.seconds * 1000).toDateString()}
                </h2>
                <div>
                  {order.items.map((item: any) => {
                    return (
                      <div key={item.uid} className="flex gap-2">
                        <img
                          src={item.image}
                          alt="item"
                          className="w-48 h-48"
                        />
                        <div>
                          <h3>{item.name}</h3>
                          <p>Price: {item.price}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ProfilePage;
