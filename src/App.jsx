// import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'
import Course from './components/Course'
import Contact from './components/Contact'
import Services from './components/Services'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>,
    children:
      [{
        path: 'contact',
        element: <Contact></Contact>
      }]
  },
  {
    path: '/about',
    element:
      <div>
        <div>
          <Navbar></Navbar>
          <About></About>
        </div>
      </div>,
    children:
      [{
        path: 'services',
        element: <Services></Services>
      }]
  },
  {
    path: '/dashboard',
    element:
      <div>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
      </div>,
    children:
      [
        {
          path: 'course',
          element: <Course></Course>
        }
      ]
  },
  {
    path: '/navbar',
    element: <Navbar></Navbar>
  },
  {
    path: '*',
    element: <Notfound></Notfound>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
