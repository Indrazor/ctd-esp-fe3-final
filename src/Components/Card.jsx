import { Link } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context";

const Card = ({ item }) => {
  const { name, username } = item;
  const { state, dispatch } = useGlobalContext();

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
          onClick={() => dispatch({type: "ADD_FAVS", payload: item})}>
          ⭐
        </button>
      </div>
    </>
  );
};

export default Card;
