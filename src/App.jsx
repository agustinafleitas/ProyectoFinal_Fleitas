import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const [CartCount, setCartCount]= useState(3)

  return (
    <>
      <NavBar CartCount={CartCount}/>
      <ItemListContainer greetings="¡Bienvenido a Puppies!"/>
    </>
  )
}

export default App
