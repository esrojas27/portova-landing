import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 justify-center md:justify-start">
              <span className="bg-primary text-black px-2 py-1 rounded-sm">P</span>
              PORTOVA
            </a>
            <p className="text-gray-500 text-sm mt-2">Premium Tech & Lifestyle Imports</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} PORTOVA. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Envíos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
