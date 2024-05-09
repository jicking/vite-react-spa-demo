import { useContext } from "react"
import { AppUserContext } from "../contexts/appUserContext"

export function useAppUser() {
  const context = useContext(AppUserContext)
  if (context === undefined) {
    throw new Error('useApp must be used within a AppUserProvider')
  }
  return context
}
