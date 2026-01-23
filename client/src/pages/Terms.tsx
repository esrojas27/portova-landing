import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="py-16 md:py-24">
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Términos y Condiciones de Uso
              </h1>
              <p className="text-sm text-gray-400">
                Última actualización: 23 de enero de 2026
              </p>
            </header>

            <div className="space-y-8 text-gray-200 leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">1. Identificación</h2>
                <p>
                  Este sitio web es operado por PORTOVA, tienda online con
                  domicilio en Colombia. Para contacto de soporte puedes escribir a
                  portova.col@gmail.com.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">2. Aceptación</h2>
                <p>
                  Al acceder, navegar o utilizar este sitio, aceptas estos Términos
                  y Condiciones. Si no estás de acuerdo, no debes usar la plataforma.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">3. Capacidad</h2>
                <p>
                  Declara que tienes la capacidad legal para celebrar contratos en
                  Colombia. Si actúas en nombre de una empresa, garantizas que tienes
                  autorización para obligarla.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">4. Servicio</h2>
                <p>
                  PORTOVA ofrece una plataforma informativa y de contacto para
                  productos tecnológicos y de lifestyle. La disponibilidad,
                  especificaciones y precios pueden variar y se informan caso a caso.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  5. Registro y veracidad
                </h2>
                <p>
                  Si envías datos o solicitudes, garantizas que la información es
                  veraz, completa y actualizada. PORTOVA puede rechazar solicitudes
                  con datos incompletos o inconsistentes.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  6. Precios y pagos
                </h2>
                <p>
                  Los precios publicados son referenciales y pueden cambiar sin
                  previo aviso. Los pagos, cuando apliquen, se gestionan a través de
                  proveedores externos seguros. PORTOVA no almacena datos completos
                  de tarjetas.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">7. Cambios</h2>
                <p>
                  PORTOVA podrá modificar estos Términos en cualquier momento.
                  Publicaremos la versión actualizada con su fecha de vigencia. El
                  uso continuo del sitio implica aceptación de los cambios.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  8. Ley aplicable y jurisdicción
                </h2>
                <p>
                  Estos Términos se rigen por las leyes de la República de Colombia.
                  Cualquier controversia se someterá a los jueces competentes de
                  Colombia.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">9. Contacto</h2>
                <p>
                  Para consultas legales o soporte: portova.col@gmail.com.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
