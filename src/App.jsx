import { createBrowserRouter, RouterProvider } from 'react-router'
import  AuthContext  from './context/AuthContext'
import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
const router = createBrowserRouter([
  {
    path: '/homepage', 
    element: <HomePage/> 
},
{
    path: '/',
    element: <LoginPage/>,
  }
])

export default function App() {
  const [auth, setAuth] = useState(null); 
  return (
    <AuthContext value={{auth, setAuth}}>
      <RouterProvider router={router}/>
    </AuthContext>
  )
}