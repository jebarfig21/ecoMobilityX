import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import Vehiculos from './Vehiculos';
import  RegistroUsuario from './RegistroUsuario';
import  InicioSesion from './InicioSesionUsuario';
import  Carrito from './Carrito';
import Footer from './Footer'
import axios from 'axios';

function Main() {
    const [vistaActual, setVistaActual] = useState('vehiculos');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    
    const handleLogout = () => {
      // Borrar el token de autenticación del localStorage
      localStorage.removeItem('token');
      // Eliminar los encabezados de autorización y otros encabezados personalizados de Axios
      delete axios.defaults.headers.common['Authorization'];
      delete axios.defaults.headers.common['X-Form'];
      alert("Sesion cerrada")
      window.location.reload();
  };

    const cambiarVista = (vista) => {
        setVistaActual(vista);
      };

      /*Obtener el token JWT desde localStorage o cualquier otro método*/
      useEffect(() => {
        const tokenFromStorage = localStorage.getItem('token');
        if (tokenFromStorage) {
          setToken(tokenFromStorage);
        }
      }, []);

      /*Crear instancia de axios global para toda la aplicacion*/ 
      const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {
          'Authorization': `Bearer ${token}`,
          'x-auth-token': token, // Agregar el encabezado x-auth-token aquí
          'Content-Type': 'application/json',
        },
      });

    /*useEffect(() => {
        // Verificar si Axios tiene un token
        const token = axios.defaults.headers.common["Authorization"];
        if (token) {
          setIsLoggedIn(true); // Si hay un token, establecer isLoggedIn a true
        } else {
          setIsLoggedIn(false); // Si no hay un token, establecer isLoggedIn a false
        }
      }, []);*/
      useEffect(() => {
        // Verificar el token al cargar el componente
        const verificarToken = async () => {
          if(token){
          try {
            // Realizar solicitud GET a localhost:5000/verify con el encabezado de autorización
            const response = await axiosInstance.get("http://localhost:5000/users/verify");
            if (response.status === 200) {
              setIsLoggedIn(true); // Si el código de estado es 200, establecer isLoggedIn a true
            } else {
              setIsLoggedIn(false); // Si el código de estado no es 200, establecer isLoggedIn a false
            }
          } catch (error) {
            setIsLoggedIn(false); // Manejar errores y establecer isLoggedIn a false en caso de error
          }
        };
        }
    
        verificarToken(); // Llamar a la función para verificar el token
      }, [axiosInstance,token]); 
    return(
    <div>
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} cambiarVista={cambiarVista} /> 
    <br/>
    {vistaActual === 'vehiculos' && <Vehiculos isLoggedIn={isLoggedIn} axiosInstance={axiosInstance}/>}
    {vistaActual === 'registrate' &&  <RegistroUsuario/>}
    {vistaActual === 'inicioSesion' && <InicioSesion setToken={setToken}/>}
    {vistaActual === 'carrito' && <Carrito isLoggedIn={isLoggedIn} axiosInstance={axiosInstance}/>}
    {vistaActual === 'pedidos' && <Carrito axiosInstance={axiosInstance}/>}
    <br/>
    <Footer/>
    </div>
    );
}

export default Main;