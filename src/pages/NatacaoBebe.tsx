import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Baby, Heart, Brain, Waves, Moon, Wind, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import natacaoImg from "@/assets/modalidades/natacao.jpg";

const NatacaoBebe = () => {
  const beneficios = [
    {
      icon: Waves,
      title: "Contato positivo com a água desde cedo",
      description: "Familiarização natural e segura com o ambiente aquático"
    },
    {
      icon: Brain,
      title: "Estímulos motores, sensoriais e cognitivos",
      description: "Desenvolvimento integral do sistema nervoso"
    },
    {
      icon: Heart,
      title: "Fortalecimento do vínculo",
      description: "Com quem está na água (pais ou responsáveis)"
    },
    {
      icon: Waves,
      title: "Atividades lúdicas",
      description: "Que estimulam autonomia e confiança"
    },
    {
      icon: Moon,
      title: "Melhora na qualidade do sono e do apetite",
      description: "Relaxamento e bem-estar natural"
    },
    {
      icon: Wind,
      title: "Desenvolvimento da respiração",
      description: "E do sistema cardiorrespiratório"
    },
    {
      icon: Shield,
      title: "Redução da ansiedade de separação",
      description: "Principalmente nos primeiros anos"
    }
  ];

  const diferenciais = [
    "Professores experientes em bebês e formação contínua",
    "Piscina aquecida, limpa e com equipamentos adequados pra trabalhar com essa idade",
    "Ritmo respeitado: sem forçar, sem pressão",
    "Aulas com a presença dos pais na água, fortalecendo vínculos",
    "Atividades lúdicas com músicas e brinquedos pedagógicos",
    "Turmas reduzidas, com atenção individualizada",
    "Ambiente acolhedor, familiar e preparado para receber seu bebê com todo cuidado"
  ];

  const depoimentos = [
    "Foi o momento mais especial da nossa semana.",
    "Meu bebê ficou mais tranquilo, dorme melhor e ama a piscina.",
    "Me senti segura desde o primeiro dia. É um ambiente de confiança."
  ];

  const beneficiosFuturos = [
    "Maior desenvolvimento motor e neurológico",
    "Crianças mais seguras na água desde cedo",
    "Estímulo à coordenação, equilíbrio e percepção corporal",
    "Vínculo emocional mais forte com os pais",
    "Criação de hábitos saudáveis desde os primeiros anos"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={natacaoImg} 
            alt="Natação para Bebês na Fitwell"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fitwell-dark/80 to-fitwell-dark/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-white">
          <Link to="/natacao" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Voltar para Natação
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Baby className="w-12 h-12 text-fitwell-blue-light" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Natação para <span className="text-fitwell-blue-light">Bebês</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            O primeiro mergulho na água é também um mergulho no cuidado, no vínculo e no desenvolvimento.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              A natação para bebês é muito mais do que um momento "fofo" na piscina — é uma experiência rica em estímulos, emoções e descobertas.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Na Fitwell, esse momento é vivido com toda a atenção, carinho e segurança que seu bebê merece.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed">
              Oferecemos aulas especialmente pensadas para bebês a partir de 1 ano de idade, com metodologia própria e acompanhamento de perto pelos professores — sempre com o acolhimento da presença dos pais ou responsáveis na água.
            </p>
          </div>
        </div>
      </section>

      {/* O que seu bebê vivencia */}
      <section className="py-16 bg-fitwell-blue-light/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
            O que seu bebê vivencia na natação?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => {
              const IconComponent = beneficio.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-fitwell-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-fitwell-dark mb-3">
                      {beneficio.title}
                    </h3>
                    <p className="text-fitwell-dark/70 leading-relaxed">
                      {beneficio.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por que escolher a Fitwell */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
              Por que escolher a Fitwell?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {diferenciais.map((diferencial, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-fitwell-blue-light/10 rounded-lg">
                  <div className="bg-fitwell-blue-light rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <Baby className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-fitwell-dark/80 leading-relaxed">
                    {diferencial}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-fitwell-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O que os pais costumam dizer?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <Card key={index} className="bg-white/10 border-0 text-white">
                  <CardContent className="p-6">
                    <p className="text-lg italic leading-relaxed">
                      "{depoimento}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios reais */}
      <section className="py-16 bg-fitwell-blue-light/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
              Benefícios reais, agora e no futuro
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beneficiosFuturos.map((beneficio, index) => (
                <div key={index} className="flex items-center gap-3 p-4">
                  <div className="bg-fitwell-blue-light rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <Baby className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-fitwell-dark/80 leading-relaxed">
                    {beneficio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Um espaço onde o bebê é ouvido */}
      <section className="py-16 bg-gradient-to-r from-fitwell-blue-light to-fitwell-blue-light/80 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Um espaço onde o bebê é ouvido (mesmo sem falar)
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Sabemos que cada bebê reage à água de um jeito. Alguns logo se soltam, outros levam mais tempo.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Na Fitwell, não existe pressa. Existe escuta, empatia e respeito.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Criamos um ambiente onde pais e filhos se sentem à vontade para viver esse momento juntos — com afeto e segurança.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Quer viver esse momento com seu bebê?
            </h2>
            <p className="text-lg text-fitwell-dark/80 mb-8">
              Agende uma aula de natação para bebês e veja de perto como a água pode ser um espaço de vínculo e desenvolvimento.
            </p>
            <Button variant="hero" size="xl">
              Quero agendar uma aula de natação para bebês
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NatacaoBebe;