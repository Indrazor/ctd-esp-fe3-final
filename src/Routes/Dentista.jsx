import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dentista = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/" + params.id).then(
      (res) => setUser(res.data)
    );
  }, []);

  return (
    <div className="card">
      <img className="card" src="/public/images/doctor.jpg" alt="doc" />
      <h3>{user.name}</h3>
      <h4>{user.username}</h4>
      <button>⭐</button>
    </div>
  );
};

export default Dentista;
