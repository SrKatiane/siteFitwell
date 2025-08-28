import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Musculacao from "./pages/Musculacao";
import Natacao from "./pages/Natacao";
import NatacaoAdulta from "./pages/NatacaoAdulta";
import NatacaoBebe from "./pages/NatacaoBebe";
import NatacaoInfantil from "./pages/NatacaoInfantil";
import Hidroginastica from "./pages/Hidroginastica";
import FitDance from "./pages/FitDance";
import Funcional from "./pages/Funcional";
import Fisioterapia from "./pages/Fisioterapia";
import Nutricao from "./pages/Nutricao";
import ProgramaAdaptacao from "./pages/ProgramaAdaptacao";
import Sobre from "./pages/Sobre";
import Horarios from "./pages/Horarios";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/musculacao" element={<Musculacao />} />
          <Route path="/natacao" element={<Natacao />} />
          <Route path="/natacao-adulta" element={<NatacaoAdulta />} />
          <Route path="/natacao-bebe" element={<NatacaoBebe />} />
          <Route path="/natacao-infantil" element={<NatacaoInfantil />} />
          <Route path="/hidroginastica" element={<Hidroginastica />} />
          <Route path="/fitdance" element={<FitDance />} />
          <Route path="/funcional" element={<Funcional />} />
          <Route path="/fisioterapia" element={<Fisioterapia />} />
          <Route path="/nutricao" element={<Nutricao />} />
          <Route path="/programa-adaptacao" element={<ProgramaAdaptacao />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/horarios" element={<Horarios />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
