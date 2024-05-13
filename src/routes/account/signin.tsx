import { useAppUser } from "../../hooks/useAppUser"
import { Navigate } from "react-router-dom"

export function Signin() {
  const { username, signin } = useAppUser()

  if (username) {
    return <Navigate to="/account" />
  }

  return (
    <article className="content">
      <h1>Signin</h1>
      <button
        onClick={() => {
          signin('testUser')
        }}
      >
        Signin
      </button>

      {/* <form action="login.php" method="post">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <input className="btn" type="submit" value="Signin" />
      </form> */}
    </article>
  )
}
