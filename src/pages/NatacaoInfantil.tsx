import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Users, Trophy, Heart, Star, Zap, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import natacaoImg from "@/assets/modalidades/natacao.jpg";

const NatacaoInfantil = () => {
  const niveis = [
    {
      icon: Shield,
      title: "Adaptação 1",
      description: "Para crianças que precisam perder o medo da água e iniciar o desenvolvimento dos domínios básicos aquáticos."
    },
    {
      icon: Heart,
      title: "Adaptação 2", 
      description: "Para crianças que já têm algum domínio, mas precisam de aulas mais lúdicas e dinâmicas, preparando o terreno para a técnica."
    },
    {
      icon: Zap,
      title: "Aprendizado 1",
      description: "Introdução às técnicas de nado: crawl, costas, peito e golfinho — com foco na autonomia."
    },
    {
      icon: Trophy,
      title: "Aprendizado 2",
      description: "Aprimoramento técnico e evolução de desempenho com iniciação às competições (caso queiram)."
    }
  ];

  const diferenciais = [
    {
      icon: Star,
      title: "Metodologia própria",
      description: "testada e validada com mais de 28 anos de prática"
    },
    {
      icon: GraduationCap,
      title: "Professores treinados", 
      description: "exclusivamente no método Tibum"
    },
    {
      icon: Heart,
      title: "Aulas lúdicas",
      description: "seguras e estruturadas, nada de improviso"
    },
    {
      icon: Shield,
      title: "Piscina aquecida",
      description: "limpa e confortável para crianças"
    },
    {
      icon: Trophy,
      title: "Avaliações periódicas",
      description: "e acompanhamento de progresso"
    },
    {
      icon: Users,
      title: "Pais acompanham",
      description: "de perto cada etapa, com feedback e envolvimento"
    },
    {
      icon: Star,
      title: "Conquistas celebradas",
      description: "com alegria e reconhecimento"
    },
    {
      icon: Globe,
      title: "Conteúdo além da técnica",
      description: "segurança aquática, inclusão social e consciência ambiental com o 'Reino encantado de Azulia'"
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
            alt="Natação Infantil na Fitwell"
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
            <GraduationCap className="w-12 h-12 text-fitwell-orange" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Natação <span className="text-fitwell-orange">Infantil</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Nadar é mais do que uma habilidade. É segurança, autonomia e alegria.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Na Fitwell, não oferecemos apenas aulas de piscina, somos uma escola de natação com metodologia própria: o <span className="text-fitwell-orange font-semibold">Programa Tibum</span>.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Com mais de 30 anos de experiência, desenvolvemos uma metodologia única, que combina ludicidade com técnica, promovendo o domínio do meio aquático de forma segura, divertida e progressiva, respeitando o tempo de cada criança.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed">
              Aqui, aprender a nadar é natural, estruturado e encantador. Cada etapa é celebrada. Cada conquista é uma vitória, sua e do seu filho.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologia Tibum */}
      <section className="py-16 bg-fitwell-orange/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-4">
              Metodologia <span className="text-fitwell-orange">Tibum</span> – Nadar com propósito
            </h2>
            <p className="text-xl text-fitwell-dark/70 max-w-3xl mx-auto">
              Mais do que brincar na água. É aprender com método, segurança e significado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-fitwell-dark/80 leading-relaxed text-center">
              A metodologia Tibum foi criada para garantir que a criança desenvolva, com confiança, todas as habilidades necessárias para se sentir segura e à vontade na água.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-fitwell-dark/80 leading-relaxed text-center">
              Tudo acontece em <span className="text-fitwell-orange font-semibold">4 níveis evolutivos</span>, a partir dos 3 anos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {niveis.map((nivel, index) => {
              const IconComponent = nivel.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-fitwell-orange rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-fitwell-dark mb-3">
                      {nivel.title}
                    </h3>
                    <p className="text-fitwell-dark/70 text-sm leading-relaxed">
                      {nivel.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
            Diferenciais do Tibum e da Fitwell como <span className="text-fitwell-orange">Escola de Natação</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((diferencial, index) => {
              const IconComponent = diferencial.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="bg-fitwell-orange rounded-full w-10 h-10 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-fitwell-dark mb-2">
                      {diferencial.title}
                    </h3>
                    <p className="text-fitwell-dark/70 text-sm leading-relaxed">
                      {diferencial.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reino de Azulia */}
      <section className="py-16 bg-gradient-to-r from-fitwell-orange to-fitwell-orange/80 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Um mundo encantador e educativo
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Uma vez por mês, as crianças mergulham no <span className="font-semibold">"Reino encantado de Azulia"</span>, uma narrativa envolvente que ensina valores importantes, tornando a experiência ainda mais mágica.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Nada de aulas repetitivas — aqui o aprendizado é natural, envolvente e significativo.
            </p>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-16 bg-fitwell-orange/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Aqui, cada criança é única. E cada avanço, motivo de festa.
            </h2>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-6">
              Na Fitwell, seu filho aprende no próprio tempo, sem pressão, sem comparações e com total segurança emocional.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed">
              Acreditamos que aprender a nadar é uma habilidade pra vida toda — e deve ser ensinada com responsabilidade e afeto.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Quer garantir um futuro mais seguro e saudável pro seu filho?
            </h2>
            <p className="text-lg text-fitwell-dark/80 mb-8">
              Venha conhecer a Metodologia Tibum de perto.
            </p>
            <Button variant="hero" size="xl">
              Quero agendar a aula de natação infantil
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NatacaoInfantil;