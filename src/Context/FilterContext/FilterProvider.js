import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "./FilterReducer";
const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  const initialState = {
    applySearch: "",
    byPlatform: "",
    byStatus: "",
    byDays: "",
  };

  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);

  return (
    <filterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilterProvider = () => useContext(filterContext);
