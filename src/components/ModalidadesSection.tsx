import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Waves, Music, Zap, Activity, Stethoscope, Apple } from "lucide-react";
import { Link } from "react-router-dom";
import musculacaoImg from "@/assets/modalidades/musculacao.jpg";
import natacaoImg from "@/assets/modalidades/natacao.jpg";
import hidroginasticaImg from "@/assets/modalidades/hidroginastica.jpg";
import fitdanceImg from "@/assets/modalidades/fitdance.jpg";
import funcionalImg from "@/assets/modalidades/funcional.jpg";
import pilatesImg from "@/assets/modalidades/pilates.jpg";
import fisioterapiaImg from "@/assets/modalidades/fisioterapia.jpg";
import nutricaoImg from "@/assets/modalidades/nutricao.jpg";

const ModalidadesSection = () => {
  const modalidades = [
    {
      icon: Dumbbell,
      title: "Musculação",
      description: "Equipamentos anatômicos e acompanhamento para funcional",
      color: "bg-fitwell-orange",
      image: musculacaoImg,
      link: "/musculacao"
    },
    {
      icon: Waves,
      title: "Natação",
      description: "Piscina aquecida para todas as idades",
      color: "bg-fitwell-blue-light",
      image: natacaoImg,
      link: "/natacao"
    },
    {
      icon: Waves,
      title: "Hidroginástica / HidroHIIT",
      description: "Exercícios aquáticos com baixo impacto para as articulações",
      color: "bg-fitwell-blue-light",
      image: hidroginasticaImg,
      link: "/hidroginastica"
    },
    {
      icon: Music,
      title: "FitDance / Ritmos",
      description: "Dança e diversão para te liberar do estresse diário",
      color: "bg-fitwell-orange-light",
      image: fitdanceImg,
      link: "/fitdance"
    },
    {
      icon: Zap,
      title: "Funcional",
      description: "Treinos para você estar apto para os movimentos do dia a dia",
      color: "bg-fitwell-orange",
      image: funcionalImg,
      link: "/funcional"
    },
    {
      icon: Stethoscope,
      title: "Fisioterapia",
      description: "Cuidado especializado para reabilitação e prevenção",
      color: "bg-fitwell-blue",
      image: fisioterapiaImg,
      link: "/fisioterapia"
    },
    {
      icon: Apple,
      title: "Nutrição",
      description: "Alimentação equilibrada é parte essencial da sua saúde",
      color: "bg-fitwell-blue",
      image: nutricaoImg,
      link: "/nutricao"
    }
  ];

  return (
    <section id="modalidades" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fitwell-dark mb-4">
            Nossas <span className="text-fitwell-orange">Modalidades</span>
          </h2>
          <p className="text-lg text-fitwell-dark/70 max-w-2xl mx-auto">
            Encontre a atividade perfeita para você. Temos opções para todos os gostos e idades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modalidades.map((modalidade, index) => {
            const IconComponent = modalidade.icon;
            
            const cardContent = (
              <Card className="group hover:shadow-elegant hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border-0 overflow-hidden h-full">
                <div className={`${modalidade.color} h-2`}></div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={modalidade.image} 
                    alt={modalidade.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className={`absolute top-4 left-4 ${modalidade.color} rounded-full w-12 h-12 flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-fitwell-dark mb-3">
                    {modalidade.title}
                  </h3>
                  <p className="text-fitwell-dark/70 mb-4 leading-relaxed">
                    {modalidade.description}
                  </p>
                  <Button variant="outline" size="sm" className="group-hover:border-fitwell-orange group-hover:text-fitwell-orange">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            );
            
            return modalidade.link ? (
              <Link key={index} to={modalidade.link}>
                {cardContent}
              </Link>
            ) : (
              <div key={index}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModalidadesSection;