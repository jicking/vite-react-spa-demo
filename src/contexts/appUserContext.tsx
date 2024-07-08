import { ReactNode, useState, createContext, FC, useEffect } from 'react'
import Cookies from 'js-cookie'
import { APP, COOKIE_KEYS, LOCALSTORAGE_KEYS } from '../utils/constants'

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

  useEffect(() => {
    const savedUsername = localStorage.getItem(LOCALSTORAGE_KEYS.username)
    if (savedUsername) {
      setUsername(savedUsername)
    }
  }, [])

  const signin = (username: string, callback: VoidFunction | undefined) => {
    localStorage.setItem(LOCALSTORAGE_KEYS.username, username)
    setUsername(username)

    // Save token securely, save `username` as example
    // handle de auth on http request interceptor
    Cookies.set(COOKIE_KEYS.token, username, {
      // httpOnly: true, // Only set on server cookie response to prevent JavaScript access
      secure: APP.env === 'production', // Use secure cookies in production
      sameSite: 'Strict', // Mitigate CSRF attacks
    })

    if (callback) callback()
  }

  const signout = (callback: VoidFunction | undefined) => {
    setUsername(undefined)
    localStorage.removeItem(LOCALSTORAGE_KEYS.username)

    Cookies.remove(COOKIE_KEYS.token)

    if (callback) callback()
  }

  return (
    <AppUserContext.Provider value={{ username, signin, signout }}>
      {children}
    </AppUserContext.Provider>
  )
}
