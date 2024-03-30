
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contacto from "./Routes/Contacto";
import Dentista from "./Routes/Dentista";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/utils/routes";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import { useGlobalContext } from "./Components/utils/global.context";

function App() {
  const { state } = useGlobalContext();
  return (
    <div className="App">
      <div className={state.theme} >
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.contacto} element={<Contacto />} />
        <Route path={routes.dentista} element={<Dentista />} />
        <Route
          path={routes.notFound}
          element={<h1>Ruta no encontrada...</h1>}
        />
      </Routes>
      <ScrollToTopButton />
      <Footer />
      </div>
    </div>
  );
}

export default App;
