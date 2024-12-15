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
            <h1>Navbar</h1>
        </div>
    )   



    
}


export default Navbar;