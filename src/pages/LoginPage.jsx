import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext" 


const users = [
  {
    username: "hihi",
    password: "cihuy",
  },
  {
    username: "haha",
    password: "ahoy",
  },
];

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext); 

  const handleLogin = (e) => {
    e.preventDefault();
    
    const existingUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (existingUser) {
      setAuth({
        statusActived: true,
        user: existingUser, 
      });
      navigate("/homepage");
    } else {
      alert("username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl bg-white p-8 rounded-none shadow-lg border border-black">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-black"
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              placeholder="masukan username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full px-4 py-3 border border-black rounded-none outline-none "
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-black rounded-none outline-none  "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-none font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;