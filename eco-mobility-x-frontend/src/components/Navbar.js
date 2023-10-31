import React from 'react';
import '../styles/Navbar.css'; // Importa el archivo de estilos para el Navbar


function NavBar({isLoggedIn}) {
    return (
        <div className="navbar">
        <div className="navbar-logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="navbar-buttons">
          <button className="navbar-button">Vehículos</button>
          <button className="navbar-button">Regístrate</button>
          {!isLoggedIn ? (
            <button className="navbar-button">Inicia Sesión</button>
          ) : (
            <>
              <button className="navbar-button">Mi Carrito</button>
              <button className="navbar-button">Mis Pedidos</button>
            </>
          )}
        </div>
      </div>
    );
  }

export default NavBar;
