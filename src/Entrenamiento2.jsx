import { useState } from "react";

function Entrenamiento2(){
    const [tarea, setTarea]=useState("");
    const [tareas, setTareas] = useState([
        { texto: "Estudiar", realizada: false },
        { texto: "Leer", realizada: false },
        { texto: "Sacar al perro", realizada: false },
    ]);
    const añadirTarea = ()=>{
        if(tarea.trim() === "") return;
        setTareas([...tareas, {texto: tarea, realizada: false }]);
        setTarea("");
    };

    const toggleTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].realizada = !nuevasTareas[index].realizada;
        setTareas(nuevasTareas);
  };
    
    return (
    <div
      style={{
        width: "20rem",
        padding: "1rem",
        borderRadius: "0.6rem",
      }}
    >
      <h2 style={{ textAlign: "left"}}>Tareas pendientes</h2>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "1rem"
        }}
      >
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Nueva tarea"
          style={{ flex: 1 }}
        />
        <button onClick={añadirTarea}>Añadir</button>
      </div>

      <ul>
        {tareas.map((t, index) => (
            <li key={index}>
                {t.texto}
                <input type="checkbox" checked={t.realizada} onChange={()=>toggleTarea(index)}/>
            </li>
        ))}
      </ul>
    </div>
  );

}

export default Entrenamiento2;