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

const LoginPage: React.FC = () => {
  const loggedUser = useAppSelector((state) => state.app.user);
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const [user, userIsLoading] = useAuthState(auth);
  const [history, setHistory] = React.useState<any[]>([]);

  async function createCart(result: any) {
    const cartRef = doc(firestore, "carts", result.user.uid);
    await setDoc(cartRef, {
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

  if (user) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={styles.loginComponent}>
      <div className={styles.formWrapper}>
        {userIsLoading && <div>Loading...</div>}
        {user && !userIsLoading && (
          <button onClick={signOutWithGoogle}>Sign out</button>
        )}
        {!user && !userIsLoading && (
          <button
            onClick={signInWithGoogle}
            className="flex gap-2 rounded-xl border-2 p-2 bg-gray-100"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="google"
              className="w-6"
            />
            Sign in with Google
          </button>
        )}
      </div>
      {user && <h1>Order history</h1>}
      {history &&
        history.map((order: any) => {
          return <div>{order.createdAt.seconds}</div>;
        })}
    </div>
  );
};

export default LoginPage;
