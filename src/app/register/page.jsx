"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    subscribe: true,
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message);
    } else {
      router.push("/login");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center background-radial-gradient">
      <div className="absolute w-[430px] h-[520px]">
        <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#44006b] to-[#ad1fff] -top-20 -left-20"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#44006b] to-[#ad1fff] -bottom-20 -right-10"></div>
      </div>

      <div className="relative w-96 p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">Create New Account</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-white text-sm font-medium">First Name</label>
              <input type="text" name="firstName" className="w-full p-3 bg-white/20 text-white placeholder-gray-300 rounded-md focus:outline-none" value={form.firstName} onChange={handleChange} required />
            </div>
            <div>
              <label className="text-white text-sm font-medium">Last Name</label>
              <input type="text" name="lastName" className="w-full p-3 bg-white/20 text-white placeholder-gray-300 rounded-md focus:outline-none" value={form.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div>
            <label className="text-white text-sm font-medium">Email Address</label>
            <input type="email" name="email" className="w-full p-3 bg-white/20 text-white placeholder-gray-300 rounded-md focus:outline-none" value={form.email} onChange={handleChange} required />
          </div>

          <div>
            <label className="text-white text-sm font-medium">Password</label>
            <input type="password" name="password" className="w-full p-3 bg-white/20 text-white placeholder-gray-300 rounded-md focus:outline-none" value={form.password} onChange={handleChange} required />
          </div>

          <div className="flex items-center">
            <input type="checkbox" name="subscribe" className="mr-2" checked={form.subscribe} onChange={() => setForm({ ...form, subscribe: !form.subscribe })} />
            <label className="text-white text-sm">Subscribe to our newsletter</label>
          </div>

          <button type="submit" className="w-full mt-4 bg-white text-[#080710] py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300">Sign Up</button>
        </form>

        <div className="mt-6 text-center text-white">
          Already have an account? <button onClick={() => router.push("/login")} className="text-blue-400 hover:underline">Log in</button>
        </div>
      </div>
    </section>
  );
}
