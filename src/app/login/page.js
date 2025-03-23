"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // ✅ Fix: Declare success state
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false); // Reset success state before login attempt

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("data",data.token);
      if (!res.ok) {
        setError(data.message);
      } else {
         // Store user info
        //setSuccess(true); // ✅ Success message

        router.push("/dashboard"); // Navigate after 1.5 seconds
        // setTimeout(() => {
        // }, 1500);
        return response;
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#080710]">
      {/* Background Circles */}
      <div className="absolute w-[430px] h-[520px]">
        <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#1845ad] to-[#23a2f6] -top-20 -left-20"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-[#ff512f] to-[#f09819] -bottom-20 -right-10"></div>
      </div>

      {/* Login Form */}
      <div className="relative w-96 p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          Login Here
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && (
          <div className="text-green-500 text-center mt-2">
            ✅ Login Successful! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full mt-1 p-3 bg-white/20 text-white placeholder-gray-300 rounded-md focus:outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full mt-1 p-3 bg-white/20 text-white placeholder-gray-300 rounded-md focus:outline-none"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-white text-[#080710] py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-6 text-center text-white">Or login with</div>
        <div className="mt-4">
          <button className="w-full flex items-center justify-center bg-white/20 text-white py-2 rounded-md hover:bg-white/30 transition duration-300">
            <i className="fab fa-google mr-2"></i> Continue with Google
          </button>
        </div>

        {/* Create New Account */}
        <div className="mt-6 text-center text-white">
          New user?{" "}
          <button
            onClick={() => router.push("/register")}
            className="text-blue-400 hover:underline"
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}
