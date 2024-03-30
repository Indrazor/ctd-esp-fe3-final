export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LIST":
      return { ...state, list: action.payload };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DEL_FAVS":
      return {
        ...state,
        favs: state.favs.filter((fav) => fav !== action.payload),
      };
    case "THEME":
      return { ...state, theme: state.theme === "" ? "dark" : "" };
    default:
      throw new Error();
  }
};
