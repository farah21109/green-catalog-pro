import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, Clock, ShieldCheck, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Premium Solar Panels",
    subtitle: "Harness the Power of the Sun",
    description: "High-efficiency monocrystalline & polycrystalline solar panels for residential, commercial, and industrial applications.",
    gradient: "from-navy-dark via-navy to-navy-light",
  },
  {
    title: "Industrial Inverters",
    subtitle: "Reliable Power Conversion",
    description: "Pure sine wave inverters ranging from 500VA to 100KVA for homes, offices, and large-scale industrial use.",
    gradient: "from-navy via-navy-dark to-navy",
  },
  {
    title: "High-Performance Batteries",
    subtitle: "Uninterrupted Energy Storage",
    description: "Tubular, flat plate, and lithium-ion batteries with long cycle life and superior backup performance.",
    gradient: "from-navy-light via-navy to-navy-dark",
  },
];

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: ShieldCheck, value: "500+", label: "Authorized Dealers" },
  { icon: Package, value: "50+", label: "Products" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home">
      {/* Carousel */}
      <div className="relative overflow-hidden bg-navy min-h-[500px] md:min-h-[600px] flex items-center">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center transition-opacity duration-700 bg-gradient-to-br ${slide.gradient} ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-2xl">
                <span className="inline-block bg-gold/20 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                  {slide.subtitle}
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-white/70 text-lg mb-8 max-w-lg">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => scrollTo("#products")}
                    className="bg-gold text-navy font-semibold hover:bg-gold-dark shadow-gold px-6"
                    size="lg"
                  >
                    View Catalogue
                  </Button>
                  <Button
                    onClick={() => scrollTo("#contact")}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-6"
                    size="lg"
                  >
                    Get Best Price
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-gold w-8" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-navy-dark">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 justify-center">
              <stat.icon className="h-8 w-8 text-gold flex-shrink-0" />
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
