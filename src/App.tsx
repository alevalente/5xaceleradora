
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';

// Lazy load components
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
const AgenteCadastroCredito = lazy(() => import('./pages/AgenteCadastroCredito'));
const AgenteSDRAtendimento = lazy(() => import('./pages/AgenteSDRAtendimento'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

const queryClient = new QueryClient();

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/agent/:agentId" element={<AgentDetail />} />
            <Route path="/agente-cobertura-carteira" element={<AgenteCoberturaCarteira />} />
            <Route path="/agente-analise-conversas" element={<AgenteAnaliseConversas />} />
            <Route path="/agente-analise-conversas-followup" element={<AgenteAnaliseConversasFollowup />} />
            <Route path="/agente-cadastro-credito" element={<AgenteCadastroCredito />} />
            <Route path="/agente-sdr-atendimento" element={<AgenteSDRAtendimento />} />
            <Route path="/iago-conversas" element={<IagoConversas />} />
            <Route path="/agente-reativacao-clientes" element={<AgenteReativacaoClientes />} />
            <Route path="/obrigado" element={<ThankYou />} />
            <Route path="/platform" element={<PlatformDetail />} />
            <Route path="/consulting" element={<ConsultingDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
