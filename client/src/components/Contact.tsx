import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Quieres reservar tu próximo producto?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Escríbenos directamente y te ayudaremos a encontrar lo que buscas con la mejor asesoría.
              </p>
              <Button
                size="lg"
                className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold rounded-full h-14 text-lg"
                asChild
              >
                <a
                  href="https://wa.me/573209636039?text=Hola%2C%20encontre%20PORTOVA%20y%20quiero%20mas%20informacion%20sobre%20los%20productos%20disponibles%2C%20precios%20y%20formas%20de%20pago."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> Contáctanos por WhatsApp
                </a>
              </Button>
            </div>

            <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-4">O déjanos un mensaje</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Tu Nombre" className="bg-background/50 border-white/10 text-white placeholder:text-gray-500" />
                <Input type="email" placeholder="Tu Email" className="bg-background/50 border-white/10 text-white placeholder:text-gray-500" />
                <Textarea placeholder="¿Qué producto estás buscando?" className="bg-background/50 border-white/10 text-white placeholder:text-gray-500 min-h-[100px]" />
                <Button type="submit" className="w-full bg-primary text-black font-bold hover:bg-primary/90">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
