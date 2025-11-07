import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdminDashboard from "./pages/AdminDashboard";
import ReceptionDashboard from "./pages/ReceptionDashboard";
import HousekeepingDashboard from "./pages/HousekeepingDashboard";
import MaintenanceDashboard from "./pages/MaintenanceDashboard";
import KitchenDashboard from "./pages/KitchenDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
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
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/reception" element={<ReceptionDashboard />} />
          <Route path="/housekeeping" element={<HousekeepingDashboard />} />
          <Route path="/maintenance" element={<MaintenanceDashboard />} />
          <Route path="/kitchen" element={<KitchenDashboard />} />
          <Route path="/customer" element={<CustomerDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
