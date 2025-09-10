import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            
            {/* Modalidades Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-fitwell-dark hover:text-fitwell-orange transition-colors">
                Modalidades
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/musculacao" className="cursor-pointer">Musculação</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/natacao" className="cursor-pointer">Natação</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/hidroginastica" className="cursor-pointer">Hidroginástica</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/funcional" className="cursor-pointer">Funcional</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/fitdance" className="cursor-pointer">FitDance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/fisioterapia" className="cursor-pointer">Fisioterapia</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/nutricao" className="cursor-pointer">Nutrição</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
              
              {/* Modalidades expandidas no mobile */}
              <div className="px-4 py-2">
                <span className="text-fitwell-dark font-medium">Modalidades:</span>
              </div>
              <Link to="/musculacao" className="block px-6 py-2 text-sm text-fitwell-dark hover:text-fitwell-orange transition-colors">• Musculação</Link>
              <Link to="/natacao" className="block px-6 py-2 text-sm text-fitwell-dark hover:text-fitwell-orange transition-colors">• Natação</Link>
              <Link to="/hidroginastica" className="block px-6 py-2 text-sm text-fitwell-dark hover:text-fitwell-orange transition-colors">• Hidroginástica</Link>
              <Link to="/funcional" className="block px-6 py-2 text-sm text-fitwell-dark hover:text-fitwell-orange transition-colors">• Funcional</Link>
              <Link to="/fitdance" className="block px-6 py-2 text-sm text-fitwell-dark hover:text-fitwell-orange transition-colors">• FitDance</Link>
              <Link to="/fisioterapia" className="block px-6 py-2 text-sm text-fitwell-dark hover:text-fitwell-orange transition-colors">• Fisioterapia</Link>
              <Link to="/nutricao" className="block px-6 py-2 text-sm text-fitwell-dark hover:text-fitwell-orange transition-colors">• Nutrição</Link>
              
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