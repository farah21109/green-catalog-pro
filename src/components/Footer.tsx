import { Zap } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Certificates", href: "#certificates" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center">
                <Zap className="h-5 w-5 text-gold" />
              </div>
              <span className="font-display text-lg font-bold">Power Solutions</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Leading manufacturer of inverters, batteries, UPS systems, and solar energy products. Empowering India with reliable and affordable power solutions since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-white/60 hover:text-gold text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Plot No. 45, Industrial Area Phase-II</p>
              <p>New Delhi - 110020, India</p>
              <p className="text-gold">+91 12345 67890</p>
              <p>info@powersolutions.in</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Power Solutions Factory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
