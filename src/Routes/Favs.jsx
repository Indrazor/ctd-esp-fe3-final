import React from "react";
import { useFavsStates } from "./Context";
import Card from "../Components/Card";

const Favs = () => {
  const { favs } = useFavsStates();

  console.log(favs);
  return (
    <>
      <h1>Destacados</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((user) => (
          <Card key={user.id} item={user} />
        ))}
      </div>
    </>
  );
};

export default Favs;
