import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Baby, GraduationCap, Users, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import natacaoImg from "@/assets/modalidades/natacao.jpg";

const Natacao = () => {
  const modalidades = [
    {
      icon: Baby,
      title: "Natação para Bebês",
      description: "Aulas especiais para bebês a partir de 1 ano, com metodologia própria e acompanhamento dos pais",
      color: "bg-fitwell-blue-light",
      link: "/natacao-bebe"
    },
    {
      icon: GraduationCap,
      title: "Natação Infantil",
       description: (
    <>
      Metodologia <span style={{ color: "#5DD8EB", fontWeight: 600  }}>Tibum</span> com mais de 30 anos de experiência, respeitando o tempo de cada criança
    </>
  ),
      color: "bg-fitwell-orange",
      link: "/natacao-infantil"
    },
    {
      icon: Users,
      title: "Natação Adulta",
      description: "Para todos os níveis, desde iniciantes até quem busca aprimoramento técnico ou condicionamento físico.",
      color: "bg-fitwell-blue",
      link: "/natacao-adulta"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={natacaoImg} 
            alt="Natação na Fitwell"
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
            NATAÇÃO <span className="text-fitwell-blue-light">FITWELL</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            É considerada um dos exercícios mais completos por movimentar grande parte dos músculos e articulações do corpo
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              A natação oferece múltiplos benefícios, melhorando a saúde cardiovascular, a capacidade respiratória e a flexibilidade, além de fortalecer os músculos e promover a saúde mental
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed">
              Ela auxilia no controle de peso, na melhora da postura e no crescimento saudável ao movimentar o corpo por inteiro. Promove a segurança no meio aquatico e aumento da auto estima nos praticantes deste esporte.
            </p>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-16 bg-fitwell-blue-light/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-4">
              Conheça os diferentes tipos e níveis de nossas aulas bem como seus benefícios.
            </h2>
            <p className="text-xl text-fitwell-dark/70">
              <span className="text-fitwell-blue font-semibold">Natação para todas as idades</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modalidades.map((modalidade, index) => {
              const IconComponent = modalidade.icon;
              
              return (
                <Link key={index} to={modalidade.link}>
                  <Card className="group hover:shadow-elegant hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border-0 overflow-hidden h-full">
                    <div className={`${modalidade.color} h-2`}></div>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={natacaoImg} 
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
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Natacao;