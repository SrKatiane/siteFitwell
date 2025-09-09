import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/RECEPÇÃO 1.jpg"  
          alt="Pessoas se exercitando na Fitwell" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Mais que uma academia.
            <span className="block text-fitwell-orange-light">
              Um espaço pra cuidar da sua saúde.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Atividades físicas para todas as idades, com acompanhamento e carinho que só a Fitwell oferece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="min-w-48">
              Comece Agora
            </Button>
            <Button variant="hero-outline" size="xl" className="min-w-48">
              Agende uma Visita
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
      </div>
    </section>
  );
};

export default HeroSection;