import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const DepoimentosSection = () => {
  const reviewImages = [
    "/lovable-uploads/79868ee1-5428-4b80-85e0-13327ef496b4.png",
    "/lovable-uploads/bd50c931-9384-4dae-8766-99a1c66ac781.png", 
    "/lovable-uploads/30a38517-0a13-4207-8b9f-87ad924fe713.png",
    "/lovable-uploads/221394fa-5027-4452-a34f-9d686ee3fb6a.png",
    "/lovable-uploads/a51fd3a8-2e89-4f88-bebe-a058e71397cc.png",
    "/lovable-uploads/0b1c173c-f9bc-48d9-be7b-aa16b0d1c26a.png",
    "/lovable-uploads/2dee16af-d430-47ee-979a-66cec2b02228.png"
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

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviewImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                  <div className="p-4 md:p-6 hover:z-10 transition-all">
                    <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-white">
                      <CardContent className="p-0">
                        <div className="rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`Avaliação de cliente ${index + 1}`}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12" />
            <CarouselNext className="right-2 md:-right-12" />
          </Carousel>
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