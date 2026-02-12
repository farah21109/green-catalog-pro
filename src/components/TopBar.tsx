import { Phone, Mail, Award } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-navy text-primary-foreground text-xs md:text-sm py-2">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 md:gap-6">
          <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="h-3 w-3" />
            <span>+91 12345 67890</span>
          </a>
          <a href="mailto:info@powersolutions.in" className="hidden sm:flex items-center gap-1.5 hover:text-gold transition-colors">
            <Mail className="h-3 w-3" />
            <span>info@powersolutions.in</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-gold/80">GST: 07ABCDE1234F1Z5</span>
          <span className="flex items-center gap-1.5 bg-gold/20 text-gold px-2 py-0.5 rounded-full text-xs font-medium">
            <Award className="h-3 w-3" />
            98% Response Rate
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
