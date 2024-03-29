import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const FavsStates = createContext();

const Context = ({ children }) => {
  const [state, setState]  = useState({
    
    favs:[],
    list:[]
  });
  // const [favs, setFavs] = useState([]);
  // const [list, setList] = useState([]);
  
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setState({...state, list: res.data})
    );
  }, []);

  return (
    <FavsStates.Provider value={{state, setState}}>
      {children}
    </FavsStates.Provider>
  );
};

export default Context;

export const useFavsStates = () => useContext(FavsStates);
