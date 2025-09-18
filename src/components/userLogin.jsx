import { React, useState} from 'react';
import { supabase } from '../supabase/supabaseClient';

export default function UserLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) setError(error.message)
  }

  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-br from-[#00a7ff] to-[#ffffff] items-center justify-center p-4">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-center text-[#00a7ff]">
            Hospital Management System
          </h1>
          <p className="mt-2 text-gray-500 text-center">
            Silakan login untuk melanjutkan
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email atau email"
                className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00a7ff] focus:border-[#00a7ff]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00a7ff] focus:border-[#00a7ff]"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-[#00a7ff] border-gray-300 rounded focus:ring-[#00a7ff]"
                />
                <span className="text-gray-600">Ingat saya</span>
              </label>
              <a href="#" className="text-[#00a7ff] hover:underline">
                Lupa password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#00a7ff] text-white py-2 rounded-lg font-semibold hover:bg-[#0090db] transition"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            © 2025 Hospital Management System
          </p>
        </form>
      </div>
    </>
  );
}
