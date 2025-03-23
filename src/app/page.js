import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Contact/>
    </main>
  );
}
