import React from "react";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { firebaseApp } from "../firebase";
import { Thing } from "../models/thing.model";
import { NavLink } from "react-router-dom";

const HomePage: React.FC = () => {
  const [things, setThings] = React.useState<any>([]);

  async function getThings() {
    const firestore = getFirestore(firebaseApp);
    const thingsRef = query(
      collection(firestore, "things"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(thingsRef);
    const things = snapshot.docs.map((doc) => {
      return doc.data();
    });
    setThings(things);
  }

  React.useEffect(() => {
    getThings();
  }, []);

  return (
    <div className="w-screen min-h-screen flex justify-center text-left">
      <div className="w-358 max-w-358 h-full pt-12 p-4">
        <h1 className="text-left text-3xl font-bold my-4">Popular Items</h1>
        <div className="flex flex-wrap justify-center">
          {things.map((thing: Thing) => (
            <NavLink
              key={thing.uid}
              to={"/items/" + thing.uid}
              className="flex flex-col items-center w-1/2 md:w-1/3 lg:w-1/4 pr-2 text-center"
            >
              <img
                src={thing.image}
                alt="thing"
                className="object-cover h-50 md:h-60 w-full "
              />
              <p>{thing.name}</p>
              <p>{thing.price}$</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
