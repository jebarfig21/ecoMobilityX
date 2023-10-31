import React from 'react';
import '../styles/RegistroUsuario.css'; // Reutilizamos el mismo archivo de estilos

const InicioSesion = () => {
  return (
    <div className="registro-container">
      <div className="registro-formulario">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico</label>
            <input type="email" className="form-control" id="correo" required />
          </div>
          <div className="form-group">
            <label htmlFor="contrasena">Contraseña</label>
            <input type="password" className="form-control" id="contrasena" required />
          </div>
          <button type="submit" className="btn-registrarse">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default InicioSesion;
