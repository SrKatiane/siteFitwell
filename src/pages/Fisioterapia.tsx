import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Stethoscope, Bed, Ban, TrendingDown, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fisioterapiaImg from "@/assets/modalidades/fisioterapia.jpg";

const Fisioterapia = () => {
  const paraQuem = [
    {
      icon: Bed,
      title: "Pessoas com dores agudas, lesões, limitações físicas ou em pós-operatório"
    },
    {
      icon: Ban,
      title: "Alunos que, por orientação médica, não devem realizar exercício físico sem reabilitação"
    },
    {
      icon: TrendingDown,
      title: "Quem perdeu mobilidade ou está com dificuldade de realizar movimentos simples no dia a dia"
    },
    {
      icon: UserCheck,
      title: "Quem precisa de ajuda especializada para voltar a se movimentar com segurança"
    }
  ];

  const comoFunciona = [
    "Plano de tratamento individualizado, focado em alívio da dor e recuperação funcional",
    "Uso de técnicas manuais, recursos terapêuticos e exercícios específicos",
    "Atendimento direto com o fisioterapeuta, dentro da estrutura da Fitwell"
  ];

  const beneficios = [
    "Atendimento prático e sem deslocamento",
    "Continuidade no cuidado, mesmo em momentos de dor",
    "Integração com outras áreas da saúde: nutrição, pilates, musculação",
    "Espaço seguro, limpo, acessível e acolhedor",
    "Quando estiver liberado, você pode continuar seu plano de fortalecimento conosco"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={fisioterapiaImg} 
            alt="Fisioterapia na Fitwell"
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
            <span className="text-fitwell-blue-light">Fisioterapia</span> na Fitwell
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Quando a dor aparece, o cuidado precisa ser rápido, técnico e individual.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Lesões musculares, dores articulares, pós-operatórios, inflamações… São situações que exigem atenção especializada e imediata. E é por isso que a Fitwell oferece, dentro da sua estrutura, uma sala de fisioterapia completa, pensada para facilitar o acesso ao cuidado certo, no momento certo.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed">
              Aqui, a fisioterapia é oferecida por um fisioterapeuta parceiro, com atendimento clínico direto, dentro do nosso espaço. Isso significa mais comodidade, agilidade e a possibilidade de, quando liberado, o aluno seguir cuidando da saúde com nossas modalidades preventivas, como musculação, pilates ou funcional.
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é indicada */}
      <section className="py-16 bg-fitwell-blue-light/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
            Pra quem é indicada a <span className="text-fitwell-blue-light">fisioterapia</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {paraQuem.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-fitwell-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-fitwell-dark/80 leading-relaxed">
                      {item.title}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
              Como funciona?
            </h2>
            
            <div className="space-y-6 mb-12">
              {comoFunciona.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-fitwell-blue-light/10 rounded-lg">
                  <div className="bg-fitwell-blue-light rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-fitwell-dark/80 leading-relaxed text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Importante */}
            <div className="bg-fitwell-orange/10 border-l-4 border-fitwell-orange p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-fitwell-dark mb-3">
                💡 Importante:
              </h3>
              <p className="text-fitwell-dark/80 leading-relaxed">
                A fisioterapia não é oferecida diretamente pela Fitwell, mas sim por um profissional credenciado que atua no nosso espaço. O ambiente é completo, confortável e totalmente equipado — e você não precisa se deslocar para outro local para fazer o seu tratamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-fitwell-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Benefícios para <span className="text-fitwell-blue-light">você</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-fitwell-blue-light flex-shrink-0" />
                  <p className="text-white/90">
                    {beneficio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A gente cuida do agora */}
      <section className="py-16 bg-gradient-to-r from-fitwell-blue-light to-fitwell-blue-light/80 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              A gente cuida do agora, pensando no depois.
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              O foco da fisioterapia é te ajudar a sair da dor, recuperar o movimento e voltar à sua rotina com mais conforto.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Mas também queremos que você não volte a sentir tudo isso novamente. Por isso, quando você estiver pronto(a), nosso time está aqui para te ajudar a evoluir com segurança nas outras modalidades da Fitwell.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Precisa de atendimento fisioterapêutico?
            </h2>
            <p className="text-lg text-fitwell-dark/80 mb-8">
              Agende sua avaliação com o fisioterapeuta parceiro e comece seu tratamento no nosso espaço, com toda a estrutura que você precisa.
            </p>
            <Button variant="hero" size="xl">
              Agendar avaliação com fisioterapeuta
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fisioterapia;