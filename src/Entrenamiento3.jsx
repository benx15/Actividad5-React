import { useState } from "react";

function Entrenamiento3(){

    const [nombre, setNombre]=useState("");
    const [correo, setCorreo]=useState("");
    const [password, setPassword]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!correo.includes("@")) {
            console.error("El correo debe contener un @");
            return;
        }
        const datosForm ={nombre,correo,password};
        console.log(datosForm);
    };
return (
    <div className="form-container">
      

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );

}

export default Entrenamiento3;