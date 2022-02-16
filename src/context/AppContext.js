import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
