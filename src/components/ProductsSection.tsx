import { useState } from "react";
import { Battery, Zap, Sun, CircuitBoard, BatteryCharging, SunMedium } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    icon: Zap,
    title: "Inverters",
    description: "Pure sine wave inverters for home, office & industrial use",
    products: [
      { name: "Home Inverter 850VA", specs: "850VA / 12V, Pure Sine Wave, LCD Display" },
      { name: "Home Inverter 1500VA", specs: "1500VA / 24V, Pure Sine Wave, Smart Charging" },
      { name: "Commercial Inverter 5KVA", specs: "5KVA / 48V, DSP Technology, IGBT Based" },
      { name: "Industrial Inverter 10KVA", specs: "10KVA / 96V, 3-Phase, Heavy Duty" },
    ],
  },
  {
    icon: Battery,
    title: "Batteries",
    description: "Tubular & flat plate batteries for long-lasting backup",
    products: [
      { name: "Tall Tubular 150Ah", specs: "150Ah, C20 Rating, 5-Year Warranty" },
      { name: "Tall Tubular 200Ah", specs: "200Ah, Low Maintenance, Fast Charging" },
      { name: "Short Tubular 100Ah", specs: "100Ah, Space Saving, High Cycle Life" },
      { name: "Flat Plate 135Ah", specs: "135Ah, Affordable, Standard Backup" },
    ],
  },
  {
    icon: CircuitBoard,
    title: "UPS Systems",
    description: "Online & offline UPS for uninterrupted power supply",
    products: [
      { name: "Desktop UPS 600VA", specs: "600VA, 4 Outlets, USB Charging" },
      { name: "Office UPS 1KVA", specs: "1KVA, Line Interactive, AVR" },
      { name: "Server UPS 3KVA", specs: "3KVA, Online Double Conversion, LCD" },
      { name: "Rack Mount UPS 6KVA", specs: "6KVA, Hot Swappable Batteries, SNMP" },
    ],
  },
  {
    icon: Sun,
    title: "Solar Panels",
    description: "Mono & polycrystalline panels for green energy",
    products: [
      { name: "Poly 165W Panel", specs: "165W, 12V, 36 Cells, Aluminium Frame" },
      { name: "Mono 335W Panel", specs: "335W, 24V, Half-Cut Cells, High Efficiency" },
      { name: "Mono 440W Panel", specs: "440W, Bifacial, 144 Half-Cut Cells" },
      { name: "Mono 540W Panel", specs: "540W, Commercial Grade, 25-Year Warranty" },
    ],
  },
  {
    icon: SunMedium,
    title: "Solar Inverters",
    description: "MPPT & PWM solar charge controllers and inverters",
    products: [
      { name: "Solar PCU 1KVA", specs: "1KVA, MPPT, 50A Controller, WiFi" },
      { name: "Solar PCU 3KVA", specs: "3KVA, Hybrid, Grid-Tie Compatible" },
      { name: "Solar PCU 5KVA", specs: "5KVA, 48V, Parallel Operation" },
      { name: "Solar PCU 10KVA", specs: "10KVA, 3-Phase, Commercial Grade" },
    ],
  },
  {
    icon: BatteryCharging,
    title: "Lithium Batteries",
    description: "Advanced lithium-ion & LiFePO4 batteries",
    products: [
      { name: "Li-ion 24V 50Ah", specs: "24V/50Ah, BMS Built-in, 3000+ Cycles" },
      { name: "LiFePO4 48V 100Ah", specs: "48V/100Ah, 10-Year Life, Fast Charge" },
      { name: "LiFePO4 48V 150Ah", specs: "48V/150Ah, Rack Mount, Scalable" },
      { name: "LiFePO4 48V 200Ah", specs: "48V/200Ah, Commercial, IP65 Rated" },
    ],
  },
];

const ProductsSection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2">
            Digital Product Catalogue
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Browse our comprehensive range of power solutions. Contact us for the best dealer pricing.
          </p>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const isOpen = expanded === cat.title;
            return (
              <Card
                key={cat.title}
                className="border-border/50 hover:border-gold/40 transition-all hover:shadow-lg group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                      <cat.icon className="h-6 w-6 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <CardTitle className="font-display text-xl text-navy">{cat.title}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">{cat.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2.5">
                    {(isOpen ? cat.products : cat.products.slice(0, 2)).map((p) => (
                      <div key={p.name} className="bg-muted/80 rounded-lg p-3">
                        <div className="font-medium text-sm text-foreground">{p.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{p.specs}</div>
                      </div>
                    ))}
                  </div>
                  {!isOpen && cat.products.length > 2 && (
                    <button
                      onClick={() => setExpanded(cat.title)}
                      className="text-xs text-gold-dark hover:text-gold font-medium mt-2 transition-colors"
                    >
                      + {cat.products.length - 2} more products
                    </button>
                  )}
                  {isOpen && (
                    <button
                      onClick={() => setExpanded(null)}
                      className="text-xs text-gold-dark hover:text-gold font-medium mt-2 transition-colors"
                    >
                      Show less
                    </button>
                  )}
                  <Button
                    onClick={scrollToContact}
                    className="w-full mt-4 bg-navy text-white hover:bg-navy-light font-medium"
                    size="sm"
                  >
                    Get Best Price Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
