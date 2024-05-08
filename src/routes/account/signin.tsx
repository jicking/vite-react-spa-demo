import { useApp } from "../../hooks/useApp"

export function Signin() {
  const { username, signin, signout } = useApp()

  const signinView = <>
    <h1>Signin</h1>
    <button onClick={() => signin('testUser')}>Signin</button>
  </>

  const authenticatedView = (
    <>
      <h1>Welcome {username}</h1>
      <button onClick={signout}>Signout</button>
    </>
  )

  return (
    <article className="content">
      {username && authenticatedView}
      {!username && signinView}

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
