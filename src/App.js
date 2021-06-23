import './App.css';
import StartingPage from "./components/StartingPage/StartingPage";
import {Route} from 'react-router-dom'
import CartContainer from "./components/Cart/CartContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import AdminContainer from "./components/Admin/AdminContainer";
import Footer from "./components/Footer/Footer";
import SearchContainer from "./components/Search/SearchContainer";

function App() {
  return (
    <div className="App">
            <Route path="/"
                   render={ () => <NavbarContainer /> }/>
            <Route exact path="/"
                   render={ () => <StartingPage /> }/>
            <Route path="/search"
                   render={ () => <SearchContainer /> }/>
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
