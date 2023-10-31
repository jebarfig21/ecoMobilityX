import NavBar from './Navbar';
import VehiculosItem from './Vehiculos';
import  RegistroUsuario from './RegistroUsuario';
import  InicioSesion from './InicioSesionUsuario';

function Main() {
    //const [vistaActual, setVistaActual] = useState('chelas');

    return(
    <div>
        <NavBar isLoggedIn={false} />
     <h1>
     <VehiculosItem  imagenUrl={"https://can-am.brp.com/content/dam/global/en/can-am-off-road/my23/photos/vehicle-lineup/atv/outlander/outlander-500-700/ORV-ATV-MY23-5-Can-Am-Outlander-STD-500-Granite-Gray-0001BPA00-34FR-NA.png"} nombre={"Caro super especial"} precio={5000} descripcion={"¡Bienvenido al futuro de la exploración todoterreno con el ATV Quantum X1! Diseñado para aquellos que buscan la máxima aventura en cualquier terreno, el Quantum X1 fusiona tecnología de vanguardia y diseño futurista para ofrecerte una experiencia de conducción inigualable."}/>
     </h1>
     <RegistroUsuario/>
    <br/>
    <InicioSesion/>
    </div>
    );
}

export default Main;