"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for reaching out! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-3xl font-bold text-gray-900 text-center">Get in Touch</h2>
                <p className="text-gray-600 text-center mt-2">We’d love to hear from you.</p>
                
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-medium">Your Name</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-medium">Your Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Your Message</label>
                        <textarea 
                            name="message"
                            rows="4" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us how we can help..." 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
