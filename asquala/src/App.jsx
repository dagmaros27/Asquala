import React from 'react'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import "react-router-dom"
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  }
])

const login = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  }
])
const signup = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  }
])



const App = () => {
  return (
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App