import { useState } from 'react'
import Home from './components/Home/Home.jsx'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import './App.css'
import './App1.css'

function App() {
  const [counter, cambiarValorDeCounter] = useState(0)
  const handleCounter = () => {
    cambiarValorDeCounter(counter+1)
  }
  return (

    <>

    <NavBar />
    <ItemListContainer/>
    
    <p>{counter}</p>
    <button> onClik={handleCounter}click +</button>
    </>
  )
}

export default App
