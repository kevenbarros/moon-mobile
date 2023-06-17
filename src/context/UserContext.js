import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [tokenTeste, setTokenTeste] = useState("")

  const changeToken = (targetPage) => {
    setTokenTeste(targetPage)
  }

  return <UserContext.Provider value={{ tokenTeste, setTokenTeste, changeToken }}>{children}</UserContext.Provider>;
};
