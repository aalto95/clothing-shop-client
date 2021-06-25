import './App.css';
import {Route} from 'react-router-dom'
import CartContainer from "./components/Cart/CartContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import AdminContainer from "./components/Admin/AdminContainer";
import Footer from "./components/Footer/Footer";
import SearchContainer from "./components/Search/SearchContainer";
import StartingPageContainer from "./components/StartingPage/StartingPageContainer";

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
