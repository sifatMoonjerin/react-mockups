import { createContext, useState } from 'react';

export type AuthUser = {
  username: string
  token: boolean
}

type AuthContextType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type AuthContextProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType | null>(null)


export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}