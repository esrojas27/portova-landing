import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import beatsFitPro_01 from "@assets/generated_images/BeatsFitPro1.png";
import beatsFitPro_02 from "@assets/generated_images/BeatsFitPro2.png";
import beatsStudio3_01 from "@assets/generated_images/BeatsStudio3-01.png";
import beatsStudio3_02 from "@assets/generated_images/BeatsStudio3-02.jpg";
import jblCharge01 from "@assets/generated_images/jblCharge5-1.jpg";

// Usamos las imágenes generadas; ahora cada producto tiene un arreglo de imágenes
const products = [
  {
    id: 1,
    name: "Beats Fit Pro (1st Gen)",
    category: "Audio",
    price: "$790.000 COP",
    images: [beatsFitPro_01, beatsFitPro_02],
    description: "CancelaciA3n de ruido activa y ajuste seguro para deportistas.",
    features: [
      "ANC con modo transparencia",
      "Chip H1 para cambio rA-pido entre dispositivos Apple",
      "Hasta 6 horas de reproducciA3n",
      "Resistentes al sudor y agua (IPX4)",
    ],
    longDescription:
      "Auriculares in-ear diseAñados para deportistas que buscan estabilidad, sonido premium y cancelaciA3n activa de ruido. Incluyen aletas de ajuste seguro y compatibilidad completa con iOS y Android.",
  },
  {
    id: 2,
    name: "Beats Studio3 Wireless",
    category: "Audio",
    price: "$800.000 COP",
    images: [beatsStudio3_02, beatsStudio3_01],
    description: "Sonido premium con chip Apple W1 y 22 horas de baterA-a.",
    features: [
      "CancelaciA3n de ruido adaptativa (Pure ANC)",
      "Chip Apple W1 con emparejamiento rA-pido",
      "Hasta 22 horas de baterA-a con ANC",
      "Carga rA-pida Fast Fuel (10 min = 3 horas)",
    ],
    longDescription:
      "AudA-fonos over-ear premium con cancelaciA3n de ruido y perfil sonoro equilibrado. Ideales para viajes, estudio o uso diario, con almohadillas cA-modas y conectividad estable.",
  },
  {
    id: 3,
    name: "JBL Charge 5",
    category: "Speakers",
    price: "$600.000 COP",
    images: [jblCharge01, beatsStudio3_01],
    description: "Resistente al agua y polvo, powerbank integrado.",
    features: [
      "BaterA-a de hasta 20 horas",
      "Resistencia IP67 agua y polvo",
      "FunciA3n powerbank integrada",
      "PartyBoost para enlazar mA-s parlantes",
    ],
    longDescription:
      "Parlante portA-til robusto con sonido potente y bajos profundos. Perfecto para exteriores gracias a su resistencia IP67 y baterA-a de larga duraciA3n con opciA3n de cargar otros dispositivos.",
  }
];

export default function FeaturedProducts() {
  const [activeSlides, setActiveSlides] = useState<Record<number, number>>({});
  const [openProductId, setOpenProductId] = useState<number | null>(null);

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
              SelecciA3n curada de lo mejor en tecnologA-a.
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-5xl bg-background border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[80vh]">
            <button
              aria-label="Cerrar"
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition"
              onClick={closeModal}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2 md:h-[80vh]">
              <div className="relative h-full">
                <div className="h-full bg-black">
                  {renderCarousel(activeProduct.id, activeProduct.images, "modal")}
                </div>
              </div>

              <div className="p-8 space-y-4 max-h-full overflow-y-auto">
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
                  <p className="text-sm text-gray-400">CaracterA-sticas</p>
                  <ul className="space-y-2 text-gray-200 text-sm list-disc list-inside">
                    {activeProduct.features.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-2">DescripciA3n</p>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {activeProduct.longDescription}
                  </p>
                </div>

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
