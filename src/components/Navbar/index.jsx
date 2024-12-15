import { useState } from "react";


const Navbar = () => {

    const [value, setValue] = useState(0)


    setTimeout(() => {
        setValue(value + 1)
    }, 1000)


    if(value <2){
        return <div>Hola aun estoy cargando </div>
    }

    return (
        <div>
            {value < 4 ? <h1>Navbar</h1> : value < 6 ? <p>Lo siento no es lo que queria mostrar</p> : <h1>Bienvenido a la app</h1>}
        </div>
    )   



    
}


export default Navbar;