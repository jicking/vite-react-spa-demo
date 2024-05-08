import { Outlet, Link } from 'react-router-dom'
import { useApp } from '../hooks/useApp'

export function Root() {
  const { username } = useApp()

  return (
    <>
      <div className="page-root">
        <header className="page-header">
          <div className="brand">
            Brand <span className="red">Logo</span>
          </div>

          <nav className="inline-link-container">
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`about`}>About</Link>
              </li>
              <li>
                <Link to={`demo`}>Demo</Link>
              </li>
              {username ? (
                <>
                  <li>
                    <Link to={`account`}>{`Hello ${username}`}</Link>
                  </li>
                  <li>
                    <button>Logout</button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to={`account/signin`} className="btn-link">
                    Signin
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </header>

        <main className="page-main">
          <Outlet />
        </main>

        <footer className="page-footer">© 2022 Brand - v1.0</footer>
      </div>
    </>
  )
}
