import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Dumbbell, Heart, Users, Brain, Stethoscope, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import musculacaoImg from "@/assets/modalidades/musculacao.jpg";

const Musculacao = () => {
  const diferenciais = [
    {
      icon: Dumbbell,
      title: "Treinos personalizados",
      description: "você não recebe uma ficha genérica. A gente conversa, avalia e planeja seu caminho."
    },
    {
      icon: Heart,
      title: "Acolhimento de verdade", 
      description: "sem pressa, sem pressão. Aqui você não é apenas mais um."
    },
    {
      icon: Brain,
      title: "Integração com saúde",
      description: "nossos treinos consideram sono, alimentação, estresse e mobilidade."
    },
    {
      icon: Stethoscope,
      title: "Apoio completo",
      description: "temos fisioterapeuta e nutricionista no espaço, se você precisar de um plano mais completo. *não incluso na mensalidade"
    },
    {
      icon: Zap,
      title: "Equipamentos confortáveis e seguros",
      description: "com ambiente limpo e bem organizado."
    }
  ];

  const paraQuem = [
    "Quem está iniciando e quer um recomeço seguro com acompanhamento.",
    "Quem já treina, mas quer melhorar postura, resistência e mobilidade.",
    "Quem precisa prevenir lesões, dores articulares ou problemas de coluna.",
    "Quem busca longevidade e quer envelhecer com força e autonomia."
  ];

  const beneficios = [
    "Aumenta força e resistência muscular",
    "Melhora a postura e alivia dores",
    "Acelera o metabolismo",
    "Contribui para a saúde dos ossos",
    "Reduz o risco de doenças cardiovasculares",
    "Traz mais disposição para o dia a dia",
    "Reduz estresse e melhora a qualidade do sono"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={musculacaoImg} 
            alt="Musculação na Fitwell"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fitwell-dark/80 to-fitwell-dark/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Musculação na <span className="text-fitwell-orange">Fitwell</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Muito além do físico. Aqui, cada treino é um cuidado com sua saúde.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Na maioria das academias, a musculação é apresentada como um caminho para ganhar músculos ou melhorar a aparência. Na Fitwell, o foco vai além. Aqui, a musculação é uma ferramenta de saúde e qualidade de vida, feita sob medida para você.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed">
              Seja qual for sua idade ou condição física, nós construímos um plano de treino individualizado, respeitando seu momento e seus objetivos — com acompanhamento constante de profissionais preparados e comprometidos com o seu bem-estar.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-fitwell-blue-light/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
            Diferenciais da musculação na <span className="text-fitwell-orange">Fitwell</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((diferencial, index) => {
              const IconComponent = diferencial.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-fitwell-orange rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-fitwell-dark mb-3">
                      {diferencial.title}
                    </h3>
                    <p className="text-fitwell-dark/70 leading-relaxed">
                      {diferencial.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
              Pra quem é?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paraQuem.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-fitwell-blue-light/10 rounded-lg">
                  <div className="bg-fitwell-orange rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-fitwell-dark/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-fitwell-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Benefícios da musculação para sua <span className="text-fitwell-orange">saúde</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-fitwell-orange flex-shrink-0" />
                  <p className="text-white/90">
                    {beneficio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estética é consequência */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Aqui, a estética é consequência.
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Nosso compromisso é com sua saúde. Se o seu objetivo também envolve melhorar o corpo, ótimo. Mas fazemos questão de que cada aluno entenda que o exercício é um ato de cuidado consigo mesmo — com o corpo e com a mente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Comece agora
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-fitwell-dark/80">Se você nunca treinou, tá tudo bem.</p>
              <p className="text-lg text-fitwell-dark/80">Se você parou e quer voltar, melhor ainda.</p>
              <p className="text-lg text-fitwell-dark/80">Se você quer evoluir com acompanhamento, aqui é o lugar.</p>
            </div>
            <p className="text-lg text-fitwell-dark/80 mb-8">
              👉 Clique abaixo e venha fazer uma avaliação gratuita com nossa equipe.
            </p>
            <Button variant="hero" size="xl">
              Quero agendar minha visita
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Musculacao;