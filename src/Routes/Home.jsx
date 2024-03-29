
import Card from "../Components/Card";
import { useFavsStates } from "./Context";

const Home = () => {
  const { state } = useFavsStates();

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
