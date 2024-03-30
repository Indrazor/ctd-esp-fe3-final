import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const GlobalContext = createContext();

const initialState = {
  list: [],
  dentist: [],
  favs: [],
  theme: "",
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      dispatch({ type: "GET_LIST", payload: res.data })
    );
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};




export default ContextProvider;
export const useGlobalContext = () => useContext(GlobalContext);
