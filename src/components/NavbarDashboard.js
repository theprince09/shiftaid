"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("user");
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

  return (
    <motion.nav 
      className="bg-white shadow-md fixed top-0 w-full z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl px-10 py-5 flex justify-start items-center space-x-150">
        <motion.h1 
          className="text-3xl font-extrabold text-blue-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          ShiftAid
        </motion.h1>

        <div className="hidden md:flex items-center space-x-15">
          <ul className="flex space-x-20">
            {["Home", "Features", "About", "Contact"].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
              >
                <Link href={item === "Home" ? "/dashboard" : `/${item.toLowerCase()}`}>
                  <span className="text-gray-700 text-lg font-medium hover:text-blue-500 transition duration-300 cursor-pointer">
                    {item}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="relative">
            <motion.button
              className="bg-red-600 rounded-full text-white h-8 w-8 text-lg font-semibold hover:bg-blue-700 transition duration-300 ml-15"
              onClick={() => setIsOpen(!isOpen)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              S
            </motion.button>
            {isOpen && (
              <motion.div
                className="absolute left-0 mt-2 w-40 bg-black border border-teal-300 shadow-lg rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  "My Profile", "Saved Places", "Booked History",
                  "Switch Account", "Log Out"
                ].map((option, idx) => (
                  <button 
                    key={option}
                    className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700"
                    onClick={() => option === "Switch Account" ? router.push("/login") : option === "Log Out" ? router.push("/") : null}
                  >
                    {option}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-md flex flex-col items-start p-4 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {["Home", "Features", "About", "Contact"].map((item, index) => (
            <motion.a 
              key={item} 
              href="#" 
              className="text-gray-700 text-lg font-medium hover:text-blue-500 transition duration-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button 
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Login / Signup
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
}
