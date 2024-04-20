import { Outlet, Link } from 'react-router-dom'

export function Root() {
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
                <Link to={`x`} className="btn-link">
                  CTA Button
                </Link>
              </li>
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
