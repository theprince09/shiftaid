"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter(); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("user");
        
        // Ensure storedUser is not null or "undefined" before parsing
        if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
          setUser(JSON.parse(storedUser));
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        setUser(null);
      }
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setUser(null); // Clear user state
    router.push("/"); // Redirect to home
  };


  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl px-8 py-4 flex justify-start items-center space-x-150">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-blue-600">ShiftAid</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-25">
            {["Home", "Features", "About", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-700 text-lg font-medium hover:text-blue-500 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Login/Signup Button */}
          <button
            className="bg-blue-600 rounded-[400px] text-white h-16 w-16 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 "
            onClick={() => router.push("/login")}// Navigate to /login
            >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
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
          {["Home", "Features", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="text-gray-700 text-lg font-medium hover:text-blue-500 transition duration-300">
              {item}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Login / Signup
          </button>
        </div>
      )}
    </nav>
  );
}
