import React from 'react';
import '../styles/RegistroUsuario.css';
import axios from 'axios';

const RegistroUsuario = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const confirmarEmail = document.getElementById("confirmarEmail").value;
    const password = document.getElementById("password").value;
    const calle = document.getElementById("calle").value;

    // Verifica si los valores son válidos antes de enviar la solicitud
    if (nombre && apellido && email && confirmarEmail && calle) {
      // Crea un objeto con los datos del formulario
      const data = {
        name: nombre,
        last_name: apellido,
        email: email,
        password: password, // Se asume que el password es constante según tu estructura
      };
      if (email !==confirmarEmail) {
        alert('El correo electrónico y la confirmación del correo deben ser iguales.');
        return;
      }
      // Realiza la solicitud POST al servidor utilizando Axios
      axios
        .post("http://localhost:5000/users/create", data)
        .then((response) => {
          // Maneja la respuesta del servidor aquí
          console.log(response.data);
          alert("Usuario Registrado Correctamente")
          window.location.reload();
        })
        .catch((error) => {
          // Maneja los errores de la solicitud aquí
          alert("Error en generación de usuario")
          console.error("Error:", error);
        });
    } else {
      // Maneja la lógica si los campos del formulario no son válidos
      alert("Completa los campos del formulario")
      console.log("Por favor, complete todos los campos del formulario.");
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-formulario">
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" required />
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
