
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useGlobalContext();

  return (
    <>
      <h1>Odontólogos</h1>
      <div className="card-grid">
        {state.list.map((user) => (
          <Card key={user.id} item={user} />
        ))}
      </div>
    </>
  );
};

export default Home;
