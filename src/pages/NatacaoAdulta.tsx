import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Waves, Users, GraduationCap, Droplets, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import natacaoImg from "@/assets/modalidades/natacao.jpg";

const Natacao = () => {
  const diferenciais = [
    {
      icon: Waves,
      title: "Aulas para todos os níveis",
      description: "mesmo que você nunca tenha entrado numa piscina, aqui você é bem-vindo(a)."
    },
    {
      icon: Users,
      title: "Turmas reduzidas e atentas", 
      description: "isso garante segurança e atenção real dos nossos professores."
    },
    {
      icon: GraduationCap,
      title: "Professores qualificados e acolhedores",
      description: "que realmente acompanham seu progresso."
    },
    {
      icon: Droplets,
      title: "Piscina aquecida",
      description: "com utilização de biomassa (ecológica) numa temperatura sempre ideal.."
    },
    {
      icon: Heart,
      title: "Ambiente sem pressão ou julgamento",
      description: "Aqui, todo mundo tem seu tempo e seu porquê."
    }
  ];

  const paraQuem = [
    "Adultos que nunca aprenderam a nadar e querem vencer esse desafio.",
    "Pessoas que querem melhorar a capacidade respiratória, postura ou mobilidade.",
    "Alunos com sobrepeso, dores articulares ou outras restrições, pois a água reduz o impacto nas articulações.",
    "Quem busca uma atividade completa, segura e revigorante.",
    "E até quem está em reabilitação física, com recomendação médica.",
    "Quem quer usar o meio aquático como liberação de estresse."
  ];

  const beneficios = [
    "Melhora a respiração e o condicionamento físico",
    "Fortalece músculos e articulações sem impacto",
    "Alivia dores, estresse e reduz peso o corporal",
    "Melhora a postura, o equilíbrio e a coordenação",
    "Queima calorias e acelera o metabolismo",
    "Contribui para a saúde cardiovascular",
    "Proporciona bem-estar emocional e mental"
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
            Natação na <span className="text-fitwell-blue-light">Fitwell</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Nadar é viver com mais saúde, leveza e liberdade.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed mb-8">
              Seja para melhorar a respiração, aliviar o estresse, fortalecer o corpo ou simplesmente encontrar um momento de paz no dia, a natação é uma das formas mais completas — e prazerosas — de cuidar de si.
            </p>
            <p className="text-lg md:text-xl text-fitwell-dark/80 leading-relaxed">
              Na Fitwell, a natação vai além da técnica: é um instrumento de transformação física e emocional. Cada aula é pensada para respeitar seu ritmo, seus limites e, acima de tudo, o seu objetivo — seja ele saúde, performance ou equilíbrio.
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-fitwell-blue-light/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
            Por que nadar na <span className="text-fitwell-blue-light">Fitwell</span>?
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

      {/* Para quem é */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-fitwell-dark mb-12">
              Quem "deveria" fazer natação na Fitwell?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paraQuem.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-fitwell-blue-light/10 rounded-lg">
                  <div className="bg-fitwell-blue-light rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <Waves className="w-4 h-4 text-white" />
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
              Benefícios da natação para <span className="text-fitwell-blue-light">adultos</span>
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

      {/* Espaço que acolhe */}
      <section className="py-16 bg-gradient-to-r from-fitwell-blue-light to-fitwell-blue-light/80 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Um espaço que acolhe e inspira.
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Na Fitwell, a piscina é um espaço de superação, não de comparação.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Você pode chegar com medo — e sair com orgulho. Pode chegar cansado — e sair leve.
              A gente te ajuda a dar esse primeiro mergulho, respeitando seus limites, mas sempre te incentivando a ir além.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-fitwell-dark mb-8">
              Quer dar o primeiro mergulho?
            </h2>
            <p className="text-lg text-fitwell-dark/80 mb-6">
              Temos aulas em horários variados, turmas para iniciantes e para quem já tem alguma experiência.
            </p>
            <p className="text-lg text-fitwell-dark/80 mb-8">
              Você pode agendar uma aula experimental gratuita e descobrir o que a natação pode fazer pela sua saúde e bem-estar.
            </p>
            <Button variant="hero" size="xl">
              Agendar aula experimental
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Natacao;