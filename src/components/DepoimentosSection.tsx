import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const DepoimentosSection = () => {
  const depoimentos = [
    {
      nome: "Maria Silva",
      idade: "45 anos",
      modalidade: "Hidroginástica",
      texto: "Na Fitwell encontrei muito mais que exercícios. Encontrei uma família! O carinho e atenção de todos fizeram toda diferença na minha jornada.",
      rating: 5
    },
    {
      nome: "João Santos",
      idade: "32 anos", 
      modalidade: "Musculação",
      texto: "Profissionais incríveis e estrutura completa. Em 6 meses consegui resultados que nunca imaginei. Recomendo de olhos fechados!",
      rating: 5
    },
    {
      nome: "Ana Costa",
      idade: "28 anos",
      modalidade: "FitDance",
      texto: "As aulas de FitDance são pura diversão! Perdi peso sem perceber, porque estava me divertindo tanto. Ambiente acolhedor e professores maravilhosos.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-fitwell-orange-lighter/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fitwell-dark mb-4">
            O que nossos alunos <span className="text-fitwell-orange">dizem</span>
          </h2>
          <p className="text-lg text-fitwell-dark/70 max-w-2xl mx-auto">
            Histórias reais de transformação e bem-estar na Fitwell
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-fitwell-orange mb-2" />
                </div>
                
                <p className="text-fitwell-dark/80 mb-6 italic leading-relaxed">
                  "{depoimento.texto}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-fitwell-orange fill-current" />
                  ))}
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-fitwell-dark">
                    {depoimento.nome}
                  </h4>
                  <p className="text-sm text-fitwell-dark/60">
                    {depoimento.idade} • {depoimento.modalidade}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-fitwell-dark/70 mb-6">
            Quer compartilhar sua experiência conosco?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="text-fitwell-dark font-semibold">⭐ 4.9/5</span>
              <span className="text-fitwell-dark/60 ml-2">• 200+ avaliações</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;