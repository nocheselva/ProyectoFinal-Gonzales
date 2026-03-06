import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'; 

import Checkout from './components/Checkout/Checkout'; 

import { CartProvider } from './context/CartContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Nuestros Productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por categoría" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> 
          
          {}
          <Route path="/checkout" element={<Checkout />} /> 
          
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;