import { Headphones, Coffee, Sparkles, Shirt, Bike, Wrench } from "lucide-react";

const categories = [
  { icon: Headphones, name: "Tecnología & Audio", desc: "Sonido premium y gadgets" },
  { icon: Coffee, name: "Lifestyle", desc: "Para tu día a día" },
  { icon: Sparkles, name: "Belleza", desc: "Cuidado personal high-end" },
  { icon: Shirt, name: "Moda", desc: "Tendencias exclusivas" },
  { icon: Bike, name: "Motos & Gadgets", desc: "Accesorios para rodar" },
  { icon: Wrench, name: "Utilidades", desc: "Herramientas innovadoras" },
];

export default function Categories() {
  return (
    <section id="categorias" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Categorías</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="group bg-background border border-white/5 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] cursor-pointer"
            >
              <cat.icon className="w-8 h-8 text-gray-400 group-hover:text-primary mb-4 transition-colors" />
              <h3 className="font-semibold text-white text-sm md:text-base mb-1">{cat.name}</h3>
              <p className="text-xs text-gray-500 hidden md:block">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
