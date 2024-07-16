import { useState } from "react"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import AboutUs from "./components/AboutUs/AboutUs"
import images from "./components/imagenes/images";

function App() {
  const [CartCount, setCartCount]= useState(3)

  return (
    <BrowserRouter>
      <NavBar CartCount={CartCount}/>
      <Routes>
      <Route path="/" element={
          <>
            <ItemListContainer greetings="¡Bienvenido a Puppies!" />
            <div className="container mt-4">
              <div className="row">
                <div className="col">
                  <img src={images.EnConstruccion} alt="En Construcción" className="ConstructionImage"/>
                </div>
              </div>
            </div>
          </>
      }/>
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/About" element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App