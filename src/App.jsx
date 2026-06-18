import { createBrowserRouter, RouterProvider } from 'react-router'
import  AuthContext  from './components/AuthContext'
import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/Registerpage'
const router = createBrowserRouter([
  {
    path: '/homepage', 
    element: <HomePage/> 
},
{
    path: '/loginpage',
    element: <LoginPage/>,
  },
  {
    path: '/',
    element: <RegisterPage/>

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