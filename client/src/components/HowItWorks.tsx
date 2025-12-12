import { ShoppingCart, SearchCheck, Package, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TextType from "@/components/TextType";

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
    title: "3. Envío aéreo seguro a Colombia",
    description: "Transporte aéreo rápido con seguro incluido hacia Colombia."
  },
  {
    icon: Home,
    title: "4. Entrega en tu puerta",
    description: "Recibes tu producto en la puerta de tu casa, sin trámites de aduana ni costos ocultos"
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Cómo funciona PORTOVA</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
            Traemos productos originales de USA a tu puerta, sin trámites ni sorpresas en el precio.
          </p>
        </div>

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

        <div className="mt-16 flex justify-center">
          <Card className="silver-card relative overflow-hidden w-full md:w-3/4 lg:w-1/2 rounded-3xl bg-gradient-to-br from-white via-slate-100 to-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <CardContent className="p-8 text-center space-y-4">
              <TextType
                as="h3"
                className="text-2xl md:text-3xl font-extrabold leading-tight"
                text={["¿Por qué comprar con PORTOVA?"]}
                textColors={["#059669"]} // emerald-600
                typingSpeed={60}
                pauseDuration={1800}
                deletingSpeed={35}
                loop={false}
                showCursor
                cursorCharacter="|"
                startOnVisible
              />
              <p className="text-xl md:text-2xl font-semibold text-slate-800">
                Beneficios claros y acompañamiento real
              </p>
              <ul className="space-y-2 text-slate-700 text-sm md:text-base">
                <li>Productos 100% originales, importados de USA</li>
                <li>Precio final en COP, sin letras pequeñas</li>
                <li>Acompañamiento por WhatsApp durante todo el proceso</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
