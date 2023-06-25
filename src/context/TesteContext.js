import { createContext, useState } from "react";
import { ListGeneral } from '../service/listgeneral';

export const Usercontext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(" teste ")
  const [tokenGoogle, setTokenGoogle] = useState("")
  const [loadingLogin, setLoadingLogin] = useState("")
  const [loadingGeneral, setLoadingGeneral] = useState(false)
  const [confirmCreate, setConfirmeCreate] = useState(false)
  const [listGeneralData, setListGeneralData] = useState([])
  const [filterMonth, setFilterMonth] = useState(6)
  const [user, setUser] = useState({
    email: "",
    picture: "https://img.freepik.com/vetores-gratis/astronauta-bonito-montando-foguete-e-acenando-a-mao-dos-desenhos-animados-icone-ilustracao-conceito-de-icone-de-tecnologia-cientifica_138676-2130.jpg?w=2000",
    name: "",
    id_google: "",
    locale: "",
    given_name: "",
    family_name: "",
  })

  async function fecthingLoading() {
    setLoadingGeneral(true)
    const responseListGeneral = await ListGeneral({ id_user: user._id })
    if (responseListGeneral.status === 201) {
      setListGeneralData(responseListGeneral.data)
    }
    setLoadingGeneral(false)
  }
  async function fecthingNotLoading() {
    const responseListGeneral = await ListGeneral({ id_user: user._id })
    if (responseListGeneral.status === 201) {
      setListGeneralData(responseListGeneral.data)
    }
  }
  return <Usercontext.Provider value={{
    token, setToken,
    tokenGoogle, setTokenGoogle,
    loadingLogin, setLoadingLogin,
    user, setUser,
    confirmCreate, setConfirmeCreate,
    fecthingLoading, fecthingNotLoading,
    listGeneralData, setListGeneralData,
    loadingGeneral, setLoadingGeneral,
    filterMonth, setFilterMonth
  }}>{children}</Usercontext.Provider>
};
