import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'


import { createBrowserRouter } from "react-router-dom";

import MainLayOut from './pages/MainLayOut';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import Details from './Coponents/Details';
import Error from './pages/Error';
import AuthProvider from './Hook/AuthProvider';
import Private from './Hook/private';





const MyRouter = createBrowserRouter([
  {
      path:'/',
      element:<MainLayOut></MainLayOut>,
      errorElement:<Error></Error>,
      children:[
          {
              path:'/',
              element:<Home></Home>,
              loader:()=>fetch('/data.json')
          },{
              path:'/about',
              element:<Private><About></About></Private>
  
          },{
              path:'/login',
              element:<Login></Login>
          },{
              path:'/signup',
              element:<Signup></Signup>
            },
            {
              path:'/data/:id',
              element:<Private><Details></Details></Private>,
              loader:()=>fetch('/public/data.json')
            },{
              path:'/contact',
              element:<Private><Contact></Contact></Private>
            }
      ]
  }
  
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={MyRouter}></RouterProvider>
    </AuthProvider>
   
  </React.StrictMode>,
)
