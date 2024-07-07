import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/index.css'
import { AppUserProvider } from './contexts/appUserContext'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppUserProvider>
      <RouterProvider router={router} />
    </AppUserProvider>
  </React.StrictMode>,
)
