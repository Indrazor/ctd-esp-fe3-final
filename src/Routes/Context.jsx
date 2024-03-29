import { createContext, useContext, useState } from "react";

const FavsStates = createContext();

const Context = ({ children }) => {
  const [favs, setFavs] = useState([]);
  return (
    <FavsStates.Provider value={{ favs, setFavs }}>
      {children}
    </FavsStates.Provider>
  );
};

export default Context;

export const useFavsStates = () => useContext(FavsStates);
