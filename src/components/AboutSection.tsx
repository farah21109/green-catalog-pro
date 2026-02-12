import { ShieldCheck, Users, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  { icon: ShieldCheck, title: "ISO 9001:2015", subtitle: "Certified" },
  { icon: Users, title: "500+", subtitle: "Authorized Dealers" },
  { icon: Clock, title: "15+ Years", subtitle: "Industry Experience" },
  { icon: Award, title: "BIS Approved", subtitle: "Products" },
];

const companyDetails = [
  { label: "Nature of Business", value: "Manufacturer & Supplier" },
  { label: "Total Employees", value: "200-500" },
  { label: "Year of Establishment", value: "2008" },
  { label: "Legal Status", value: "Private Limited Company" },
  { label: "Annual Turnover", value: "₹50-100 Crore" },
  { label: "GST Number", value: "07ABCDE1234F1Z5" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2">
            Trusted Power Solutions Manufacturer
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Power Solutions Factory is one of India's leading manufacturers and suppliers of high-quality power equipment and energy solutions. Established in 2008, we have built a reputation for delivering reliable inverters, batteries, UPS systems, and solar products to over 5,000 customers through our network of 500+ authorized dealers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our state-of-the-art manufacturing facility is equipped with the latest technology and adheres to stringent quality control processes. Every product that leaves our facility is tested to meet international standards, ensuring maximum performance and longevity for our customers.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <Card key={h.title} className="border-border/50 hover:border-gold/50 transition-colors">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <h.icon className="h-5 w-5 text-gold-dark" />
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm">{h.title}</div>
                      <div className="text-xs text-muted-foreground">{h.subtitle}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Details Table */}
          <Card className="border-border/50">
            <CardContent className="p-0">
              <div className="bg-navy p-4 rounded-t-lg">
                <h3 className="font-display text-lg font-semibold text-white">Company Details</h3>
              </div>
              <div className="divide-y divide-border">
                {companyDetails.map((detail) => (
                  <div key={detail.label} className="flex justify-between items-center px-5 py-3.5">
                    <span className="text-sm text-muted-foreground">{detail.label}</span>
                    <span className="text-sm font-medium text-foreground">{detail.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
