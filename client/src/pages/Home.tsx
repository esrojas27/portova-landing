import { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [location] = useLocation();
  const SHOW_CATEGORIES = false; // mantener la sección para futuro uso sin mostrarla ahora
  const SHOW_TESTIMONIALS = false; // ocultar temporalmente la sección de testimonios

  useEffect(() => {
    const pathToSection: Record<string, string> = {
      "/sobre-nosotros": "sobre-nosotros",
      "/productos": "productos",
      "/como-funciona": "como-funciona",
      "/contacto": "contacto",
    };

    const targetId = pathToSection[location];
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        {SHOW_CATEGORIES && <Categories />}
        <FeaturedProducts />
        <HowItWorks />
        {SHOW_TESTIMONIALS && <Testimonials />}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
