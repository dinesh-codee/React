// import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  },
  {
    path: '/about',
    element: 
    <div>
      <div>
      <Navbar></Navbar>
      <About></About>
    </div>
    </div>
  },
  {
    path: '/dashboard',
    element: 
    <div>
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </div>
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
