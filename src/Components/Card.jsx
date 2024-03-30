import { Link } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context";

const Card = ({ item }) => {
  const { name, username } = item;
  const { state, dispatch } = useGlobalContext();


  localStorage.setItem("favs", JSON.stringify(state.favs));

   const findDentista = state.favs.some((fav) => fav.id === item.id);

   const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (!findDentista) {
      dispatch({ type: "ADD_FAVS", payload: item });
      alert('Usuario agregado a favoritos');
    } else {
      dispatch({ type: "DEL_FAVS", payload: item });
      alert('Usuario eliminado de favoritos');
    }
  }

  return (
    <>
      <div className="card">
        <Link to={"/dentista/" + item.id}>
          <img className="card-img" src="public/images/doctor.jpg" alt="Doc" />
        </Link>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <button
          className="favButton"
          onClick={addFav}>
          {findDentista ? '🌟' : '⭐'}
        </button>
      </div>
    </>
  );
};

export default Card;
