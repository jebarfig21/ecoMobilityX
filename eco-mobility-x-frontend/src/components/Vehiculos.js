import '../styles/Vehiculos.css'; // Importa el archivo de estilos para el Navbar
import React, { useState, useEffect } from 'react';


function Vehiculos({ axiosInstance,isLoggedIn }){
    const [data, setData] = useState(null);  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get('/products/');
          setData(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, [axiosInstance]); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez, equivalente a componentDidMount
   
    const agregarAlCarrito = async (idProducto) => {
      try {
        // Realiza la solicitud POST a '/carrito/producto' con el idProducto
        const response = await axiosInstance.post('/carrito/producto', {
          idProducto: idProducto,
          idCliente: "6542d3f2fcc5a85219cbb208"
        });
        // Manejar la respuesta si es necesario
        console.log('Producto agregado al carrito:', response.data);
      } catch (error) {
        // Manejar errores de la solicitud
        console.error('Error al agregar el producto al carrotototote:', error);
      }
    };
    
 
    return (
      <div>
  {data ? (
    // Renderiza los datos si se han obtenido correctamente
    <ul>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <VehiculoItem isLoggedIn={isLoggedIn} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} imagenUrl={item.imagen} itemId={item._id}  agregarAlCarrito={agregarAlCarrito}/>
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
  
const VehiculoItem = ({isLoggedIn, nombre, descripcion, precio, imagenUrl,  itemId, agregarAlCarrito}) => {
  return (
   
    <div className="contenedor">
      <div className="contenido">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>Precio: ${precio}</p>
        {isLoggedIn && <button className="botonAgregar" onClick={() => agregarAlCarrito(itemId)}>Agregar al Carrito</button>}
      </div>
      <div className="imagen">
        <img src={imagenUrl} alt={nombre} />
      </div>
      <br />
    </div>
    
     
  );
};


export default Vehiculos;

