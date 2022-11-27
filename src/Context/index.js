import { createContext, useContext, useState } from "react";

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const value = {
    selectedCategory,
    setSelectedCategory,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
