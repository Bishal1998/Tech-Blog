import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Footer, Header } from './constants/components/index.jsx'
import { Contact, Home, News, Podcast, Resource } from './pages/index.jsx'

const Layout = () => {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'podcasts',
        element: <Podcast />
      },
      {
        path: 'resources',
        element: <Resource />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
