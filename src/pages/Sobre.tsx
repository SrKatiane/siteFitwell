import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, MapPin, Users, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  const diferenciais = [
    "Atendemos diferentes faixas etárias o que nos qualifica como \"academia família\".",
    "Temos modalidades tanto na área seca como aquática possibilitando que, num mesmo local e momento aconteçam atividades para gostos e necessidades diferentes.",
    "Temos \"idade\" suficiente para nos considerar \"experientes\" e seguimos investindo em melhorias estruturais, tecnológicas e qualificação pensando sempre no presente e futuro.",
    "Possuímos um checkup inicial e periódico que melhor direciona nosso cliente/aluno às suas necessidades e ao resultado desejado, com maior confiança e assertividade."
  ];

  const equipeAdministrativa = [
    { nome: "Marilda Mengue Rocha", cargo: "Diretora", foto: "/Marilda.png"},
    { nome: "Danielle Mantovaneli", cargo: "Coordenadora Geral" },
    { nome: "Magda Cabral", cargo: "Coordenadora Técnica do Setor Aquático" },
    { nome: "Neuza Collorio", cargo: "Financeiro" },
    { nome: "Miriam Bernardes", cargo: "Administrativo" },
    { nome: "Silvana Cardoso", cargo: "Consultora de vendas" },
    { nome: "Crisele Cordeiro", cargo: "Consultora de vendas" },
    { nome: "Eva Maria Dahring", cargo: "Setor de Limpeza" },
    { nome: "Flávlia dos Santos", cargo: "Setor Limpeza" }
  ];

  const equipePedagogica = [
    { nome: "Marilda Mengue Rocha", cargo: "Ginástica" },
    { nome: "Danielle Mantovaneli", cargo: "Natação e hidro Hiit" },
    { nome: "Magda Cabral", cargo: "Natação e hidroginástica" },
    { nome: "Jose Costa Neto", cargo: "Treinamento físico (musculação)" },
    { nome: "Rocio Falcon", cargo: "Natação, Pilates e treinamento físico" },
    { nome: "Paulo Correa", cargo: "Natação" },
    { nome: "Cleide Godoy", cargo: "Natação" },
    { nome: "Patricia Athaydes", cargo: "Natação" },
    { nome: "Eduardo Mundstock", cargo: "Treinamento físico (musculação)" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/DSC_3408 (2).jpg"
            alt="Natação na Fitwell"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fitwell-dark/80 to-fitwell-dark/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-fitwell-orange">Espaço Fitwell</span> em Canela
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
              42 anos transformando vidas através da saúde e bem-estar
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8 text-center">
              <Target className="w-8 h-8 text-fitwell-orange inline mr-3" />
              Nossa História
            </h2>
            
            <div className="space-y-6 text-lg text-fitwell-dark/80">
              <p>
                A Espaço Fitwell surgiu do sonho de uma bailarina em divulgar a arte da dança Jazz. Com o tempo esse sonho se tornou maior.
              </p>
              
              <p>
                Hoje nosso propósito é entregar saúde, auto estima e bem estar a todas as pessoas que buscam melhorar sua vida, tanto a nível de qualidade, quantidade de anos a viver e prazer com sua saúde e estética.
              </p>
              
              <p>
                Hoje, com 42 anos de vida e experiência, a Fitwell já pode dizer o que realmente funciona para entregar às pessoas o que elas PRECISAM.
              </p>
              
              <p>
                Sempre buscando profissionais de mesmo perfil, a Fitwell Canela mantêm-se firme no mercado de Musculação e Natação em Canela, estando sempre à frente de seu tempo, equipando-se, criando novos produtos e buscando tecnologia, sustentabilidade, além de resultado e conforto para seus clientes. Orgulha-se de ser a mais antiga (desde 1983) e por oferecer um leque variado de atividades num mesmo "espaço" podendo atender todas as idades de todas as famílias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Espaço */}
      <section className="py-16 bg-fitwell-blue-light/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8 text-center">
              <MapPin className="w-8 h-8 text-fitwell-orange inline mr-3" />
              Nosso Espaço
            </h2>
            
            <div className="space-y-6 text-lg text-fitwell-dark/80">
              <p>
                Em 1000m² dispomos de recepção, sala de estar, sala de treinamento físico (conhecida "musculação"), sala de atividades em grupo, piscina térmica (8m x 16m x 1,35 de profundidade), clínica de Fisioterapia e Pilates (parceria), sala de avaliação física e atendimento nutricional.
              </p>
              
              <p>
                Dispomos de 8 vestiários (maioria com chuveiros) para todas as modalidades. Destaca-se nosso vestiário infantil para uso familiar, estruturado e com layout para nossos pequenos. Também dispomos de espaços para que os pais possam assistir seus filhos na água ou esperar pelo término das aulas.
              </p>
              
              <p>
                A piscina térmica é tratada pelo processo de salinização, permitindo melhor qualidade à água, principalmente para alérgicos ao cloro. O aquecimento da água é feito através de gerador de calor pela queima de "pellets", uma das formas mais modernas de energia limpa e reciclada. A temperatura média de nossa água fica entre 30 a 31 no verão e 31 a 32 no inverno.
              </p>
              
              <p>
                Tanto na parte seca como aquática, temos também professores para atividades individualizadas e personalizadas. Além disso, atendemos portadores de necessidades especiais, que são direcionados à inclusão ou ao trabalho personalizado, conforme o caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8 text-center">
              <Award className="w-8 h-8 text-fitwell-orange inline mr-3" />
              Nossos Diferenciais
            </h2>
            
            <div className="grid gap-6">
              {diferenciais.map((diferencial, index) => (
                <Card key={index} className="border-l-4 border-l-fitwell-orange">
                  <CardContent className="p-6">
                    <p className="text-fitwell-dark/80 leading-relaxed">
                      {diferencial}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 bg-fitwell-orange-lighter/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-4 text-center">
              <Users className="w-8 h-8 text-fitwell-orange inline mr-3" />
              Nossa Equipe Fitwell
            </h2>
            <p className="text-center text-fitwell-dark/80 mb-12 text-lg">
              Somos dedicados a auxiliar nossos clientes a obter a melhor experiência e resultados dentro do nosso espaço. Nossa preocupação está na saúde e bem estar de todos.
            </p>
            
            {/* Equipe Administrativa */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-fitwell-dark mb-8 text-center">Equipe Administrativa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipeAdministrativa.map((membro, index) => (
                  <Card key={index} className="overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-lg bg-white border border-gray-200/30">
                    <CardContent className="p-0">
                      {index === 0 ? (
                        <div className="flex flex-col">
                          <div className="h-80 overflow-hidden">
                            <img 
                              src="/Marilda.png" 
                              alt="Marilda Mengue Rocha"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6 text-center">
                            <h4 className="font-bold text-fitwell-dark text-lg mb-2">{membro.nome}</h4>
                            <p className="text-gray-600 text-sm">{membro.cargo}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          <div className="h-64 bg-gray-50 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fitwell-orange to-fitwell-blue-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Users className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="p-6 text-center">
                            <h4 className="font-bold text-fitwell-dark text-lg mb-2">{membro.nome}</h4>
                            <p className="text-gray-600 text-sm">{membro.cargo}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Equipe Pedagógica */}
            <div>
              <h3 className="text-2xl font-bold text-fitwell-dark mb-8 text-center">Equipe Pedagógica</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipePedagogica.map((membro, index) => (
                  <Card key={index} className="overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-lg bg-white border border-gray-200/30">
                    <CardContent className="p-0">
                      <div className="flex flex-col">
                        <div className="h-64 bg-gray-50 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fitwell-blue-light to-fitwell-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Award className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="p-6 text-center">
                          <h4 className="font-bold text-fitwell-dark text-lg mb-2">{membro.nome}</h4>
                          <p className="text-gray-600 text-sm">{membro.cargo}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;