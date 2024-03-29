import { Link, useNavigate } from "react-router-dom";
import { routes } from "./utils/routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <div className="nav">
      <h1>
        <span>D</span>H Odonto
      </h1>
      <nav>
        <Link to={routes.home}>Home</Link>
        <Link to={routes.contacto}>Contacto</Link>
        <Link to={routes.favs}>Destacados</Link>
        {/* <Link to={routes.dentista}>Detalle del dentista</Link> */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>Change theme</button>
      </nav>
      {/* <button className="backButton" onClick={() => navigate(-1)}>
        Volver a // boton para volver atras en el historial de navegacion
      </button> */}
    </div>
  );
};
export default Navbar;
