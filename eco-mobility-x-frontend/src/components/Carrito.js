import '../styles/Vehiculos.css'; // Importa el archivo de estilos para el Navbar
import React, { useState, useEffect } from 'react';

function Carrito({ axiosInstance,isLoggedIn }){

    const [data, setData] = useState(null);  
    useEffect(() => {
        if(isLoggedIn){
        const fetchData = async () => {
            try {
            const response = await axiosInstance.post('/carrito/');
            setData(response.data.productos);
            } catch (error) {
            console.error('Error:', error);
            }
        };
    
        fetchData();
        }else{
        }}, [axiosInstance,isLoggedIn]); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez, equivalente a componentDidMount
    
    return (
      <div>
  {data ? (
    // Renderiza los datos si se han obtenido correctamente
    <ul>
      {data.map((item, index) => (
        <React.Fragment key={index}>
            {console.log(item)}
          <VehiculoItem isLoggedIn={isLoggedIn} nombre={item.producto.nombre} descripcion={item.producto.descripcion} precio={item.producto.precio} imagenUrl={item.producto.imagen} />
          {index !== data.length - 1 && <br />} {/* Agrega un salto de línea si no es el último elemento */}
        </React.Fragment>
      ))}
    </ul>
  ) : (
    // Muestra un mensaje de carga mientras se obtienen los datos
    <p>Cargando datos...</p>
  )}
</div>
    );
  };
  const VehiculoItem = ({isLoggedIn, nombre, descripcion, precio, imagenUrl }) => {
    return (
     
      <div className="contenedor">
        <div className="contenido">
          <h2>{nombre}</h2>
          <p>{descripcion}</p>
          <p>Precio: ${precio}</p>
          {isLoggedIn && <button className="botonAgregar">Agregar al Carrito</button>}
        </div>
        <div className="imagen">
          <img src={imagenUrl} alt={nombre} />
        </div>
        <br />
      </div>
      
       
    );
  };
  
  export default Carrito;