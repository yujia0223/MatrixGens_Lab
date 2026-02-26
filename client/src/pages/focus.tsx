import { Brain, Bot, Server, Shield, ArrowRight, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { motion } from "framer-motion";

const focusAreas = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Agentic Systems & Multi-Agent Learning",
    themes: "Coordination, memory, communication, incentives",
    outcomes: "Benchmarks, agent orchestration frameworks",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Reinforcement Learning & Decision-Making Systems",
    themes: "Long-horizon learning, safety, alignment",
    outcomes: "Training recipes, evaluation protocols",
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Large-Scale AI Infrastructure & Evaluation",
    themes: "Reproducibility, efficiency, verifiable evaluation",
    outcomes: "Open tooling, test harnesses, leaderboards",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Societal-Scale AI Systems",
    themes: "Governance, trust, public-interest deployment",
    outcomes: "Policy briefs, deployment playbooks",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

export default function Focus() {
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
              Research Focus Areas
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We focus on system-level research that requires coordination across
              multiple teams and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Cards */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/60 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg shrink-0 ${area.color}`}
                      >
                        {area.icon}
                      </div>
                      <h3 className="text-lg lg:text-xl font-semibold text-foreground leading-snug pt-1">
                        {area.title}
                      </h3>
                    </div>

                    <div className="space-y-3 ml-16">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Themes
                        </span>
                        <p className="text-sm text-foreground/80 mt-1 leading-relaxed">
                          {area.themes}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Outcomes
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {area.outcomes.split(", ").map((outcome) => (
                            <Badge
                              key={outcome}
                              variant="secondary"
                              className="text-xs font-normal"
                            >
                              {outcome}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Societies of Agents */}
      <section className="py-20 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Network className="h-5 w-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                A unifying lens: Societies of Agents
              </h2>
            </div>

            <Separator className="mb-8" />

            <p className="text-base sm:text-lg text-foreground/85 leading-relaxed mb-4">
              Many of these areas converge on a shared question: how
              agents—models, tools, institutions, and people—coordinate at a
              societal scale.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              MatrixGen treats this as a guiding lens for research integration
              and translation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-background border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Interested in contributing to one of these areas?
            </p>
            <Link href="/propose">
              <Button size="lg" className="gap-2">
                <span className="text-base">🔹</span>
                Propose a Research Idea
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
