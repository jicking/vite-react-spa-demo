import { Outlet, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { APP, ROUTE_PATHS } from '../utils/constants'

export function DefaultPageLayout() {
  const { username } = useAuth()

  return (
    <>
      <div className="page-root">
        <header className="page-header">
          <div className="brand">
            {APP.name} <span className="red">{APP.version}</span>
          </div>

          <nav className="inline-link-container">
            <ul>
              <li>
                <Link to={ROUTE_PATHS.homePage}>Home</Link>
              </li>
              <li>
                <Link to={ROUTE_PATHS.aboutPage}>About</Link>
              </li>
              <li>
                <Link to={ROUTE_PATHS.demoPage}>Demo</Link>
              </li>
              {username ? (
                <li>
                  <Link to={ROUTE_PATHS.appDashboardPage}>Dashboard</Link>
                </li>
              ) : (
                <li>
                  <Link to={ROUTE_PATHS.accountSigninPage} className="btn-link">
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

        <footer className="page-footer">
          © {new Date().getFullYear()} {APP.name} v{APP.version}
        </footer>
      </div>
    </>
  )
}