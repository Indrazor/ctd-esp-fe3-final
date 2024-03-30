
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useGlobalContext();
  return (
    <>
      <h1>Destacados</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((user) => (
          <Card key={user.id} item={user} />
        ))}
      </div>
    </>
  );
};

export default Favs;
