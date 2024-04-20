/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error: any = useRouteError()
  console.error(error)

  return (
    <article className="content">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </article>
  )
}
