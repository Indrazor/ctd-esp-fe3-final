export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LIST":
      return { ...state, list: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DEL_FAVS":
    //   const filteredFavs = state.favs.filter(
    //     (fav) => fav.id !== action.payload
    //   );
      return { ...state, favs: filteredFavs };
    case "THEME":
      return { ...state, theme: state.theme === "" ? "dark" : "" };
    //   return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error();
  }
};
