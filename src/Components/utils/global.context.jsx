import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    favs: [],
    list: [],
  });

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setState({ ...state, list: res.data })
    );
  }, []);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
export const useGlobalContext = () => useContext(GlobalContext);
