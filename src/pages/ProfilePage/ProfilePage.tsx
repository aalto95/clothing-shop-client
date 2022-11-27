import styles from "./ProfilePage.module.scss";
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
    <section className={styles.adminPage}>
      <h1>Order history</h1>
      {history &&
        history.map((order: any) => {
          return (
            <div>
              <h2>{new Date(order.createdAt.seconds * 1000).toDateString()}</h2>
              <div>
                {order.items.map((item: any) => {
                  return (
                    <div>
                      <h3>{item.name}</h3>
                      <p>Price: {item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <img
                        src={item.image}
                        alt="item"
                        className={styles.image}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default ProfilePage;
