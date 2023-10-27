import './App.css'
import NavBar from './components/NavBar/NavBar'
const Titulo = ()=>{
    return(
      <div>
        <h1>Lara Casa</h1>
        <h2>Tus Zapatos Favoritos</h2>
      </div>
    )
}

const Formulario = ()=>{
  return(
    <form>
      <>Titulo</>
      <input type="text" placeholder='Ingresa tu Nombre'/>
    </form>
  )
}

function App() {
  return (
    <>
    <>NavBar </>
    <>Titulo </>
    <>Formulario</>
    </>
  )
}

export default App
