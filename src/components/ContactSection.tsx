import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Plot No. 45, Industrial Area Phase-II, New Delhi - 110020, India" },
  { icon: Phone, label: "Phone", value: "+91 12345 67890" },
  { icon: Mail, label: "Email", value: "info@powersolutions.in" },
  { icon: Clock, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 6:30 PM" },
];

const productOptions = [
  "Inverters", "Batteries", "UPS Systems", "Solar Panels", "Solar Inverters", "Lithium Batteries", "Other"
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", product: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", product: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mt-2">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <Card className="lg:col-span-3 border-border/50">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-navy mb-6">Request Best Price</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name *"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <select
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select Product Interest *</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <Textarea
                  placeholder="Your Requirements (optional)"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <Button type="submit" className="w-full bg-gold text-navy font-semibold hover:bg-gold-dark shadow-gold" size="lg">
                  Get Best Price Now
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <Card key={info.label} className="border-border/50">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">{info.label}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{info.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
