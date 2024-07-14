import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import AboutUs from "./components/AboutUs/AboutUs"

function App() {
  const [CartCount, setCartCount]= useState(3)

  return (
    <BrowserRouter>
      <NavBar CartCount={CartCount}/>
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="¡Bienvenido a Puppies!" />} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/About" element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App