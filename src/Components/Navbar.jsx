import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useGlobalContext } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();
  return (
    <div className="nav">
      <h1>
        <span>D</span>H Odonto
      </h1>
      <nav>
        <Link to={routes.home}>Home</Link>
        <Link to={routes.contacto}>Contacto</Link>
        <Link to={routes.favs}>Destacados</Link>
        <button
          className="themeButton"
          onClick={() => dispatch({ type: "THEME" })}
        >
          {state.theme === "" ? "Modo 🌙" : "Modo ☀️"}
        </button>
      </nav>
    </div>
  );
};
export default Navbar;
