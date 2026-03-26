import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import Root from './Pages/Root/Root.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <RouterProvider router={router}
    ></RouterProvider>
  </StrictMode>,
)
