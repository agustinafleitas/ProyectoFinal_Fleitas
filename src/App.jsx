import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import AboutUs from "./components/AboutUs/AboutUs"
import { CartProvider } from "./context/CartContext";
import images from "./components/imagenes/images";
import Cart  from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
      <Route path="/" element={
          <>
            <ItemListContainer greetings="¡Bienvenido a Puppies!" />
          </>
      }/>
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/About" element={<AboutUs />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="*" element={<h1>404 Not found</h1>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App