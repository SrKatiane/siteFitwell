import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";
const FAQSection = () => {
  const faqs = [{
    question: "Na modalidade musculação (sala de treinos) tem sempre um professor para orientar?",
    answer: "Sim, na Espaço Fitwell haverá sempre um professor para montar seu treino e acompanha-lo em seus exercícios."
  }, {
    question: "A piscina é aquecida?",
    answer: "Sim, a piscina está sempre sendo mantida numa temperatura de 30 à 31graus no verão e 31 à 32 graus no inverno."
  }, {
    question: "Os vestiários da parte seca (sala de modalidades em grupo e sala de treinos) possui vestiários com chuveiros?",
    answer: "Sim, todas nossas modalidades possibilitam você, após sua modalidade, sair de banho tomado pronto para seu dia-a-dia."
  }, {
    question: "Os alunos da modalidade natação, participam de campeonatos?",
    answer: "Sim, temos uma agenda anual de torneios e campeonatos de natação com outras Escolas, tanto para modalidades infantis quanto adultos. A participação é livre conforme o interesse e qualificação do nadador."
  }, {
    question: "Onde compro roupas adequadas para a piscina? Vocês vendem?",
    answer: "Sim, para maior conforto e praticidade, a Fitwell oferece para sua aquisição, material adequado para a prática de modalidades aquáticas."
  }, {
    question: "A partir de que idade a criança pode começar a nadar na Fitwell?",
    answer: "Na Escola de Natação Fitwell, temos uma metodologia de ensino da natação para crianças a partir de 1 ano. Antes dessa idade, temos a possibilidade de aulas individualizadas para os bebês."
  }];
  return <section className="py-20 bg-gradient-to-br from-fitwell-blue-light/10 to-fitwell-orange-lighter/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fitwell-dark mb-4">
            Perguntas Mais <span className="text-fitwell-orange">Frequentes</span>
          </h2>
          <p className="text-xl text-fitwell-dark/70 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossa estrutura e modalidades
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border-2 border-fitwell-orange/10 hover:border-fitwell-orange/30 transition-all duration-300 px-6 py-2">
                <AccordionTrigger className="text-left text-fitwell-dark font-semibold hover:text-fitwell-orange transition-colors duration-200 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-fitwell-dark/80 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-fitwell-orange/20">
              <h3 className="text-2xl font-bold text-fitwell-dark mb-4">
                Não encontrou a resposta que procurava?
              </h3>
              <Button variant="fitwell" size="lg" className="px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                Atendimento Espaço Fitwell
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;