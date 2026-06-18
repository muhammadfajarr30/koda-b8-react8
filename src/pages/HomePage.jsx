import React, { useContext } from 'react';
import  AuthContext  from '../context/AuthContext';

const HomePage = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
      <div className='flex items-center justify-center p-8 border border-black rounded-none shadow-lg max-w-md w-full'>
        <h1 className='font-bold text-2xl text-black text-center'>
          Selamat Datang,
          <span className="underline">
            {auth?.user ? auth.user.username : "Guest"}
          </span>!
        </h1>
      </div>
    </div>
  )
}

export default HomePage;