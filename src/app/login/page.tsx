"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      router.push("/marketplace");
    }, 1500);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#020213" }}
    >
      <div
        className="rounded-2xl p-10 w-full max-w-md"
        style={{ backgroundColor: "#0b085d" }}
      >
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/nexa.png"
            alt="Nexa Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
          <h1 className="text-white text-2xl font-bold mt-4">
            Welcome Back 👋
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Log in to access your marketplace dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg text-white text-sm outline-none"
              style={{ backgroundColor: "#1a1670" }}
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-2 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg text-white text-sm outline-none"
              style={{ backgroundColor: "#1a1670" }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold transition-all"
            style={{
              backgroundColor: loading ? "#1a1670" : "#120aff",
              color: "#fff",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-gray-400 text-xs text-center mt-6">
          Don’t have an account?{" "}
         <Link href="/signup" className="text-blue-400 hover:underline">
           Sign up
        </Link>
       </p>
      </div>
    </div>
  );
}