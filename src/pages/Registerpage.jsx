import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../components/Hooks"; // Sesuaikan path folder hook kamu

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  const [userList, setUserList] = useLocalStorage("users");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Semua field harus diisi!");
      return;
    }

    const isUsernameTaken = userList.find((user) => user.username === username);

    if (isUsernameTaken) {
      alert("Username sudah digunakan, silakan pilih username lain!");
      return;
    }
    const newUser = {
      fullname: fullname,
      username: username,
      password: password,
    };
    setUserList([...userList, newUser]);
    alert("Registrasi Berhasil! Silakan login.");
    navigate("/loginpage");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl bg-white p-8 rounded-none shadow-lg border border-black">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Register
        </h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-black">
              Username
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="masukkan nama lengkap anda"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full px-4 py-3 border border-black rounded-none outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-black">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Masukkan username baru"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-black rounded-none outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan password baru"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-black rounded-none outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-none font-semibold">
            Daftar
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Sudah punya akun?{" "}
          <span
            className="underline cursor-pointer font-semibold text-black"
            onClick={() => navigate("/login")}>
            Login di sini
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
