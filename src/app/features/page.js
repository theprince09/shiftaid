"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";


const features = [
  {
    title: "Personalized Housing",
    description: "Get AI-driven recommendations for homes that match your budget, lifestyle, and preferences.",
    icon: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    title: "Optimized Utilities & Security",
    description: "Find the best utility providers and security options for a safe and hassle-free move.",
    icon: "M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33",
  },
  {
    title: "Lifestyle & Community Insights",
    description: "Discover local amenities, social hubs, and cultural hotspots to ease your transition.",
    icon: "M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z",
  },
  {
    title: "AI-Powered Relocation Planning",
    description: "Receive a step-by-step guide for your move, covering everything from packing to legal registrations.",
    icon: "M10 20L30 10L50 20L30 30Z", 
  },
  {
    title: "Smart City Exploration",
    description: "Get personalized itinerary recommendations with AI-driven suggestions for dining, activities, and more.",
    icon: "M20 10L40 20L20 30L10 20Z",
  },
  {
    title: "Emergency & Healthcare Access",
    description: "Connect instantly with local emergency services, healthcare providers, and safety networks.",
    icon: "M25 5L30 10L35 5L40 10L45 5V25H25Z",
  },
  {
    title: "Intelligent Budget Planning",
    description: "Manage your move effectively with AI-powered cost calculators and optimized expense tracking.",
    icon: "M15 5H35V25H15Z",
  },
  
  {
    title: "AI-Driven Safety Monitoring",
    description: "Stay safe with real-time alerts and security monitoring tailored to your location.",
    icon: "M12 8L24 16L12 24Z",
  },
  {
    title: "Seamless Integration with Services",
    description: "SwiftAid connects with partner services for transportation, insurance, and relocation assistance.",
    icon: "M18 10L32 20L18 30Z",
  },
];


export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="features" className="pt-10 flex justify-center ">
      <div className="px-4 xl:container">
        
        <span
        className="absolute mt 1px left-1/2 -translate-x-1/2 font-extrabold select-none w-full text-center"
          style={{
            background: "linear-gradient(180deg, rgba(74,108,247,.6), rgba(74,108,247,0))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: 0.6,
            fontSize: "80px",
            fontWeight: 800,
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            lineHeight: "1",
            whiteSpace: "nowrap", // Prevents breaking into multiple lines
          }}
          aria-hidden="true"
          >
            Feature
          </span>
        <div className="text-center mx-auto mb-12 max-w-[620px] pt-15">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold"
          >
            AI-Powered Insights for Seamless Relocation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-gray-600"
          >
            Get tailored recommendations for housing, utilities, security, and lifestyle—so you can move with confidence.
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="w-full px-4 md:w-1/2 lg:w-1/3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group mx-auto mb-10 max-w-[380px] text-center border rounded-lg p-6 shadow-sm transition-all"
              >
                <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-gray-300 hover:bg-blue-500 hover:text-white">
                  <svg width="50" height="50" viewBox="0 0 44 44" className="fill-current">
                    <path d={feature.icon}></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
