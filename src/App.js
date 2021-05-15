import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import StartingPage from "./components/StartingPage/StartingPage";
import ProductsContainer from "./components/Products/ProductsContainer";
import {NavLink, Route} from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Route exact path="/"
               render={ () => <StartingPage /> }/>
        <Route exact path="/"
               render={ () => <ProductsContainer /> }/>
        <Route exact path="/cart"
               render={ () => <CartContainer /> }/>
    </div>
  );
}

export default App;
