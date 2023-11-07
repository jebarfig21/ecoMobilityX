import React from 'react';
import '../styles/Navbar.css'; // Importa el archivo de estilos para el Navbar


function NavBar({onLogout ,isLoggedIn, cambiarVista}) {
    return (
        <div className="navbar">
        <div className="navbar-logo">
          <img src="https://firebasestorage.googleapis.com/v0/b/eco-mobility-x.appspot.com/o/ECO-MOBILITY-X%20(1).png?alt=media&token=c2f58ed1-1e30-4f13-a398-e8c4dcfe4438&_gl=1*vivfvk*_ga*NTM5ODc3MjMxLjE2OTQ5NDI5OTE.*_ga_CW55HF8NVT*MTY5ODg3NDI4NC40NS4xLjE2OTg4NzQ5NjUuNjAuMC4w" alt="Logo" />
        </div>
        <div className="navbar-buttons">
          <button className="navbar-button" onClick={() => cambiarVista('vehiculos')}>Vehículos</button>
          {!isLoggedIn ? (
            <>
            <button className="navbar-button" onClick={() => cambiarVista('inicioSesion')}>Inicia Sesión</button>
            <button className="navbar-button" onClick={() => cambiarVista('registrate')}>Regístrate</button>       
            </>
            ) : (
            <>
              <button className="navbar-button" onClick={() => cambiarVista('carrito')}>Mi Carrito</button>
              <button className="navbar-button" onClick={() => cambiarVista('pedidos')}>Mis Pedidos</button>
              <button className="navbar-button"onClick={onLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    );
  }

export default NavBar;
