import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { name, username } = item;
  return (
    <>
      <div className="card">
        <Link to={"/dentista/" + item.id}>
          <img className="card-img" src="public/images/doctor.jpg" alt="Doc" />
        </Link>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <button className="favButton">⭐</button>
      </div>
    </>
  );
};

export default Card;
