import { CheckCircle2, Plane, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: CheckCircle2,
    title: "Productos Originales",
    description: "Garantía de autenticidad en cada producto. Solo marcas premium verificadas."
  },
  {
    icon: Plane,
    title: "Importación USA → COL",
    description: "Logística directa sin intermediarios innecesarios. De Miami a tu puerta."
  },
  {
    icon: UserCheck,
    title: "Atención Personalizada",
    description: "Te asesoramos en tu compra para que elijas exactamente lo que necesitas."
  }
];

export default function About() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre PORTOVA</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Somos una importadora premium enfocada en traer lo último en tecnología y estilo de vida. 
            Nuestra misión es conectar a Colombia con la innovación global.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="silver-card relative overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="icon-badge w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary drop-shadow-md" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-700 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
