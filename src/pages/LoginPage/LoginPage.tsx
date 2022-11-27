import styles from "./LoginPage.module.scss";
import React from "react";
import { Redirect } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { firebaseApp } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, orderBy, query } from "firebase/firestore";

const LoginPage: React.FC = () => {
  const loggedUser = useAppSelector((state) => state.app.user);
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const cartsRef = collection(firestore, "carts");
  const [user, userIsLoading] = useAuthState(auth);

  async function createCart(result: any) {
    await setDoc(doc(firestore, "carts", result.user.uid), {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
      items: [],
    }).then(() => {
      console.log("Cart created");
    });
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      createCart(result);
    });
  }

  function signOutWithGoogle() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className={styles.loginComponent}>
      <div className={styles.formWrapper}>
        {userIsLoading && <div>Loading...</div>}
        {user && !userIsLoading && (
          <button onClick={signOutWithGoogle}>Sign out</button>
        )}
        {!user && !userIsLoading && (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
