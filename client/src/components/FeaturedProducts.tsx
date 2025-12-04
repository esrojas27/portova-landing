import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import earbudsImg from "@assets/generated_images/premium_wireless_earbuds_product_shot.png";
import headphonesImg from "@assets/generated_images/BeatsStudio3-01.png";
import speakerImg from "@assets/generated_images/portable_bluetooth_speaker_product_shot.png";

// Using generated images for the first 3, repeating for others just for demo layout
const products = [
  {
    id: 1,
    name: "Beats Fit Pro (1st Gen)",
    category: "Audio",
    price: "$850.000 COP",
    image: earbudsImg,
    description: "Cancelación de ruido activa y ajuste seguro para deportistas."
  },
  {
    id: 2,
    name: "Beats Studio3 Wireless",
    category: "Audio",
    price: "$1.200.000 COP",
    image: headphonesImg,
    description: "Sonido premium con chip Apple W1 y 22 horas de batería."
  },
  {
    id: 3,
    name: "JBL Charge 5",
    category: "Speakers",
    price: "$650.000 COP",
    image: speakerImg,
    description: "Resistente al agua y polvo, powerbank integrado."
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: "$1.450.000 COP",
    image: headphonesImg, // Reusing for layout
    description: "Líder en cancelación de ruido y calidad de llamadas."
  },
  {
    id: 5,
    name: "Marshall Emberton II",
    category: "Speakers",
    price: "$780.000 COP",
    image: speakerImg, // Reusing for layout
    description: "Sonido icónico en un diseño compacto y resistente."
  },
  {
    id: 6,
    name: "AirPods Pro (2nd Gen)",
    category: "Audio",
    price: "$1.100.000 COP",
    image: earbudsImg, // Reusing for layout
    description: "Audio espacial y cancelación de ruido mejorada."
  }
];

export default function FeaturedProducts() {
  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Productos Destacados</h2>
            <p className="text-gray-400">Selección curada de lo mejor en tecnología.</p>
          </div>
          <Button variant="link" className="text-primary hidden md:flex">Ver todo el catálogo</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-card border-white/5 overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="aspect-square overflow-hidden relative bg-black/50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-primary font-medium">Ver detalles</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">{product.category}</p>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">{product.price}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-white text-black hover:bg-gray-200 font-medium rounded-full">
                  Quiero este
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="link" className="text-primary">Ver todo el catálogo</Button>
        </div>
      </div>
    </section>
  );
}
