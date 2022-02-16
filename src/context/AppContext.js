import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleDate=()=>{
      setStartDate(prev=>setStartDate(prev))
  };

  return <AppContext.Provider value={{handleDate,startDate}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
