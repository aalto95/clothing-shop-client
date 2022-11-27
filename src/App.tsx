import "./App.scss";
import React, { Suspense, lazy, useEffect } from "react";
import { Route } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import SearchbarContainer from "./components/Navbar/Searchbar/SearchbarContainer";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useAppDispatch } from "./app/hooks";
import { cartSet } from "./features/app-slice";

const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const HomePageContainer = lazy(
  () => import("./pages/HomePage/HomePageContainer")
);
const ItemPage = lazy(() => import("./pages/ItemPage/ItemPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const AdminPageContainer = lazy(
  () => import("./pages/AdminPage/AdminPageContainer")
);
const CartPageContainer = lazy(
  () => import("./pages/CartPage/CartPageContainer")
);

const App = () => {
  const auth = getAuth(firebaseApp);
  const dispatch = useAppDispatch();
  const [user, userIsLoading, loadingUserError] = useAuthState(auth);
  const firestore = getFirestore(firebaseApp);

  async function getCart() {
    const cartRef = doc(firestore, "carts", user!.uid);
    try {
      const docSnap = await getDoc(cartRef);
      console.log(docSnap.data()?.items);
      dispatch(cartSet(docSnap.data()?.items));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    user && getCart();
  }, [user]);

  if (userIsLoading) {
    return <Preloader />;
  }

  if (loadingUserError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="App">
      <Suspense fallback={<Preloader />}>
        <Route path="/" render={() => <NavbarContainer />} />
        <Route path="/" render={() => <SearchbarContainer />} />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <Route exact path="/" render={() => <HomePageContainer />} />
        <Route
          path="/search/:sexEnum?/:category?/:brand?"
          render={() => <SearchPage />}
        />
        <Route path="/items/:itemId?" render={() => <ItemPage />} />
        <Route path="/cart" render={() => <CartPageContainer />} />
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/admin" render={() => <AdminPageContainer />} />
      </Suspense>
      <Suspense fallback={<Preloader />}>
        <Route path="/" render={() => <Footer />} />
      </Suspense>
    </div>
  );
};

export default App;
