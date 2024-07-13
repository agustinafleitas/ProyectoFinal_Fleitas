import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [CartCount, setCartCount]= useState(3)

  return (
    <BrowserRouter>
      <NavBar CartCount={CartCount}/>
      <ItemListContainer greetings="¡Bienvenido a Puppies!"/>
      <Routes>
        <Route path="/" element={<ItemDetailContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

Video 45
