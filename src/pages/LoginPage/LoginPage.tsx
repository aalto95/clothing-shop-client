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
import { firebaseApp } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage: React.FC = () => {
  const isLogged = useAppSelector((state) => state.app.isLogged);
  const auth = getAuth(firebaseApp);
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
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
  const [user, userIsLoading] = useAuthState(auth);
  return (
    <div className={styles.loginComponent}>
      {isLogged && <Redirect to="/admin" />}
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
