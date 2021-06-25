import './App.css';
import {Route} from 'react-router-dom'
import CartPageContainer from "./components/CartPage/CartPageContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginContainer from "./components/LoginPage/LoginPageContainer";
import AdminContainer from "./components/AdminPage/AdminPageContainer";
import Footer from "./components/Footer/Footer";
import SearchContainer from "./components/SearchPage/SearchPageContainer";
import StartingPageContainer from "./components/HomePage/HomePageContainer";

function App() {
  return (
    <div className="App">
            <Route path="/"
                   render={ () => <NavbarContainer /> }/>
            <Route exact path="/"
                   render={ () => <StartingPageContainer /> }/>
            <Route path="/search/:string?"
                   render={ () => <SearchContainer /> }/>
            <Route path="/cart"
                   render={ () => <CartPageContainer /> }/>
            <Route path="/login"
                   render={ () => <LoginContainer /> }/>
            <Route path="/admin"
                   render={ () => <AdminContainer/> }/>
            <Route path="/"
                   render={ () => <Footer/> }/>
    </div>
  );
}

export default App;
