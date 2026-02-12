import { Award, ShieldCheck, Star, Medal, BadgeCheck, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certificates = [
  { icon: ShieldCheck, year: "2010", title: "ISO 9001:2015 Certification", description: "Quality Management System certification for manufacturing excellence." },
  { icon: Award, year: "2015", title: "BIS Certification", description: "Bureau of Indian Standards approval for all battery and inverter product lines." },
  { icon: Star, year: "2018", title: "Best Manufacturer Award", description: "Recognized as the best power solutions manufacturer by the Indian Electronics Association." },
  { icon: Medal, year: "2020", title: "MNRE Approved", description: "Ministry of New & Renewable Energy approval for solar products and installations." },
  { icon: BadgeCheck, year: "2022", title: "CE Marking Certification", description: "European conformity marking for export-quality power electronics products." },
  { icon: Trophy, year: "2024", title: "Top Dealer Network Award", description: "Awarded for building one of the largest authorized dealer networks in India." },
];

const CertificatesSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="certificates" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Trust & Recognition</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2">
            Dealer Certificates & Accreditations
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert) => (
            <Card key={cert.title} className="border-border/50 hover:border-gold/40 transition-all hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <cert.icon className="h-6 w-6 text-gold-dark" />
                  </div>
                  <span className="text-xs font-semibold bg-navy text-white px-3 py-1 rounded-full">{cert.year}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Become an Authorized Dealer
            </h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Join our growing network of 500+ authorized dealers across India and grow your business with our premium product range.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-gold text-navy font-semibold hover:bg-gold-dark shadow-gold px-8"
              size="lg"
            >
              Apply for Dealership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
