import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ModalidadesSection from "@/components/ModalidadesSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import ProgramaAdaptacaoSection from "@/components/ProgramaAdaptacaoSection";
import ConviteVisitaSection from "@/components/ConviteVisitaSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DiferenciaisSection />
      <ModalidadesSection />
      <DepoimentosSection />
      <ProgramaAdaptacaoSection />
      <ConviteVisitaSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
