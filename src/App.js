import './App.css';
import React, {Suspense} from "react";
import {Route} from 'react-router-dom'
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
const SearchPageContainer = React.lazy(() => import("./components/SearchPage/SearchPageContainer"));
const HomePageContainer = React.lazy(() => import("./components/HomePage/HomePageContainer"));
const ItemPageContainer = React.lazy(() => import("./components/ItemPage/ItemPageContainer"));
const LoginPageContainer = React.lazy(() => import("./components/LoginPage/LoginPageContainer"));
const AdminPageContainer = React.lazy(() => import("./components/AdminPage/AdminPageContainer"));
const CartPageContainer = React.lazy(() => import("./components/CartPage/CartPageContainer"));

function App() {
  return (
    <div className="App">
        <Route path="/"
               render={ () => <NavbarContainer /> }/>
        <Suspense fallback={<Preloader />}>
            <Route exact path="/"
                   render={ () => <HomePageContainer /> }/>
            <Route path="/search/:string?"
                   render={ () => <SearchPageContainer /> }/>
            <Route path="/items/:itemId?"
                   render={ () => <ItemPageContainer /> }/>
            <Route path="/cart"
                   render={ () => <CartPageContainer /> }/>
            <Route path="/login"
                   render={ () => <LoginPageContainer /> }/>
            <Route path="/admin"
                   render={ () => <AdminPageContainer/> }/>
        </Suspense>
        <Route path="/"
               render={ () => <Footer/> }/>
    </div>
  );
}

export default App;
