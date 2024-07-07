import { createHashRouter } from 'react-router-dom'
import { DefaultPageLayout } from './layouts/defaultPageLayout'
import { ErrorPage } from './routes/error'
import { Index } from './routes'
import { About } from './routes/about'
import { Demo } from './routes/demo'
import { Signin } from './routes/account/signin'
import { Dashboard } from './routes/app/dashboard'
import RequireAuth from './components/requireAuth'
import { ROUTE_PATHS } from './utils/constants'

export const router = createHashRouter([
  {
    path: '/',
    element: <DefaultPageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTE_PATHS.homePage,
        element: <Index />,
      },
      {
        path: ROUTE_PATHS.aboutPage,
        element: <About />,
      },
      {
        path: ROUTE_PATHS.demoPage,
        element: <Demo />,
      },
      {
        path: ROUTE_PATHS.accountSigninPage,
        element: <Signin />,
      },
      {
        path: ROUTE_PATHS.account,
        element: <RequireAuth />,
        children: [
          {
            path: ROUTE_PATHS.accountPage,
            element: <Signin />,
          },
        ],
      },
      {
        path: ROUTE_PATHS.app,
        element: <RequireAuth />,
        children: [
          {
            path: ROUTE_PATHS.appDashboardPage,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
])
