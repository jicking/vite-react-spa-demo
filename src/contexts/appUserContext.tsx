import { ReactNode, useState, createContext, FC } from 'react'

type AppUserContextProps = {
  username?: string
  signin: (username: string, callback: VoidFunction | undefined) => void
  signout: (callback: VoidFunction | undefined) => void
}

export const AppUserContext = createContext<AppUserContextProps>({
  username: undefined,
  signin: () => {},
  signout: () => {},
})

interface AppProviderProps {
  children: ReactNode
}

export const AppUserProvider: FC<AppProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string | undefined>()

  const signin = (username: string, callback: VoidFunction | undefined) => {
    setUsername(username)
    if (callback) callback()
  }

  const signout = (callback: VoidFunction | undefined) => {
    setUsername(undefined)
    if (callback) callback()
  }

  return (
    <AppUserContext.Provider value={{ username, signin, signout }}>
      {children}
    </AppUserContext.Provider>
  )
}
