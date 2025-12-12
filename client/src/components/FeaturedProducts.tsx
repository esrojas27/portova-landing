import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import beatsFitPro_01 from "@assets/generated_images/BeatsFitPro1.png";
import beatsFitPro_02 from "@assets/generated_images/BeatsFitPro2.png";
import beatsStudio3_01 from "@assets/generated_images/BeatsStudio3-01.png";
import beatsStudio3_02 from "@assets/generated_images/BeatsStudio3-02.jpg";
import jblCharge01 from "@assets/generated_images/jblCharge5-1.png";

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  images: string[];
  description: string;
  features: string[];
  longDescription?: string;
};

// Usamos las imágenes generadas; ahora cada producto tiene un arreglo de imágenes
const products: Product[] = [
  {
    id: 1,
    name: "Beats Fit Pro (1st Gen)",
    category: "DROP 01 · AUDIO & TECH",
    price: "$790.000 COP",
    images: [beatsFitPro_01, beatsFitPro_02],
    description: "Audífonos in-ear deportivos con cancelación activa de ruido, ajuste seguro y hasta 24 h de batería con estuche.",
    features: [
      "Tipo: audífonos in-ear true wireless",
      "Cancelación de ruido: ANC + modo Transparencia",
      "Chip: Apple H1, Bluetooth Clase 1",
      "Batería: hasta 6 h por carga + 18 h adicionales con estuche (24 h totales aprox.)",
      "Carga rápida: 5 min ≈ 1 h de reproducción (Fast Fuel)",
      "Resistencia: certificación IPX4 (sudor y salpicaduras)",
      "Compatibilidad: iOS y Android vía Bluetooth / app Beats",
    ],
    longDescription:
      "Beats Fit Pro ofrecen cancelación activa de ruido con modo Transparencia y audio espacial para una experiencia inmersiva en deporte y uso diario. Integran chip Apple H1 para emparejamiento estable y funciones avanzadas en dispositivos Apple, manteniendo compatibilidad completa vía Bluetooth con Android. La batería entrega hasta 6 horas de escucha por carga y aproximadamente 24 horas de reproducción total con el estuche y carga rápida Fast Fuel.",
  },
  {
    id: 2,
    name: "Beats Studio3 Wireless",
    category: "DROP 01 · AUDIO & TECH",
    price: "$800.000 COP",
    images: [beatsStudio3_02, beatsStudio3_01],
    description: "Audífonos over-ear inalámbricos con cancelación de ruido Pure ANC, chip Apple W1 y hasta 22 h de batería con ANC",
    features: [
      "Tipo: audífonos over-ear inalámbricos plegables",
      "Cancelación de ruido: Pure Adaptive Noise Cancelling (Pure ANC)",
      "Calibración: ajuste de audio en tiempo real para mantener la calidad sonora",
      "Chip: Apple W1, Bluetooth Clase 1",
      "Batería: hasta 22 h con ANC activado (40 h con ANC desactivado)",
      "Carga rápida: Fast Fuel, 10 min ≈ 3 h de reproducción",
    ],
    longDescription:
      "Beats Studio3 Wireless incorporan Pure Adaptive Noise Cancelling, que ajusta la cancelación de ruido en tiempo real para mantener un sonido equilibrado en todo el espectro. El chip Apple W1 proporciona conexión Bluetooth Clase 1 eficiente y estable, con hasta 22 horas de uso con ANC activado y hasta 40 horas en modo de bajo consumo, además de carga rápida Fast Fuel (10 minutos ≈ 3 horas de reproducción).",
  },
  {
    id: 3,
    name: "JBL Charge 5",
    category: "DROP 01 · AUDIO & TECH",
    price: "$600.000 COP",
    images: [jblCharge01, beatsStudio3_01],
    description: "Sonido JBL Original Pro, hasta 20 h de batería, resistencia IP67 y powerbank integrado",
    features: [
      "Tipo: parlante Bluetooth portátil con función powerbank",
      "Potencia de salida: hasta 40 W (driver + tweeter)",
      "Sonido: JBL Original Pro con radiadores pasivos duales para refuerzo de graves",
      "Batería: hasta 20 h de tiempo de reproducción por carga",
      "Resistencia: certificación IP67 (sumergible y a prueba de polvo)",
      "Conectividad: Bluetooth 5.1, permite conectar hasta 2 dispositivos",
      "Funciones extra: PartyBoost para enlazar varios parlantes JBL compatibles",
    ],
    longDescription:
      "JBL Charge 5 ofrece el característico sonido JBL Original Pro mediante un driver de largo recorrido, tweeter independiente y radiadores pasivos para graves potentes. Su batería proporciona hasta 20 horas de reproducción continua y funciona como powerbank para cargar otros dispositivos por USB. El diseño IP67 lo hace resistente al agua y al polvo, e incluye PartyBoost para enlazar varios parlantes JBL compatibles y ampliar el sistema de sonido.",
  }
];

export default function FeaturedProducts() {
  const [activeSlides, setActiveSlides] = useState<Record<number, number>>({});
  const [openProductId, setOpenProductId] = useState<number | null>(null);
  const [showDescription, setShowDescription] = useState(false);

  const productMap = useMemo(
    () => Object.fromEntries(products.map((p) => [p.id, p])),
    []
  );

  const getSlide = (productId: number) =>
    activeSlides[productId]
      ? activeSlides[productId] % productMap[productId].images.length
      : 0;

  const setSlide = (productId: number, nextIndex: number) => {
    const total = productMap[productId].images.length;
    const normalized = ((nextIndex % total) + total) % total;
    setActiveSlides((prev) => ({ ...prev, [productId]: normalized }));
  };

  const changeSlide = (productId: number, delta: number) => {
    setSlide(productId, getSlide(productId) + delta);
  };

  const openModal = (productId: number) => setOpenProductId(productId);
  const closeModal = () => setOpenProductId(null);

  const activeProduct = openProductId ? productMap[openProductId] : null;

  useEffect(() => {
    // Reinicia el estado de descripción al cambiar de producto/abrir modal
    setShowDescription(false);
  }, [openProductId]);

  const renderCarousel = (
    productId: number,
    images: string[],
    variant: "card" | "modal"
  ) => {
    const currentIndex = getSlide(productId);
    return (
      <div
        className={`relative overflow-hidden ${
          variant === "card" ? "aspect-square bg-black/50" : "bg-black"
        }`}
      >
        <img
          src={images[currentIndex]}
          alt=""
          className={
            variant === "card"
              ? "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              : "w-full h-full object-cover"
          }
        />

        <button
          aria-label="Imagen anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 border border-white/30 shadow-lg shadow-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/80 transition"
          onClick={(e) => {
            e.stopPropagation();
            changeSlide(productId, -1);
          }}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Siguiente imagen"
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 border border-white/30 shadow-lg shadow-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/80 transition"
          onClick={(e) => {
            e.stopPropagation();
            changeSlide(productId, 1);
          }}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Ir a imagen ${idx + 1}`}
              className={`h-2.5 rounded-full transition ${
                currentIndex === idx
                  ? "w-6 bg-primary"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSlide(productId, idx);
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Productos Destacados
            </h2>
            <p className="text-gray-400">
              Selección curada de lo mejor en tecnología.
            </p>
          </div>
          <Button variant="link" className="text-primary hidden md:flex">
            Ver todo el catA­logo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-card border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-300 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => openModal(product.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(product.id);
                }
              }}
            >
              <div className="relative">
                {renderCarousel(product.id, product.images, "card")}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                  <span className="text-primary font-medium">Ver detalles</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">
                    {product.price}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-white text-black hover:bg-gray-200 font-medium rounded-full"
                  onClick={() => openModal(product.id)}
                >
                  Quiero este
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="link" className="text-primary">
            Ver todo el catA­logo
          </Button>
        </div>
      </div>

      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/80 px-4 py-8 overflow-y-auto">
          <div className="relative w-full max-w-5xl bg-background border border-white/10 rounded-3xl shadow-2xl md:overflow-hidden max-h-[90vh] flex flex-col">
            <button
              aria-label="Cerrar"
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 border border-white/40 shadow-lg shadow-black/40 text-white flex items-center justify-center hover:bg-black/70 transition z-10"
              onClick={closeModal}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2 flex-1 overflow-y-auto md:overflow-hidden md:h-full">
              <div className="relative w-full h-full md:min-h-0">
                <div className="aspect-[4/5] md:aspect-auto md:h-full bg-black">
                  {renderCarousel(activeProduct.id, activeProduct.images, "modal")}
                </div>
              </div>

              <div className="p-8 space-y-4 md:max-h-full md:overflow-y-auto">
                <div>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">
                    {activeProduct.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {activeProduct.name}
                  </h3>
                  <p className="text-lg font-semibold text-white mt-2">
                    {activeProduct.price}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-400">Características</p>
                  <ul className="space-y-2 text-gray-200 text-sm list-disc pl-5 marker:text-primary">
                    {activeProduct.features.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {activeProduct.longDescription && (
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <button
                      className="text-sm font-medium text-primary hover:text-primary/80 transition"
                      onClick={() => setShowDescription((prev) => !prev)}
                    >
                      {showDescription ? "Ocultar información" : "Ver más información"}
                    </button>
                    {showDescription && (
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {activeProduct.longDescription}
                      </p>
                    )}
                  </div>
                )}

                <Button className="w-full md:w-auto bg-primary text-black font-semibold rounded-full px-8 h-12">
                  Agregar al carrito
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
