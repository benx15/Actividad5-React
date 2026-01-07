import { useState } from "react";

function Entrebnamiento5(){
    const [filtro, setFiltro ] = useState(""); 
    const [precioMaximo, setPrecioMaximo] = useState(""); 
    const productos = [
        { nombre: "Portátil", precio: 900 },
        { nombre: "Pelota", precio: 20 },
        { nombre: "Pantalón", precio: 35 },
        { nombre: "Consola", precio: 379 },
        { nombre: "Auriculares", precio: 80 },
    ];

    const productosFiltrados = productos.filter((producto) => {
        const coincideTexto = producto.nombre
        .toLowerCase()
        .includes(filtro.toLowerCase());

        const coincidePrecio =
        precioMaximo === "" || producto.precio <= Number(precioMaximo);

        return coincideTexto && coincidePrecio;
    });    

  return (
        <div className="container">
            <h2>Lista de productos</h2>

            <input
                type="text"
                placeholder="Filtrar por nombre"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />

            <input
                type="number"
                placeholder="Precio máximo"
                value={precioMaximo}
                onChange={(e) => setPrecioMaximo(e.target.value)}
            />

            <ul>
                {productosFiltrados.map((producto, index) => (
                <li key={index}>
                    {producto.nombre} - {producto.precio} €
                </li>
                ))}
            </ul>
        </div>
    );

}

export default Entrebnamiento5;