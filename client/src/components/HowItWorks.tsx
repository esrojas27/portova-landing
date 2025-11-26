import { ShoppingCart, SearchCheck, Package, Home } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "1. PORTOVA compra en USA",
    description: "Adquirimos el producto directamente en tiendas oficiales."
  },
  {
    icon: SearchCheck,
    title: "2. Verificación",
    description: "Revisamos autenticidad y estado perfecto del producto."
  },
  {
    icon: Package,
    title: "3. Envío Seguro",
    description: "Transporte aéreo rápido con seguro incluido hacia Colombia."
  },
  {
    icon: Home,
    title: "4. Entrega",
    description: "Recibes en la puerta de tu casa con total tranquilidad."
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Cómo funciona</h2>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-card border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 relative bg-background">
                  <step.icon className="w-8 h-8 text-gray-300 group-hover:text-primary transition-colors" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-black">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title.split(". ")[1]}</h3>
                <p className="text-sm text-gray-400 px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
