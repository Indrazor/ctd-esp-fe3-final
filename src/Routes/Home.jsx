import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setList(res.data)
    );
  }, []);

  return (
    <div className="card-grid">
      {list.map((user) => (
        <Card key={user.id} item={user} />
      ))}
    </div>
  );
};

export default Home;
