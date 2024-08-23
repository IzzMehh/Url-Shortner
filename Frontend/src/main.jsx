import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { Home, Analytics, Redirect } from './pages/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/analytics/:customUrlParams" element={<Analytics />} />
      </Route>
      <Route path='/:customUrl' element={<Redirect />} />
    </>


  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
