import CardtWidget from "../CartWidget/CartWidget"

function NavBar({componente}){
    return(

        <>
         <nav>
            <ul>
                <li>Home</li>
                <li>Zapatos</li>
                <li>Botas</li>
            </ul>
        </nav>
        <CardtWidget/>
        </>

    )
}

export default NavBar