import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Footer, Header } from './constants/components/index.jsx'
import { Contact, Home, News, Podcast, Resource } from './pages/index.jsx'
import { Provider, useDispatch } from 'react-redux';
import store from './store/store.js'
import authService from './appwrite/auth.js';
import { login, logout } from './store/authSlice.js'

const Layout = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return !loading ? <>
    <Header />
    <Outlet />
    <Footer />
  </> :
    <h2 className='font-kumbh text-3xl text-center text-gray-60'>Loading......</h2>
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
