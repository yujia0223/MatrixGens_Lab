import { Link } from "wouter";
import { Beaker, Heart } from "lucide-react";
import { SiGithub, SiGooglescholar } from "react-icons/si";
import { Button } from "@/components/ui/button";

const footerLinks = {
  research: [
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=DC0t9zwAAAAJ&hl=en", external: true },
  ],
  about: [
    { label: "Team", href: "/team" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  community: [
    { label: "GitHub", href: "https://github.com/matrixlab", external: true },
    { label: "News", href: "/news" },
    { label: "Collaborate", href: "/contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Beaker className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold tracking-tight">MatrixLab</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A non-profit research lab advancing AI through open collaboration.
                Focused on reinforcement learning, LLM agents, and multiagent systems.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://scholar.google.com/citations?user=DC0t9zwAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-footer-scholar"
                >
                  <Button variant="ghost" size="icon">
                    <SiGooglescholar className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href="https://github.com/matrixlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-footer-github"
                >
                  <Button variant="ghost" size="icon">
                    <SiGithub className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Research</h3>
              <ul className="space-y-3">
                {footerLinks.research.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {currentYear} MatrixLab. A 501(c)(3) non-profit organization.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-3.5 w-3.5 text-destructive" /> for open science
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
