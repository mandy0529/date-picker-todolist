import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";

const AppContext = React.createContext();

function getLocalStorage() {
  let items = localStorage.getItem("items");
  if (items) {
    return (items = JSON.parse(localStorage.getItem("items")));
  } else {
    return [];
  }
}

const AppProvider = ({ children }) => {
  const [items, setItems] = useState(getLocalStorage());
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dateFormat = dayjs(selectedDate).format("YYYY-MM-DD");

  const handleDate = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = { id: Math.random(), title: name, date: dateFormat };
    setItems([...items, newItems]);
    setName("");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleDelete = (id) => {
    const deletedItem = items.filter((item) => item.id !== id);
    setItems(deletedItem);
  };

  const handleClear = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        handleChange,
        setName,
        name,
        handleDate,
        selectedDate,
        items,
        handleDelete,
        handleClear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
