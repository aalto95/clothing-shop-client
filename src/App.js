import './App.css';
import StartingPage from "./components/StartingPage/StartingPage";
import ProductsContainer from "./components/Products/ProductsContainer";
import {Route} from 'react-router-dom'
import CartContainer from "./components/Cart/CartContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import AdminContainer from "./components/Admin/AdminContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
            <Route path="/"
                   render={ () => <NavbarContainer /> }/>
            <Route exact path="/"
                   render={ () => <StartingPage /> }/>
            <Route exact path="/"
                   render={ () => <ProductsContainer /> }/>
            <Route path="/cart"
                   render={ () => <CartContainer /> }/>
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
