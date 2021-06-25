import './App.css';
import {Route} from 'react-router-dom'
import CartPageContainer from "./components/CartPage/CartPageContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginPageContainer from "./components/LoginPage/LoginPageContainer";
import AdminPageContainer from "./components/AdminPage/AdminPageContainer";
import Footer from "./components/Footer/Footer";
import SearchPageContainer from "./components/SearchPage/SearchPageContainer";
import StartingPageContainer from "./components/HomePage/HomePageContainer";
import ItemPageContainer from "./components/ItemPage/ItemPageContainer";

function App() {
  return (
    <div className="App">
            <Route path="/"
                   render={ () => <NavbarContainer /> }/>
            <Route exact path="/"
                   render={ () => <StartingPageContainer /> }/>
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
            <Route path="/"
                   render={ () => <Footer/> }/>
    </div>
  );
}

export default App;
