import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import Publications from "@/pages/publications";
import Team from "@/pages/team";
import Focus from "@/pages/focus";
import Services from "@/pages/services";
import People from "@/pages/people";
import Collaborate from "@/pages/collaborate";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/focus" component={Focus} />
      <Route path="/services" component={Services} />
      <Route path="/people" component={People} />
      <Route path="/collaborate" component={Collaborate} />
      <Route path="/projects" component={Projects} />
      <Route path="/publications" component={Publications} />
      <Route path="/team" component={Team} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
