import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { ROUTE_PATHS } from '../utils/constants'

const RequireAuth = () => {
  const auth = useAuth()

  if (!auth.username) {
    return (
      <Navigate
        to={`${ROUTE_PATHS.accountSigninPage}?redirect=${encodeURIComponent(location.pathname)}`}
        replace
      />
    )
  }

  return <Outlet />
}

export default RequireAuth
