import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Waves, Users, Zap, Thermometer, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hidroginasticaImg from "@/assets/modalidades/hidroginastica.jpg";

const Hidroginastica = () => {
  const diferenciais = [
    {
      icon: Waves,
      title: "Turmas acolhedoras e respeitosas",
      description: "com instrutores que acompanham de verdade."
    },
    {
      icon: Users,
      title: "Ambiente perfeito para limitações físicas",
      description: "pessoas com dores crônicas ou na fase de recuperação."
    },
    {
      icon: Zap,
      title: "HidroHIIT para quem quer intensidade",
      description: "exercícios de alta intensidade e resultados rápidos."
    },
    {
      icon: Thermometer,
      title: "Piscina aquecida e limpa",
      description: "garantindo conforto em todas as estações."
    },
    {
      icon: Smile,
      title: "Aulas animadas",
      description: "com clima de amizade."
    }
  ];

  const paraQuemHidro = [
    "Pessoas que precisam melhorar a circulação sanguínea e a capacidade respiratória.",
    "Para quem busca fortalecimento muscular sem comprometer as articulações.",
    "Para quem deseja mais coordenação e flexibilidade.",
    "Para pessoas com hipertensão e querem se prevenir de doenças cardiovasculares.",
    "Para pessoas que buscam o bem estar e amam se sociabilizar."
  ];

  const paraQuemHiit = [
    "Quem busca queimar calorias com impacto reduzido.",
    "Alunos que gostam de treinos intensos e desafiadores.",
    "Pessoas que querem melhorar condicionamento e força rapidamente.",
    "Aqueles que não curtem o ambiente tradicional da musculação, mas querem treinar pesado."
  ];

  const beneficios = [
    "Melhora a circulação e reduz o inchaço",
    "Fortalece músculos com pouco impacto",
    "Aumenta flexibilidade e mobilidade",
    "Alivia dores nas articulações",
    "Traz sensação de leveza e bem-estar",
    "Estimula a socialização e reduz o estresse",
    "No caso do HidroHIIT: acelera o metabolismo e queima gordura"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/HIDRO 1.jpg" 
            alt="Hidroginástica na Fitwell"
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
            Hidroginástica e <span className="text-fitwell-blue-light">HidroHIIT</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Movimento, leveza e energia dentro d'água.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Na água, tudo flui melhor. Os impactos diminuem, as dores aliviam, o corpo se fortalece e a mente respira. A hidroginástica é ideal para quem quer cuidar da saúde de forma gentil, eficiente e — acima de tudo — prazerosa.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed">
              E pra quem busca mais intensidade e resultados em menos tempo, o HidroHIIT une o melhor do treinamento intervalado com a leveza e segurança da água. Na Fitwell, você encontra as duas opções, com aulas pensadas para cada fase da vida e cada nível de condicionamento.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-fitwell-blue-light/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
            Por que fazer hidro na <span className="text-fitwell-blue-light">Fitwell</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((diferencial, index) => {
              const IconComponent = diferencial.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-fitwell-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">
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

      {/* Para quem é - Duas seções */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Hidroginástica */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-fitwell-dark mb-8">
                  Pra quem é a <span className="text-fitwell-blue-light">Hidroginástica</span>?
                </h2>
                
                <div className="space-y-4">
                  {paraQuemHidro.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-fitwell-blue-light/10 rounded-lg">
                      <div className="bg-fitwell-blue-light rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <Waves className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-fitwell-dark/80 leading-relaxed text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* HidroHIIT */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-fitwell-dark mb-8">
                  Pra quem é o <span className="text-fitwell-orange">HidroHIIT</span>?
                </h2>
                
                <div className="space-y-4">
                  {paraQuemHiit.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-fitwell-orange/10 rounded-lg">
                      <div className="bg-fitwell-orange rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-fitwell-dark/80 leading-relaxed text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-fitwell-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Benefícios da <span className="text-fitwell-blue-light">Hidro</span> e <span className="text-fitwell-orange">HidroHIIT</span>
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

      {/* Na Fitwell, a água também acolhe */}
      <section className="py-16 bg-gradient-to-r from-fitwell-blue-light to-fitwell-blue-light/80 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Na Fitwell, a água também acolhe.
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Aqui, cada aula é um convite ao cuidado, ao movimento e ao prazer de se exercitar.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Nossos professores respeitam o ritmo de cada aluno e sabem como tornar a experiência segura, eficaz e divertida.
              Na piscina, todo mundo se sente leve — no corpo e na alma.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Quer fazer parte dessa energia?
            </h2>
            <p className="text-lg text-fitwell-dark/80 mb-6">
              Temos aulas de hidro em diferentes horários, com turmas diversas e animadas.
            </p>
            <p className="text-lg text-fitwell-dark/80 mb-8">
              Você pode agendar uma aula experimental gratuita e sentir na prática os benefícios da água.
            </p>
            <Button variant="hero" size="xl">
              Quero experimentar uma aula de hidro
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hidroginastica;