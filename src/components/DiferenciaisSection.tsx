import { Heart, Users, Building2, Zap, Home } from "lucide-react";

const DiferenciaisSection = () => {
  const diferenciais = [
    {
      icon: Heart,
      title: "Atendimento individualizado",
      description: "Cuidado personalizado para cada aluno"
    },
    {
      icon: Building2,
      title: "Estrutura completa para todas as idades",
      description: "Equipamentos e espaços adaptados"
    },
    {
      icon: Users,
      title: "Fisioterapia e Nutrição no mesmo espaço",
      description: "Cuidado integral da sua saúde"
    },
    {
      icon: Zap,
      title: "Modalidades variadas e divertidas",
      description: "Atividades para todos os gostos"
    },
    {
      icon: Home,
      title: "Ambiente acolhedor e familiar",
      description: "Um espaço onde você se sente em casa"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-fitwell-orange-lighter/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fitwell-dark mb-4">
            Por que escolher a <span className="text-fitwell-orange">Fitwell?</span>
          </h2>
          <p className="text-lg text-fitwell-dark/70 max-w-2xl mx-auto">
            Conheça os diferenciais que fazem da Fitwell o melhor espaço para cuidar da sua saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {diferenciais.map((diferencial, index) => {
            const IconComponent = diferencial.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-elegant group-hover:shadow-glow group-hover:bg-fitwell-orange transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-fitwell-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-fitwell-dark mb-3">
                  {diferencial.title}
                </h3>
                <p className="text-fitwell-dark/70 text-sm leading-relaxed">
                  {diferencial.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;