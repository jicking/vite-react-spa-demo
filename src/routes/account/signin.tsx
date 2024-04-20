export function Signin() {
  return (
    <article className="content">
      <h1>Signin</h1>
      <form action="login.php" method="post">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <input className="btn" type="submit" value="Signin" />
      </form>
    </article>
  )
}
