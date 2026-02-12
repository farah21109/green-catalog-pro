import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Certificates", href: "#certificates" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home" onClick={() => handleClick("#home")} className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
            <Zap className="h-6 w-6 text-gold" />
          </div>
          <div>
            <span className="font-display text-lg md:text-xl font-bold text-navy">Power Solutions</span>
            <span className="hidden md:block text-xs text-muted-foreground -mt-1">Energy You Can Trust</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-navy hover:bg-muted rounded-md transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => handleClick("#contact")}
            className="hidden sm:inline-flex bg-gold text-navy font-semibold hover:bg-gold-dark shadow-gold"
          >
            Get Best Price Now
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card">
              <SheetTitle className="font-display text-navy">Menu</SheetTitle>
              <nav className="flex flex-col gap-1 mt-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className="px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => handleClick("#contact")}
                  className="mt-4 bg-gold text-navy font-semibold hover:bg-gold-dark"
                >
                  Get Best Price Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
