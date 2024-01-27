import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Footer, Header } from './constants/components/index.jsx'
import { Contact, Home, News, Podcast, Resource, Signup } from './pages/index.jsx'
import { Provider, useDispatch } from 'react-redux';
import store from './store/store.js'
import { Revolution } from "./pages/homePage/components"
const Layout = () => {

  return <>
    <Header />
    <Outlet />
    <Revolution />
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
        path: 'blogs',
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
    path: "/login",
    element: <Signup />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
