import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { ROUTE_PATHS } from '../utils/constants'

const RequireAuth = () => {
  const auth = useAuth()

  return auth.username ? <Outlet /> : <Navigate to={ROUTE_PATHS.accountSigninPage} />
}

export default RequireAuth
