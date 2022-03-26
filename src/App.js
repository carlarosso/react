import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./Context/CartContext";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
        
        <CartContextProvider value={{ }} > 
      
                  <div className="App">
                    
                      <NavBar />

                      <Routes>
                      
                          <Route path="/" element={<ItemListContainer />} />

                          <Route path="/categoria/:id" element={<ItemListContainer />} />

                          <Route path="detail/:prodId" element={<ItemDetailContainer />} />

                          
                          <Route path="/cart" element={<Cart />} />


                          <Route path="/*" element={<Navigate to='/' />} />
                


                      </Routes>

                  </div>
                
        </CartContextProvider>

    </BrowserRouter>
  );
}

export default App;
