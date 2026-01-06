import React from "react"; 
import { useState } from "react"; 

function Entrenamiento1 ({nombre, apellidos, edad, imagen}){
    const [edadActual, setEdadActual] = useState(edad)
    return (
        <div style={{
            backgroundColor: "red",
            color: "white",
            width: "20rem",
            padding: "1rem",
            borderRadius: "0.6rem",
            position: "relative",
        
        }}>
            <img src={imagen} alt="perro" style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                position: "absolute",
                top: "0.6rem",
                right: "0.6rem" 
            }}
            />
            <h2 style={{ textAlign: "left"}} >{nombre}{apellidos}</h2>

            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
            }}
            >
                <p style={{margin: 0}} >Edad: {edadActual}</p>
                <button
                    onClick={() => setEdadActual(edadActual - 1)}
                    style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: "0.3rem",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    -
                </button>
            </div>
        </div>
    );

}

export default Entrenamiento1