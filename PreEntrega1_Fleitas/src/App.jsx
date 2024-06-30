import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"

function App() {
  const [CartCount, setCartCount]= useState(2)

  return (
    <>
      <NavBar CartCount={CartCount}/>
    </>
  )
}

export default App
