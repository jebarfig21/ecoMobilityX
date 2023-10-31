import React from 'react';
import '../styles/RegistroUsuario.css';

const RegistroUsuario = () => {
  return (
    <div className="registro-container">
      <div className="registro-formulario">
        <h2>Registro de Usuario</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" id="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input type="text" className="form-control" id="apellido" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmarEmail">Confirmar Email</label>
            <input type="email" className="form-control" id="confirmarEmail" required />
          </div>
          <div className="form-group">
            <label htmlFor="calle">Dirección - Calle</label>
            <input type="text" className="form-control" id="calle" required />
          </div>
          {/* Agrega los demás campos de dirección aquí */}
          <button type="submit" className="btn-registrarse">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuario;
