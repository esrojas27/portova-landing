import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="py-16 md:py-24">
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Política de Privacidad
              </h1>
              <p className="text-sm text-gray-400">
                Última actualización: 23 de enero de 2026
              </p>
            </header>

            <div className="space-y-8 text-gray-200 leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">1. Responsable</h2>
                <p>
                  El responsable del tratamiento de datos personales es PORTOVA,
                  con domicilio en Colombia. Contacto: portova.col@gmail.com.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  2. Datos que recopilamos
                </h2>
                <p>Recopilamos los siguientes datos personales:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nombre.</li>
                  <li>Correo electrónico.</li>
                  <li>Datos de pago necesarios para procesar transacciones.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  3. Finalidades del tratamiento
                </h2>
                <p>Usamos los datos para:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Atender solicitudes de información y contacto.</li>
                  <li>Gestionar pedidos y pagos.</li>
                  <li>Brindar soporte y seguimiento al cliente.</li>
                  <li>Cumplir obligaciones legales y contractuales.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  4. Base legal
                </h2>
                <p>
                  El tratamiento se basa en el consentimiento del titular, la
                  ejecución de una relación precontractual o contractual y el
                  cumplimiento de obligaciones legales aplicables. Para estándares
                  internacionales como el RGPD, estas bases corresponden a
                  consentimiento, ejecución contractual y obligación legal.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  5. Proveedores y transferencias
                </h2>
                <p>
                  Podemos compartir datos con proveedores de servicios necesarios
                  para operar la plataforma (por ejemplo, procesadores de pago),
                  quienes actúan como encargados del tratamiento. PORTOVA no almacena
                  datos completos de tarjetas; estos son gestionados por los
                  procesadores correspondientes. Si existen transferencias
                  internacionales, se realizarán bajo garantías adecuadas de
                  protección.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  6. Conservación
                </h2>
                <p>
                  Conservamos los datos solo durante el tiempo necesario para cumplir
                  las finalidades descritas o exigencias legales. Luego serán
                  eliminados o anonimizados.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  7. Derechos del titular
                </h2>
                <p>
                  Puedes ejercer en cualquier momento tus derechos de acceso,
                  rectificación, actualización, supresión, portabilidad, limitación
                  u oposición, así como revocar el consentimiento cuando corresponda.
                  En Colombia, estos derechos se enmarcan en el régimen de Habeas
                  Data (Ley 1581 de 2012 y normas concordantes).
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  8. Cómo ejercer tus derechos
                </h2>
                <p>
                  Envía tu solicitud al correo portova.col@gmail.com indicando tu
                  nombre, el derecho que deseas ejercer y la información necesaria
                  para identificarte. Responderemos en los plazos legales aplicables.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  9. Seguridad
                </h2>
                <p>
                  Implementamos medidas técnicas y organizativas razonables para
                  proteger la información personal frente a accesos no autorizados,
                  pérdida o alteración.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  10. Menores de edad
                </h2>
                <p>
                  Este sitio no está dirigido a menores de edad. Si detectamos datos
                  de menores sin autorización, procederemos a su eliminación.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  11. Cambios a esta política
                </h2>
                <p>
                  Podemos actualizar esta política. Publicaremos la versión vigente
                  con su fecha de actualización. El uso continuo del sitio implica
                  aceptación de los cambios.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-white">12. Contacto</h2>
                <p>
                  Para consultas sobre privacidad: portova.col@gmail.com.
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
