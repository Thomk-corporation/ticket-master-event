import { useState } from "react";


const Contador = ()=>{

    const [contador,setContador] = useState(0); 


    const aumentarContador = ()=>{
        setContador(contador + 1)
    }

    return (
    <div>
        <h1>Contador de clicks: {contador}</h1>
        <button onClick={aumentarContador} style={{backgroundColor: "gray"}}> Dame click</button>    
    </div>
)

}

export default Contador;