'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Nbackend here.
    // For now, i will fake it
    if (email && password) {
      router.push('/marketplace');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020213] text-white">
      <div className="bg-[#0b085d] p-8 rounded-xl w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Your Account</h1>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-[#1a1670] text-white focus:outline-none focus:ring-2 focus:ring-[#004CEB]"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              className="w-full px-4 py-2 rounded-lg bg-[#1a1670] text-white focus:outline-none focus:ring-2 focus:ring-[#004CEB]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#004CEB] hover:bg-[#003bbd] text-white py-2 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-[#00d4ff] hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}