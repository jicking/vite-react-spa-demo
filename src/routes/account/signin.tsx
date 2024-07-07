import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '../../utils/constants'

export const Signin = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const auth = useAuth()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    auth.signin(username, () => {
      navigate(ROUTE_PATHS.appDashboardPage)
    })
  }

  return (
    <article>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <button type="submit">Signin</button>
      </form>
    </article>
  )
}
