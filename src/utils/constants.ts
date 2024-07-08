export const APP = {
  name: import.meta.env.VITE_NODE_APP_NAME,
  version: import.meta.env.VITE_NODE_APP_VERSION,
  env: import.meta.env.VITE_NODE_ENV,
}

export const ROUTE_PATHS = {
  homePage: '/',
  aboutPage: '/about',
  account: '/account',
  accountPage: '/account',
  accountSigninPage: '/account/signin',
  app: '/app',
  appDashboardPage: '/app',
  demos: '/demos',
  demosSimpleComponentPage: '/demos/simple-component',
}

export const COOKIE_KEYS = {
  token: `${APP.name}-token`,
}

export const LOCALSTORAGE_KEYS = {
  username: `${APP.name}-username`,
}
