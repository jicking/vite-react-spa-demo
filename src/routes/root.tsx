import { Outlet, Link } from 'react-router-dom'

export function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`contacts/1`}>Your Name</Link>
          </li>
          <li>
            <Link to={`contacts/2`}>Your Friend</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
