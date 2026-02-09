import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-primary mb-4" data-testid="text-404">404</h1>
        <h2 className="text-2xl font-semibold mb-4" data-testid="text-not-found-title">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto" data-testid="text-not-found-description">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to exploring our research.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild data-testid="button-go-home">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild data-testid="button-view-publications">
            <Link href="/publications">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View Publications
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
