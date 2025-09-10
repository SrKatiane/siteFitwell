import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Apple, Users, Heart, Brain, CalendarCheck, UserCheck, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import nutricaoImg from "@/assets/modalidades/nutricao.jpg";

const Nutricao = () => {
  const comoFunciona = [
    {
      icon: Users,
      title: "Avaliação completa dos hábitos alimentares, objetivos e rotina",
      description: "Análise detalhada do seu estilo de vida"
    },
    {
      icon: Heart,
      title: "Elaboração de um plano alimentar personalizado, prático e realista",
      description: "Feito especialmente para você"
    },
    {
      icon: CalendarCheck,
      title: "Acompanhamento com ajustes conforme a evolução do aluno",
      description: "Monitoramento constante dos resultados"
    },
    {
      icon: UserCheck,
      title: "Atendimento direto com a nutricionista parceira",
      description: "Em sala exclusiva dentro da Fitwell"
    },
    {
      icon: Lightbulb,
      title: "Integração com professores e fisioterapeuta",
      description: "Cuidado completo e integrado"
    }
  ];

  const paraQuem = [
    "Quem deseja potencializar os resultados do treino",
    "Quem quer emagrecer com saúde e manter o peso",
    "Alunos com condições específicas como diabetes, hipertensão ou intolerâncias",
    "Quem precisa reorganizar hábitos e ter mais energia no dia a dia",
    "Famílias que buscam orientação para melhorar a alimentação em casa"
  ];

  const beneficios = [
    "Planejamento alimentar individualizado",
    "Melhora no desempenho físico e recuperação muscular",
    "Controle de ansiedade e compulsão alimentar",
    "Mais disposição, foco e imunidade",
    "Redução de inchaço, retenção e inflamações",
    "Apoio emocional e comportamental na construção de novos hábitos"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src= "/nutri.jpg"
            alt="Nutrição na Fitwell"
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
            <span className="text-fitwell-orange">Nutrição</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Alimentação equilibrada é parte essencial da sua saúde.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Exercício físico e boa alimentação caminham lado a lado. Não adianta treinar com dedicação e continuar se alimentando sem planejamento, sem equilíbrio ou sem entender o que o corpo realmente precisa.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Por isso, a Fitwell oferece, dentro da sua estrutura, um espaço exclusivo para atendimento nutricional, realizado por uma nutricionista parceira, especializada em saúde e performance.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed">
              Essa integração permite que você cuide do corpo por completo, com mais praticidade e consistência — e o melhor: tudo no mesmo lugar.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-fitwell-blue-light/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
            Como funciona o <span className="text-fitwell-blue-light">atendimento?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {comoFunciona.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-fitwell-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-fitwell-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-fitwell-dark/70 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-fitwell-orange/10 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="bg-fitwell-orange rounded-full w-8 h-8 flex items-center justify-center mb-3">
              <Lightbulb className="w-4 h-4 text-white" />
            </div>
            <p className="text-fitwell-dark/80 font-medium">
              <strong>Importante:</strong> o serviço de nutrição é realizado por uma profissional parceira, que atende dentro da estrutura da Fitwell. Não é um serviço próprio da academia, mas está aqui para facilitar sua rotina e oferecer o cuidado completo que você merece.
            </p>
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
                <div key={index} className="flex items-start gap-4 p-6 bg-fitwell-orange-lighter/30 rounded-lg">
                  <div className="bg-fitwell-orange rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <Apple className="w-4 h-4 text-white" />
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
              Benefícios do acompanhamento <span className="text-fitwell-orange">nutricional</span>
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

      {/* Na Fitwell, a nutrição faz parte do caminho */}
      <section className="py-16 bg-gradient-to-r from-fitwell-blue-light to-fitwell-blue-light/80 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Na Fitwell, a nutrição faz parte do caminho.
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Mais do que contar calorias ou seguir dietas restritivas, aqui você aprende a se alimentar com consciência e equilíbrio, sem culpa, sem extremismos.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              A nutricionista parceira atua com escuta, empatia e orientação realista, te ajudando a atingir seus objetivos com leveza e consistência.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Quer cuidar da sua alimentação com ajuda profissional?
            </h2>
            <p className="text-lg text-fitwell-dark/80 mb-8">
              Agende sua consulta com a nutricionista parceira e comece hoje mesmo a se alimentar melhor — com planejamento, sabor e propósito.
            </p>
            <Button variant="hero" size="xl">
              Agendar consulta com a nutricionista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nutricao;