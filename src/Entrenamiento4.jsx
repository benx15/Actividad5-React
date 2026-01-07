import { useState } from "react";
import Entrenamiento4hijo from "./Entrenamiento4hijo";


function Entrenamiento4(){

    const [contador, setContador] = useState(0);

    const incrementarContador = () =>{
        setContador(contador + 1);
    };

    return(
        <div>
            <h2>Contador: {contador}</h2>
            <Entrenamiento4hijo onIncremetar={incrementarContador}/>
        </div>
    )

}

export default Entrenamiento4;