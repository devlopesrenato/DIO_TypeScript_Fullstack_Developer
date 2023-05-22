import { createContext, useEffect, useState } from "react";
import { api } from "../api";
import { login } from "../services/login";
import { getAllLocalStorage } from "../services/storage";

interface UserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

interface IAppContext {
  user: UserData | null,
  setUser: (user: UserData) => void,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void,
  loadingData: boolean,
  setLoadingData: (loadingData: boolean) => void
}

interface IDIoBank {
  login: boolean;
  userData?: {
    email: string
    password: string
  }
}


export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [loadingData, setLoadingData] = useState<boolean>(true)
  const [user, setUser] = useState<UserData | null>(null)

  const verifyLogin = async () => {
    setLoadingData(true)
    setIsLoggedIn(false)
    const isAuthenticated = async () => {
      const userData = getAllLocalStorage()
      if (userData) {
        const data: IDIoBank = JSON.parse(userData)
        const email = data.userData?.email
        const password = data.userData?.password
        if (email && password) {
          const isUserValid = await login(email, password)
          if (isUserValid) {
            return true
          }
          return false
        }
        return false
      }
    }

    if (await isAuthenticated()) {
      setLoadingData(false)
      setIsLoggedIn(true)
      const userData: UserData | null = await api;
      setUser(userData)
    } else {
      setLoadingData(false)
      setIsLoggedIn(false)      
    }
  }



  useEffect(() => {
    verifyLogin()
  }, [])


  return (
    <AppContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, loadingData, setLoadingData }}>
      {children}
    </AppContext.Provider>
  )
}
