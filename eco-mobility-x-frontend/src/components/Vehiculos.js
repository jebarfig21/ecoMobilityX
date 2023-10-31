import '../styles/Vehiculos.css'; // Importa el archivo de estilos para el Navbar

import React from 'react';

const VehiculoItem = ({ nombre, descripcion, precio, imagenUrl }) => {
  return (
    <div className="contenedor">
      <div className="contenido">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>Precio: ${precio}</p>
        <button className="botonAgregar">Agregar al Carrito</button>
      </div>
      <div className="imagen">
        <img src={imagenUrl} alt={nombre} />
      </div>
    </div>
  );
};


export default VehiculoItem;


