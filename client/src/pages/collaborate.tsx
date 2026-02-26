import { Link } from "wouter";
import {
  ArrowRight,
  GraduationCap,
  Building,
  Heart,
  FlaskConical,
  BookOpen,
  Cpu,
  HandCoins,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

/* ── Role-based collaboration paths ── */

const collaborationPaths = [
  {
    icon: <FlaskConical className="h-6 w-6" />,
    emoji: <GraduationCap className="h-7 w-7" />,
    title: "Collaborate as a Researcher",
    description:
      "Contribute to cross-institutional research projects with full academic attribution.",
    items: [
      "Submit research proposals and ideas",
      "Co-author publications with clear attribution",
      "Join scoped pilot projects in your area of expertise",
    ],
    cta: "Propose a Research Idea",
    ctaHref:
      "https://webform.mitacs.ca/en/open-projects?_ga=2.152383225.1108300759.1736920255-1607297042.1736920255",
    external: true,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    emoji: <Building className="h-7 w-7" />,
    title: "Collaborate as a University",
    description:
      "Enable your faculty and students to participate in coordinated, multi-institution research.",
    items: [
      "Pilot collaborations with partner institutions",
      "Capstone and thesis project integration",
      "Joint research programs with shared infrastructure",
    ],
    cta: "Start a Pilot",
    ctaHref: "/propose",
    external: false,
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    icon: <HandCoins className="h-6 w-6" />,
    emoji: <Heart className="h-7 w-7" />,
    title: "Collaborate as a Supporter",
    description:
      "Support public-interest research without directing outcomes.",
    items: [
      "Philanthropic or in-kind donations",
      "Compute and infrastructure sponsorship",
      "Mission-aligned partnership opportunities",
    ],
    cta: "Get in Touch",
    ctaHref: "/propose",
    external: false,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
];

export default function Collaborate() {
  return (
    <main>
      {/* Header */}
      <section className="py-20 lg:py-28 bg-background border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Collaborate with MatrixGen
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Collaboration models are pilot-based and tailored—start small,
              scale only when it works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Role-based paths */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {collaborationPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/60 hover:shadow-md transition-shadow duration-300 flex flex-col">
                  <CardContent className="p-6 lg:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg shrink-0 ${path.color}`}
                      >
                        {path.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground leading-snug">
                        {path.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {path.description}
                    </p>

                    <ul className="space-y-2.5 mb-8 flex-1">
                      {path.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ArrowRight className="h-3.5 w-3.5 text-primary mt-1 shrink-0" />
                          <span className="text-sm text-foreground/80 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {path.external ? (
                      <a
                        href={path.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button variant="outline" className="w-full gap-2">
                          {path.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </a>
                    ) : (
                      <Link href={path.ctaHref} className="w-full">
                        <Button variant="outline" className="w-full gap-2">
                          {path.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="py-16 lg:py-20 bg-muted/30 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              All collaboration models are designed to be lightweight and
              non-committal at the start. We begin with pilots—scale only when
              value is demonstrated.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
