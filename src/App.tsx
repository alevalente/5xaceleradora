
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';

const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AgentDetail = lazy(() => import('./pages/AgentDetail'));
const PlatformDetail = lazy(() => import('./pages/PlatformDetail'));
const ConsultingDetail = lazy(() => import('./pages/ConsultingDetail'));
const AgenteCoberturaCarteira = lazy(() => import('./pages/AgenteCoberturaCarteira'));
const AgenteAnaliseConversas = lazy(() => import('./pages/AgenteAnaliseConversas'));
const IagoConversas = lazy(() => import('./pages/IagoConversas'));
const AgenteReativacaoClientes = lazy(() => import('./pages/AgenteReativacaoClientes'));
const AgenteAnaliseConversasFollowup = lazy(() => import('./pages/AgenteAnaliseConversasFollowup'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="p-4 text-center">Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/agent/:agentId" element={<AgentDetail />} />
            <Route path="/agente-cobertura-carteira" element={<AgenteCoberturaCarteira />} />
            <Route path="/agente-analise-conversas" element={<AgenteAnaliseConversas />} />
            <Route path="/agente-analise-conversas-followup" element={<AgenteAnaliseConversasFollowup />} />
            <Route path="/iago-conversas" element={<IagoConversas />} />
            <Route path="/agente-reativacao-clientes" element={<AgenteReativacaoClientes />} />
            <Route path="/platform" element={<PlatformDetail />} />
            <Route path="/consulting" element={<ConsultingDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
