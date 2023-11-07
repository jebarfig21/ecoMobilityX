import React from 'react';
import '../styles/RegistroUsuario.css'; // Reutilizamos el mismo archivo de estilos
import axios from 'axios';

function InicioSesion({ setToken }){
//  const [token, setToken] = useState(""); // Estado para almacenar el token
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtiene los valores de los campos del formulario
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    // Verifica si los valores son válidos antes de enviar la solicitud
    if (correo && contrasena) {
      // Crea un objeto con los datos del formulario
      const data = {
        email: correo,
        password: contrasena,
      };

      // Realiza la solicitud POST al servidor utilizando Axios
      axios
        .post("http://localhost:5000/users/login", data)
        .then((response) => {
          // Maneja la respuesta del servidor aquí
          console.log("Inicio de sesión exitoso");
          // Almacena el token en el estado y en los encabezados de Axios
          const receivedToken = response.data.token;
          setToken(receivedToken);
          localStorage.setItem('token', receivedToken);
          window.location.reload();
        })
        .catch((error) => {
          // Maneja los errores de la solicitud aquí
          console.error("Error:", error);
          alert("Hubo un error al iniciar sesión")
        });
    } else {
      // Maneja la lógica si los campos del formulario no son válidos
      console.log("Por favor, complete todos los campos del formulario.");
      alert("Hubo un error en los campos del formulario")
       
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-formulario">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
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
