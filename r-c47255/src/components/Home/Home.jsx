import Titulo from "../Titulo/Titulo"
import Formulario from "../Formulario/Formulario"

const Home = ( { saludo  } ) => {
    const tituloApp = 'Este es un titulo de App'
    const SubTituloApp = 'Este es un subtitulo de App'
}

return (
    <div>
        <Titulo titulo={tituloApp} subtitulo={subTituloApp}/>
        <Formulario />
        <p> {saludo .saludo} </p>
    </div>
)

export default Home