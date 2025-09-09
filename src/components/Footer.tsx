import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-fitwell-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/a0b3efd6-faed-424e-a0de-c5e19f27649e.png" 
              alt="Fitwell Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/80 mb-6 leading-relaxed">
              Mais que uma academia. Um espaço para cuidar da sua saúde com acolhimento e resultado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-fitwell-orange rounded-full w-10 h-10 flex items-center justify-center hover:bg-fitwell-orange-light transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-fitwell-orange rounded-full w-10 h-10 flex items-center justify-center hover:bg-fitwell-orange-light transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
         <div></div>

          {/* Modalidades */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fitwell-orange-light">Modalidades</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-fitwell-orange-light transition-colors">Musculação</a></li>
              <li><a href="#" className="text-white/80 hover:text-fitwell-orange-light transition-colors">Natação</a></li>
              <li><a href="#" className="text-white/80 hover:text-fitwell-orange-light transition-colors">Hidroginástica</a></li>
              <li><a href="#" className="text-white/80 hover:text-fitwell-orange-light transition-colors">FitDance</a></li>
              <li><a href="#" className="text-white/80 hover:text-fitwell-orange-light transition-colors">Fisioterapia</a></li>
              <li><a href="#" className="text-white/80 hover:text-fitwell-orange-light transition-colors">Nutrição</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fitwell-orange-light">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-fitwell-orange-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">
                    R. Martinho Lutero, 260 - Serrano  <br />
                    Canela - RS<br />
                    CEP: 95686-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-fitwell-orange-light" />
                <p className="text-white/80">(54) 3282-4317</p>
              </div>

              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-5 h-5 text-fitwell-orange-light" />
                <p className="text-white/80">(54) 98128-6867</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-fitwell-orange-light" />
                <p className="text-white/80">contato@fitwell.com.br</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-fitwell-orange-light mt-1" />
                <div className="text-white/80 text-sm">
                  <p>Seg-Sex: 6h às 13:00h – 15:00h às 21:30h</p>
                  <p>Sáb: 08:30h às 12:00h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Espaço Fitwell. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;