import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Zap, Users, BarChart3, Dumbbell, Brain, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import funcionalImg from "@/assets/modalidades/funcional.jpg";

const Funcional = () => {
  const diferenciais = [
    {
      icon: Dumbbell,
      title: "Checkup inicial e periódicos",
      description: "Para garantir um treino que respeita seu corpo e seu momento atua"
    },
    {
      icon: BarChart3,
      title: "Avaliação física antes de começar",
      description: "pra garantir um treino que respeita seu corpo"
    },
    {
      icon: Zap,
      title: "Movimentos funcionais e naturais",
      description: "com foco em mobilidade, força, equilíbrio e resistência"
    },
    {
      icon: Users,
      title: "Aulas dinâmicas",
      description: "com equipamentos variados e zero monotonia"
    },
    {
      icon: Brain,
      title: "Acompanhamento por professores preparados",
      description: "que explicam e corrigem"
    },
    {
      icon: HandHeart,
      title: "Ambiente acolhedor",
      description: "sem competição, sem julgamentos"
    }
  ];

  const paraQuem = [
    "Pessoas que querem melhorar o desempenho no dia a dia (carregar peso, agachar, levantar com mais facilidade)",
    "Quem busca um treino mais dinâmico e divertido que o tradicional",
    "Quem precisa prevenir lesões e melhorar postura",
    "Alunos de qualquer idade, inclusive iniciantes",
    "Quem quer resultados reais com movimento inteligente"
  ];

  const beneficios = [
    "Aumenta a força geral e a resistência muscular",
    "Melhora a postura e o equilíbrio",
    "Ajuda na queima de gordura e acelera o metabolismo",
    "Prepara o corpo para os desafios diários",
    "Melhora o foco e reduz o estresse",
    "Fortalece articulações e previne lesões",
    "Desenvolve agilidade e consciência corporal"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/FUNCIONAL 3.jpg" 
            alt="Treinamento Funcional na Fitwell"
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
            Treinamento <span className="text-fitwell-orange">Funcional</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Funcional é viver com mais força, mobilidade e liberdade.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Sabe aquele tipo de exercício que faz sentido na vida real? Que te ajuda a carregar as sacolas, subir escadas sem cansar, ter postura no trabalho ou brincar com os filhos sem dores?
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Esse é o treinamento funcional: um método que simula movimentos do dia a dia, fortalece o corpo como um todo e melhora o que realmente importa — sua qualidade de vida.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed">
              Na Fitwell, o funcional é adaptado à sua realidade. Não importa se você está começando agora ou se já treina há anos: aqui, a gente te acompanha de perto, com segurança e evolução constante.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-fitwell-orange/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
            Diferenciais do funcional na <span className="text-fitwell-orange">Fitwell</span>
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
              Pra quem é o funcional?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paraQuem.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-fitwell-orange/10 rounded-lg">
                  <div className="bg-fitwell-orange rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-white" />
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
              Benefícios do treino <span className="text-fitwell-orange">funcional</span>
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

      {/* Na Fitwell, funcional é sinônimo de autonomia */}
      <section className="py-16 bg-gradient-to-r from-fitwell-orange to-fitwell-orange-light text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Na Fitwell, funcional é sinônimo de autonomia.
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              A gente acredita que envelhecer com saúde e viver com disposição é possível — e o funcional é uma ferramenta poderosa pra isso.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Cada movimento aqui tem um propósito: fazer você se sentir mais forte, mais livre e mais confiante no seu corpo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Quer começar?
            </h2>
            <p className="text-lg text-fitwell-dark/80 mb-8">
              Agende sua aula experimental gratuita e venha descobrir como o funcional pode transformar sua rotina.
            </p>
            <Button variant="hero" size="xl">
              Quero experimentar o funcional
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Funcional;