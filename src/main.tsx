import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Root } from './routes/root'
import { ErrorPage } from './routes/error'
import { About } from './routes/about'
import { Index } from './routes'
import { Account } from './routes/account'
import { Signin } from './routes/account/signin'
import { Demo } from './routes/demo'
import { AppUserProvider } from './contexts/appUserContext'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/demo',
        element: <Demo />,
      },
      {
        path: '/account',
        children: [
          {
            path: '/account',
            element: <Account />,
          },
          {
            path: '/account/signin',
            element: <Signin />,
          },
          {
            path: '/account/signout',
            element: <Signin />,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppUserProvider>
      <RouterProvider router={router} />
    </AppUserProvider>
  </React.StrictMode>,
)
