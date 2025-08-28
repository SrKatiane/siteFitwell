import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Calendar, Target, Heart, Shield, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProgramaAdaptacao = () => {
  const paraQuem = [
    "Para quem está começando agora ou há muito tempo sem treinar",
    "Para quem tem medo de se machucar, se sentir perdido(a) ou inseguro(a)",
    "Para quem quer ser acolhido e orientado desde o primeiro dia", 
    "Para quem precisa de atenção, empatia e um plano claro pra evoluir com saúde"
  ];

  const etapasPrograma = [
    {
      icon: Users,
      title: "Avaliação inicial individualizada",
      description: "com escuta ativa e zero pressa"
    },
    {
      icon: Target,
      title: "Testes de mobilidade",
      description: "e identificação de limitações ou dores"
    },
    {
      icon: Heart,
      title: "Mapeamento de sintomas",
      description: "e histórico de saúde"
    },
    {
      icon: MapPin,
      title: "Orientação sobre modalidades",
      description: "mais adequadas para você"
    },
    {
      icon: Calendar,
      title: "Plano de treino personalizado",
      description: "com acompanhamento próximo nos primeiros dias"
    },
    {
      icon: Shield,
      title: "Apoio contínuo do professor",
      description: "com espaço para dúvidas, ajustes e evolução gradual"
    }
  ];

  const diferenciais = [
    "Você não treina sozinho(a): tem sempre alguém por perto",
    "Professores com olhar humano e técnico ao mesmo tempo", 
    "Zero pressão estética. Aqui, saúde vem primeiro",
    "Integração com fisioterapeuta e nutricionista, se precisar de suporte extra",
    "Ambiente acolhedor, com pessoas de verdade e histórias reais"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="bg-fitwell-orange text-white px-6 py-3 rounded-full text-lg font-semibold">
                🤝 Programa de Adaptação aos Exercícios
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Todo mundo tem um começo. 
              <span className="block text-fitwell-orange-light">O nosso é com você, do seu jeito.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              A gente sabe que dar o primeiro passo nem sempre é fácil.
            </p>
            
            <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Talvez você esteja voltando depois de muito tempo parado(a). Talvez nunca tenha frequentado uma academia. Talvez já tenha tentado, mas não se sentiu à vontade, julgado(a), ou sem acompanhamento.
            </p>
            
            <p className="text-xl mb-12 text-white/90 font-medium">
              É por isso que criamos o <strong>Programa de Adaptação aos Exercícios da Fitwell</strong> — um jeito seguro, tranquilo e respeitoso de entrar no universo do movimento, com apoio completo e atenção real.
            </p>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-12 text-center">
              Pra quem é esse programa?
            </h2>
            
            <div className="grid gap-6">
              {paraQuem.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-fitwell-orange">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-fitwell-orange mt-1 flex-shrink-0" />
                      <p className="text-lg text-fitwell-dark">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que acontece no programa */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-4 text-center">
              O que acontece no Programa de Adaptação?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {etapasPrograma.map((etapa, index) => {
                const IconComponent = etapa.icon;
                return (
                  <Card key={index} className="group hover:shadow-elegant hover:transform hover:scale-105 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="bg-fitwell-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-fitwell-orange/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-fitwell-orange" />
                      </div>
                      <h3 className="text-xl font-bold text-fitwell-dark mb-3">
                        {etapa.title}
                      </h3>
                      <p className="text-fitwell-dark/70 leading-relaxed">
                        {etapa.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-4 text-center">
              O diferencial <span className="text-fitwell-orange">Fitwell</span>:
            </h2>
            
            <div className="space-y-6 mt-12">
              {diferenciais.map((diferencial, index) => (
                <div key={index} className="flex items-start space-x-4 bg-muted/20 p-6 rounded-lg">
                  <div className="bg-fitwell-orange rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-fitwell-dark leading-relaxed">{diferencial}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por que existe */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Por que esse programa existe?
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl leading-relaxed">
              <p className="text-white/90">
                Porque a gente acredita que todo mundo merece se sentir bem no próprio corpo, sem vergonha, medo ou julgamento.
              </p>
              
              <p className="text-white/90">
                Porque sabemos que o cuidado com a saúde é um processo — e que cada jornada é única.
              </p>
              
              <p className="text-white/90">
                E porque queremos que você goste de se exercitar, não só se obrigue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Está pronto(a) para cuidar de você com mais carinho?
            </h2>
            
            <p className="text-xl text-fitwell-dark/80 mb-12">
              Agende sua avaliação gratuita e venha viver a sua própria adaptação: no seu ritmo, com a nossa atenção.
            </p>
            
            <Button size="xl" className="bg-fitwell-orange hover:bg-fitwell-orange/90">
              Quero agendar minha avaliação
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramaAdaptacao;