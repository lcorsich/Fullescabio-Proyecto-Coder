import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartConteiner from "./components/CartConteiner/CartConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/cartContex'
import Checkout from "./components/Checkout/Checkout";


function App() {
 
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path='/cart'element={<CartConteiner />} />
            <Route path='/checkout'element={<Checkout/>} /> 
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
