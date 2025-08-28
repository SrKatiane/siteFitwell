import { Button } from "@/components/ui/button";
import { Users, Calendar, Target } from "lucide-react";
import { Link } from "react-router-dom";
const ProgramaAdaptacaoSection = () => {
  const beneficios = [{
    icon: Users,
    title: "Acompanhamento Personalizado",
    description: "Professor dedicado para seus primeiros passos"
  }, {
    icon: Target,
    title: "Avaliação Completa",
    description: "Análise física e definição de objetivos"
  }, {
    icon: Calendar,
    title: "Treino Sob Medida",
    description: "Programa desenvolvido especialmente para você"
  }];
  return <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center md:text-left">
            <span className="bg-fitwell-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
              Especial para Iniciantes
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center md:text-left">
            Novo por aqui?
          </h2>
          
          <p className="text-xl mb-12 text-white/90 text-center md:text-left">
            Participe do nosso <strong>Programa de Adaptação</strong>: acompanhamento, avaliação e treino sob medida pra você começar do jeito certo.
          </p>

          {/* Mobile Layout */}
          <div className="block md:hidden space-y-6 mb-12">
            {beneficios.map((beneficio, index) => {
            const IconComponent = beneficio.icon;
            return <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 mt-1 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1 text-lg text-white">{beneficio.title}</h4>
                    <p className="text-white/80">{beneficio.description}</p>
                  </div>
                </div>;
          })}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-3 gap-8 mb-12">
            {beneficios.map((beneficio, index) => {
            const IconComponent = beneficio.icon;
            return <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-white/20 rounded-full p-4 mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 text-lg">{beneficio.title}</h4>
                  <p className="text-white/80">{beneficio.description}</p>
                </div>;
          })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="hero-outline" size="xl" asChild className="md:hidden">
              <Link to="/programa-adaptacao">
                Saiba Mais
              </Link>
            </Button>
            <div className="hidden md:flex gap-4">
              
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/programa-adaptacao">
                  Saiba Mais
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProgramaAdaptacaoSection;