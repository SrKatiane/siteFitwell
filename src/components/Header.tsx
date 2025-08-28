import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-fitwell-orange-lighter/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c71a5eb4-e3ff-4b52-a49f-e102edbfe3e6.png" 
              alt="Fitwell Logo" 
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-fitwell-dark hover:text-fitwell-orange transition-colors">Home</a>
            <a href="/sobre" className="text-fitwell-dark hover:text-fitwell-orange transition-colors">Sobre</a>
            <a href="/#modalidades" className="text-fitwell-dark hover:text-fitwell-orange transition-colors">Modalidades</a>
            <a href="/programa-adaptacao" className="text-fitwell-dark hover:text-fitwell-orange transition-colors">Programa de Adaptação</a>
            <a href="/horarios" className="text-fitwell-dark hover:text-fitwell-orange transition-colors">Horários</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open('https://wa.me/5554981286867', '_blank')}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-fitwell-orange-lighter/20 bg-white">
            <nav className="py-4 space-y-2">
              <a href="/" className="block px-4 py-2 text-fitwell-dark hover:text-fitwell-orange transition-colors">Home</a>
              <a href="/sobre" className="block px-4 py-2 text-fitwell-dark hover:text-fitwell-orange transition-colors">Sobre</a>
              <a href="/#modalidades" className="block px-4 py-2 text-fitwell-dark hover:text-fitwell-orange transition-colors">Modalidades</a>
              <a href="/programa-adaptacao" className="block px-4 py-2 text-fitwell-dark hover:text-fitwell-orange transition-colors">Programa de Adaptação</a>
              <a href="/horarios" className="block px-4 py-2 text-fitwell-dark hover:text-fitwell-orange transition-colors">Horários</a>
              <div className="px-4 py-2">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5554981286867', '_blank')}
                >
                  Fale Conosco
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;