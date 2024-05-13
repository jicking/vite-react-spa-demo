import { useAppUser } from "../../hooks/useAppUser"
import { Navigate } from "react-router-dom"

export function Account() {
  const { username, signout } = useAppUser()

  if (!username) {
    return <Navigate to="/account/signin" />
  }

  return (
    <article className="content">
      <h1>Account</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <button onClick={signout}>Signout</button>
    </article>
  )
}
