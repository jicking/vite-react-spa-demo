import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { toPascalCase } from '../../utils/string'
import { ROUTE_PATHS } from '../../utils/constants'

export const Dashboard = () => {
  const { username, signout } = useAuth()
  const navigate = useNavigate()

  return (
    <article className="content">
      <h1>{toPascalCase(username || '')}'s Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <button
        onClick={() => signout(() => navigate(ROUTE_PATHS.accountSigninPage))}
      >
        Signout
      </button>

      <h2>Demo Pages</h2>
      <nav>
        <ul>
          <li> Simple Component Template </li>
          <li> Page data using Loader </li>
          <li> Demo Actions </li>
          <li> Form Validation </li>
          <li> Form Submit using Data Fetcher </li>
          <li> Pull Dropdown items from 3rd party API </li>
          <li> Map Pins </li>
        </ul>
      </nav>
    </article>
  )
}
