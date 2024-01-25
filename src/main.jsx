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
import { Revolution } from "./pages/homePage/components"
import Signup from './pages/Signup/Signup.jsx'
import Login from './pages/Login/Login.jsx'

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
    <Revolution />
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
  }, {
    path: '/signup',
    element: <Signup />
  }, {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
