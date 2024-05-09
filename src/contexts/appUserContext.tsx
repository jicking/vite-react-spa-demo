import React, { ReactNode, useState } from 'react'

type AppUserContextProps = {
  username: string | undefined
  signin: (username: string) => void
  signout: () => void
}

export const AppUserContext = React.createContext<AppUserContextProps>({})

interface AppProviderProps {
  children: ReactNode
}

export function AppUserProvider({ children }: AppProviderProps) {
  const [username, setUsername] = useState<string | undefined>(undefined)

  const signin = (username: string) => {
    setUsername(username)
  }

  const signout = () => {
    setUsername(undefined)
  }

  return (
    <AppUserContext.Provider value={{ username, signin, signout }}>
      {children}
    </AppUserContext.Provider>
  )
}

