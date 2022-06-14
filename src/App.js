// import logo from './logo.svg';
import "./App.css";
import { useState, createContext } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const Context = createContext()

function App() {
  const [cart, setCart] = useState([]); // Estado en componente padre
  console.log(cart);

  const addItem = (productsToAdd) => {
    if(!cart.some(prod => prod.id === productsToAdd.id)) {
      setCart([...cart, productsToAdd])
    }
  }
  
  return (
    <div className="App">
      <Context.Provider value={ { cart, addItem} }>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}
            />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
