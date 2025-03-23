"use client";

import { useState, useEffect } from "react";

export default function Hero() {
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
            // Typing effect
            timeout = setTimeout(() => {
                setPlaceholder(` ${currentCity.slice(0, typingIndex)}`);
                setTypingIndex(typingIndex + 1);
            }, 150);
        } 
        else if (!deleting && typingIndex > currentCity.length) {
            // Pause for a moment before deleting
            timeout = setTimeout(() => setDeleting(true), 1000);
        } 
        else if (deleting && typingIndex > 0) {
            // Deleting effect
            timeout = setTimeout(() => {
                setPlaceholder(`${currentCity.slice(0, typingIndex - 1)}`);
                setTypingIndex(typingIndex - 1);
            }, 75);
        } 
        else if (deleting && typingIndex === 0) {
            // Move to the next city
            timeout = setTimeout(() => {
                setDeleting(false);
                setCityIndex((prev) => (prev + 1) % cityNames.length);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [typingIndex, deleting, cityIndex]);



    return (
        <section 
        className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/4553182/pexels-photo-4553182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
    >
            {/* Dark Overlay for Readability */}
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
                <button className="mt-4 w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
                    Explore Now
                </button>
            </div>

            {/* Feature Section */}
            <div className="mt-8 flex gap-6 z-10">
                <Feature 
                    icon="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" 
                    label="Smart Housing" 
                />
                <Feature 
                    icon="https://cdn-icons-png.flaticon.com/512/3524/3524639.png" 
                    label="24/7 Security" 
                />
                <Feature 
                    icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                    label="Lifestyle Assistance" 
                />
            </div>
            
        </section>
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

