import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PaymentSuccess() {
  const whatsappMessage = encodeURIComponent(
    "Hola Portova, acabo de realizar una compra y me gustaría consultar el estado de mi pedido."
  );
  const whatsappLink = `https://wa.me/573209636039?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-24 px-6">
        <div className="max-w-2xl w-full bg-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-center animate-in fade-in zoom-in duration-500">

          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¡Gracias por tu compra en Portova!
          </h1>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Tu pago ha sido procesado exitosamente. Nuestro equipo ya ha recibido tu orden y se pondrá en contacto contigo muy pronto para coordinar los detalles del envío y asegurarse de que recibas tu producto lo antes posible.
          </p>

          <div className="space-y-4">
            <p className="text-sm text-gray-400">
              ¿Tienes alguna duda inmediata sobre tu pedido?
            </p>

            <Button
              size="lg"
              className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold rounded-full h-14 text-lg px-8 shadow-lg hover:scale-105 transition-transform"
              asChild
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-6 w-6" />
                Consultar estado del pedido
              </a>
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
