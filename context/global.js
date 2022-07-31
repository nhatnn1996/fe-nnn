import React, { useContext } from "react";
export const GlobalContext = React.createContext();

const GlobalProvider = ({ children, data }) => {
  console.log(data);
  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const result = useContext(GlobalContext);
  return result;
};

export default GlobalProvider;
