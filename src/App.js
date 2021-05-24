import './App.css';
import StartingPage from "./components/StartingPage/StartingPage";
import ProductsContainer from "./components/Products/ProductsContainer";
import {Route} from 'react-router-dom'
import CartContainer from "./components/Cart/CartContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";

function App() {
  return (
    <div className="App">
        <NavbarContainer />
        <Route exact path="/"
               render={ () => <StartingPage /> }/>
        <Route exact path="/"
               render={ () => <ProductsContainer /> }/>
        <Route path="/cart"
               render={ () => <CartContainer /> }/>
        <Route path="/login"
               render={ () => <LoginContainer /> }/>
    </div>
  );
}

export default App;
