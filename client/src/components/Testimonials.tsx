import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Andrés M.",
    role: "Tech Enthusiast",
    text: "Increíble servicio. Mis Beats llegaron sellados y en perfecto estado. Mucho más barato que en tiendas locales."
  },
  {
    name: "Valeria R.",
    role: "Diseñadora",
    text: "Estaba buscando un modelo específico de Dyson que no llegaba a Colombia. PORTOVA me lo consiguió en una semana.",
  },
  {
    name: "Camilo S.",
    role: "Músico",
    text: "La atención personalizada marca la diferencia. Me asesoraron con los monitores de audio y todo salió perfecto."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Lo que dicen nuestros clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/10 border-white/5">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-xs text-primary uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
