import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dentista = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/" + params.id).then(
      (res) => setUser(res.data)
    );
  }, []);

  return (
    <div>
      <h1>Detalle - {user.name}</h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
        </tr>
      </table>
    </div>
  );
};

export default Dentista;
