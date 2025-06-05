
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import PremiumPlots from "./pages/PremiumPlots";
import JewarAirport from "./pages/JewarAirport";
import RERAApproved from "./pages/RERAApproved";
import EMIOptions from "./pages/EMIOptions";
import GatedCommunity from "./pages/GatedCommunity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/premium-plots" element={<PremiumPlots />} />
          <Route path="/jewar-airport" element={<JewarAirport />} />
          <Route path="/rera-approved" element={<RERAApproved />} />
          <Route path="/emi-options" element={<EMIOptions />} />
          <Route path="/gated-community" element={<GatedCommunity />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
