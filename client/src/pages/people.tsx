import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  Wrench,
  Users,
  ShieldCheck,
  Network,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

/* ── Structure cards ── */

const structureCards = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Research Leads",
    description:
      "Define themes, ensure academic quality, steward openness.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Engineering & Infrastructure",
    description:
      "Build and maintain workflows, tooling, and evaluation systems.",
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Advisory Network",
    badge: "In formation",
    description:
      "Senior researchers and practitioners stewarding the Societies of Agents paradigm.",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

const governanceItems = [
  "Independent non-profit structure",
  "Conflict-of-interest safeguards",
  "Public roadmap and reporting (planned)",
];

/* ── Network snapshot ── */

const networkStats = [
  {
    value: "XX+",
    label: "researchers across academia, industry research labs, and public-sector organizations",
  },
  {
    value: "XX",
    label: "institutions spanning universities, applied research centers, and mission-aligned partners",
  },
  {
    value: "XX",
    label: "disciplines, including systems engineering, AI, social sciences, and policy-relevant research",
  },
  {
    value: "XX",
    label: "ongoing or scoped collaborations, ranging from early pilots to multi-team research programs",
  },
];

/* ── Open roles ── */

const openRoles = [
  "Research Integrators (project scoping & coordination)",
  "Systems / Infrastructure Engineers",
  "Community & Partnership Leads (non-sales)",
];

export default function People() {
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
              Our Team & Governance
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A transparent, non-profit structure designed for long-term
              collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Structure Cards + Governance */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {structureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/60 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-lg shrink-0 ${card.color}`}
                      >
                        {card.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {card.title}
                        </h3>
                        {card.badge && (
                          <Badge variant="outline" className="text-xs">
                            {card.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Governance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Governance
              </h3>
            </div>
            <ul className="space-y-3">
              {governanceItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* The Collaboration Network */}
      <section className="py-20 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Network className="h-6 w-6 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                The Collaboration Network
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              MatrixGen operates through a distributed collaboration network
              spanning institutions, disciplines, and roles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
              Network Snapshot (current)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {networkStats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border/60"
                >
                  <span className="text-2xl font-bold text-primary shrink-0 min-w-[3rem]">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <p className="text-xs text-muted-foreground italic mt-4">
            Network participation reflects collaboration, not organizational
            control or employment.
          </p>
        </div>
      </section>

      {/* Join the Effort */}
      <section className="py-20 lg:py-24 bg-background border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
              Join the effort
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              We are looking for:
            </p>

            <ul className="space-y-3 mb-10 max-w-xl">
              {openRoles.map((role) => (
                <li key={role} className="flex items-start gap-2.5">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                    {role}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/collaborate">
              <Button size="lg" className="gap-2">
                <span className="text-base">🔹</span>
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
