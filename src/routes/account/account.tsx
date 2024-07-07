import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { toPascalCase } from '../../utils/string'
import { ROUTE_PATHS } from '../../utils/constants'

export const Account = () => {
  const { username, signout } = useAuth()
  const navigate = useNavigate()

  return (
    <article className="content">
      <h1>{toPascalCase(username || '')}'s Account</h1>
      <p>
        Add Account Settings/Details Here...
      </p>
      <button
        onClick={() => signout(() => navigate(ROUTE_PATHS.accountSigninPage))}
      >
        Signout
      </button>
    </article>
  )
}
