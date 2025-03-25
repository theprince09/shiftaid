"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); 

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto  py-4 flex justify-between items-center">
        {/* Logo (Left Side) */}
        <h1 className="text-3xl font-extrabold text-blue-600">ShiftAid</h1>

        {/* Desktop Menu (Right Side) */}
        <div className="hidden md:flex items-center space-x-20">
          <a href="#" className="text-gray-700 text-lg font-medium hover:text-blue-500 transition duration-300">
            Contact
          </a>
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            onClick={() => router.push("/login")} // Navigate to /login
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-start p-4 space-y-4">
          <a href="#" className="text-gray-700 text-lg font-medium hover:text-blue-500 transition duration-300">
            Contact
          </a>
          <button 
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
