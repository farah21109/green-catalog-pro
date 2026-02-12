import { Wrench, CalendarCheck, Headphones, ShieldCheck, MapPin, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Wrench, title: "Installation Services", description: "Professional installation by certified technicians for all products including solar rooftop systems, inverter setups, and battery banks." },
  { icon: CalendarCheck, title: "Annual Maintenance", description: "Comprehensive annual maintenance contracts to ensure your power systems run at peak performance throughout the year." },
  { icon: Headphones, title: "24/7 Technical Support", description: "Round-the-clock customer support via phone, email, and WhatsApp for troubleshooting and service requests." },
  { icon: ShieldCheck, title: "Warranty Services", description: "Hassle-free warranty claims with doorstep replacement and repair services across all dealer locations." },
  { icon: MapPin, title: "Site Survey & Assessment", description: "Free site assessment for solar installations and power backup requirements with detailed project reports." },
  { icon: GraduationCap, title: "Dealer Training Programs", description: "Regular training workshops for dealers on product features, installation techniques, and sales strategies." },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Card key={svc.title} className="border-border/50 hover:border-gold/40 transition-all hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <svc.icon className="h-7 w-7 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mb-2">{svc.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{svc.description}</p>
                <button
                  onClick={scrollToContact}
                  className="text-sm text-gold-dark hover:text-gold font-medium transition-colors"
                >
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
