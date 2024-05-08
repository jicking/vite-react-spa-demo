import React, { ReactNode, useState } from 'react'

type UserContextProps = {
  username: string | undefined
  signin: (username: string) => void
  signout: () => void
}

export const AppContext = React.createContext<UserContextProps>({})

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const [username, setUsername] = useState<string | undefined>(undefined)

  const signin = (username: string) => {
    setUsername(username)
  }

  const signout = () => {
    setUsername(undefined)
  }

  return (
    <AppContext.Provider value={{ username, signin, signout }}>
      {children}
    </AppContext.Provider>
  )
}

