import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import StartingPage from "./components/StartingPage/StartingPage";
import ProductsContainer from "./components/Products/ProductsContainer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <StartingPage />
        <ProductsContainer />
    </div>
  );
}

export default App;
