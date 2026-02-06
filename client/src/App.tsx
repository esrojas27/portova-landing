import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import PaymentSuccess from "@/pages/PaymentSuccess";

// Detect base path for GitHub Pages project sites (e.g. /repo-name/) so routing works there.
const basePath = window.location.hostname.endsWith("github.io")
  ? `/${window.location.pathname.split("/")[1] || ""}`
  : "";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre-nosotros" component={Home} />
      <Route path="/productos" component={Home} />
      <Route path="/como-funciona" component={Home} />
      <Route path="/contacto" component={Home} />
      <Route path="/terminos" component={Terms} />
      <Route path="/privacidad" component={Privacy} />
      <Route path="/pago-completado-wp" component={PaymentSuccess} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WouterRouter base={basePath}>
          <AppRoutes />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
