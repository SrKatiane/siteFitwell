import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Music, Smile, Users, GraduationCap, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fitdanceImg from "@/assets/modalidades/fitdance.jpg";

const FitDance = () => {
  const diferenciais = [
    {
      icon: Music,
      title: "Ambiente leve e descontraído",
      description: "sem julgamentos"
    },
    {
      icon: Smile,
      title: "Aulas com músicas atuais",
      description: "e coreografias acessíveis"
    },
    {
      icon: Users,
      title: "Sem cobrança por performance",
      description: "só movimento e diversão"
    },
    {
      icon: GraduationCap,
      title: "Turmas animadas e acolhedoras",
      description: "com pessoas de todas as idades"
    },
    {
      icon: Heart,
      title: "Professores preparados",
      description: "para ensinar do básico ao avançado"
    },
    {
      icon: Zap,
      title: "Dança com propósito",
      description: "queima calórica, resistência e coordenação"
    }
  ];

  const paraQuem = [
    "Quem nunca gostou de academia tradicional, mas quer se movimentar",
    "Quem quer perder peso, ganhar resistência e melhorar a autoestima",
    "Quem sente que precisa liberar tensões e melhorar o humor",
    "Quem busca uma atividade física com mais leveza e alegria"
  ];

  const beneficios = [
    "Queima calórica e melhora do condicionamento físico",
    "Fortalecimento muscular (principalmente pernas e core)",
    "Melhora da coordenação motora e equilíbrio",
    "Liberação de endorfina (o hormônio do bem-estar)",
    "Redução do estresse e melhora do sono",
    "Elevação da autoestima",
    "Estímulo à socialização e à autoconfiança"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={fitdanceImg} 
            alt="FitDance na Fitwell"
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
            Ritmos e <span className="text-fitwell-orange">FitDance</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Dançar é se exercitar com alegria. E aqui, alegria é saúde.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Muita gente acha que exercício físico precisa ser cansativo, repetitivo ou solitário.
              Na Fitwell, a gente mostra que pode ser diferente: com música alta, energia boa e um sorriso no rosto do começo ao fim.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              As aulas de Ritmos e FitDance são ideais pra quem quer se mexer, suar e se divertir. Cada passo é uma forma de liberar o estresse, fortalecer o corpo e ativar a mente.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed font-semibold">
              E o melhor? Não precisa saber dançar! Basta querer se movimentar e sentir o ritmo.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-fitwell-orange/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
            Por que dançar na <span className="text-fitwell-orange">Fitwell</span>?
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
                <div key={index} className="flex items-start gap-4 p-6 bg-fitwell-orange/10 rounded-lg">
                  <div className="bg-fitwell-orange rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <Music className="w-4 h-4 text-white" />
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
              Benefícios da dança para a <span className="text-fitwell-orange">saúde</span>
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

      {/* Na Fitwell, o palco é seu */}
      <section className="py-16 bg-gradient-to-r from-fitwell-orange to-fitwell-orange-light text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Na Fitwell, o palco é seu.
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Aqui, ninguém precisa ser dançarino profissional.
              A gente dança pra se sentir bem, pra rir, pra suar e pra viver com mais leveza.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Cada aula é um momento pra esquecer os problemas, se conectar com o corpo e voltar pra casa com a alma mais leve.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Topa entrar no ritmo?
            </h2>
            <p className="text-lg text-fitwell-dark/80 mb-6">
              As aulas acontecem em horários variados, com turmas para diferentes níveis.
            </p>
            <p className="text-lg text-fitwell-dark/80 mb-8">
              Você pode agendar uma aula experimental gratuita e vir dançar com a gente — sem pressão, só com diversão.
            </p>
            <Button variant="hero" size="xl">
              Quero experimentar uma aula de dança
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FitDance;