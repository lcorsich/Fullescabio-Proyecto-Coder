// import logo from './logo.svg';
import "./App.css";
import { useState, createContext } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartConteiner from "./components/CartConteiner/CartConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/cartContex'


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
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
