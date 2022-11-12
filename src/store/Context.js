import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  return (
    <GlobalContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </GlobalContext.Provider>
  );
};
