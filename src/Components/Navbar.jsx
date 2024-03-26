import { Link, useNavigate } from "react-router-dom";
import { routes } from "./utils/routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <button onClick={() => navigate(-1)}>Back</button>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contacto}>Contacto</Link>
      <Link to={routes.favs}>Destacados</Link>
      <Link to={routes.dentista}>Detalle del dentista</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  );
};
    // - [Página 1: Inicio (/home)](#pagina-1-inicio-home)
    // - [Página 2: Contacto (/contact)](#pagina-2-contacto)
    // - [Página 3: Detalle del dentista (/dentist/:id)](#pagina-3-detalle-del-dentista)
    // - [Página 4: Destacados (/favs)](#pagina-4-destacados)
export default Navbar;
