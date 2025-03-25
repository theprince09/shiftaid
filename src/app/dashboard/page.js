"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/NavbarDashboard";

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    
    useEffect(() => {
        fetch("/api/auth/me", {
            method: "GET",
            credentials: "include", // ✅ Ensures cookies are sent
        })
        .then((res) => res.json())
        .then((data) => {
            if (!data.user) {
                router.push("/login");
            } else {
                setUser(data.user); // ✅ Store user data
            }
        })
        .catch(() => {
            router.push("/login");
        });
    }, [router]);

    // Typing effect logic
    const cityNames = [
        "Bangalore", "Delhi", "Mumbai", "Chennai", "Pune",
        "Hyderabad", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow",
        "Surat", "Bhopal", "Chandigarh", "Visakhapatnam", "Indore",
        "Nagpur", "Patna", "Coimbatore", "Vadodara", "Ludhiana"
    ];
    
    const [placeholder, setPlaceholder] = useState("Enter city name...");
    const [typingIndex, setTypingIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [cityIndex, setCityIndex] = useState(0);

    useEffect(() => {
        const currentCity = cityNames[cityIndex];
        let timeout;

        if (!deleting && typingIndex <= currentCity.length) {
            timeout = setTimeout(() => {
                setPlaceholder(` ${currentCity.slice(0, typingIndex)}`);
                setTypingIndex(typingIndex + 1);
            }, 150);
        } 
        else if (!deleting && typingIndex > currentCity.length) {
            timeout = setTimeout(() => setDeleting(true), 1000);
        } 
        else if (deleting && typingIndex > 0) {
            timeout = setTimeout(() => {
                setPlaceholder(`${currentCity.slice(0, typingIndex - 1)}`);
                setTypingIndex(typingIndex - 1);
            }, 75);
        } 
        else if (deleting && typingIndex === 0) {
            timeout = setTimeout(() => {
                setDeleting(false);
                setCityIndex((prev) => (prev + 1) % cityNames.length);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [typingIndex, deleting, cityIndex]);

    return (
        <>
         <Navbar />
        
        <section 
            className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/4553182/pexels-photo-4553182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        >
            <div className="absolute inset-0 bg-black/30"></div>

            <h1 className="text-5xl font-extrabold text-white leading-tight z-10">
                Your Smart Relocation Assistant
            </h1>
            <p className="mt-4 text-lg text-white max-w-2xl z-10">
                AI-powered insights for a seamless relocation. Get housing, utilities, security, and lifestyle recommendations tailored to your needs.
            </p>

            <div className="mt-6 w-full max-w-lg z-10">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white placeholder-gray-200 shadow-sm transition-all duration-300"
                />
                {user ? (
                    <button className="mt-4 w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg">
                        Welcome, {user.firstName}!
                    </button>
                ) : (
                    <button className="mt-4 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg">
                        Loading...
                    </button>
                )}
            </div>

            <div className="mt-8 flex gap-6 z-10">
                <Feature icon="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" label="Smart Housing" />
                <Feature icon="https://cdn-icons-png.flaticon.com/512/3524/3524639.png" label="24/7 Security" />
                <Feature icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" label="Lifestyle Assistance" />
            </div>
        </section>
        </>
    );
}

function Feature({ icon, label }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110">
            <img 
                src={icon} 
                alt={label} 
                className="w-14 h-12 object-contain bg-transparent"
            />
            <span className="text-white font-semibold">{label}</span>
        </div>
    );
}


