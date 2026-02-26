import { Link } from "wouter";
import { ArrowRight, GraduationCap, Building2, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

/* ── Three audience columns ── */

const audiences = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    emoji: "🏫",
    title: "For Universities & Researchers",
    items: [
      "Cross-lab project scoping and coordination",
      "Shared research infrastructure and workflows",
      "Support for multi-PI, multi-institution projects",
      "Applied research pathways without compromising independence",
    ],
    footnote: "All collaborations remain faculty-led where appropriate.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    emoji: "🏢",
    title: "For Industry Partners",
    items: [
      "Research problem framing (not outsourcing)",
      "Early-stage translation and prototyping",
      "Structured engagement with academic researchers",
      "Clear separation between research and commercial deliverables",
    ],
    footnote:
      "Industry input informs research questions; it does not dictate outcomes.",
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    emoji: "🌍",
    title: "For Society",
    items: [
      "Open research outputs",
      "Responsible AI deployment practices",
      "Long-term, public-interest driven innovation",
    ],
    footnote: null,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
];

/* ── Pilot workflow steps ── */

const workflowSteps = [
  {
    number: "01",
    label: "Propose",
    description: "Submit an idea or system-level problem",
  },
  {
    number: "02",
    label: "Match",
    description: "Map capabilities and identify collaborators",
  },
  {
    number: "03",
    label: "Pilot",
    description: "Run a scoped, research-first project",
  },
  {
    number: "04",
    label: "Share",
    description: "Open outputs and responsible translation pathways",
  },
];

/* ── Mini FAQ ── */

const faqs = [
  {
    question: "Are you a vendor?",
    answer:
      "No. We are a non-profit organization that puts research at its forefront.",
  },
  {
    question: "Do you replace labs or PIs?",
    answer:
      "No. We support collaboration between researchers and facilitate translation of ideas.",
  },
  {
    question: "How is IP managed and processed?",
    answer:
      "It is dealt with in accordance with the policies set by the partner institutions.",
  },
  {
    question: "Can students participate?",
    answer: "Yes, through approved academic pathways.",
  },
];

export default function Services() {
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
              How MatrixGen Helps
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A research-first collaboration model with clear boundaries and
              attribution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Audience Columns */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {audiences.map((aud, index) => (
              <motion.div
                key={aud.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/60 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">{aud.emoji}</span>
                      <h3 className="text-lg font-semibold text-foreground leading-snug">
                        {aud.title}
                      </h3>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {aud.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-foreground/80 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {aud.footnote && (
                      <p className="text-xs text-muted-foreground italic border-t border-border/40 pt-4">
                        {aud.footnote}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Pilot Workflow */}
      <section className="py-20 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Pilot Collaboration Workflow
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative p-6 rounded-lg bg-card border border-border/60">
                  <span className="text-4xl font-bold text-primary/15 absolute top-4 right-5 select-none">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a
              href="https://webform.mitacs.ca/en/open-projects?_ga=2.152383225.1108300759.1736920255-1607297042.1736920255"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                <span className="text-base">🔹</span>
                Submit a Proposal
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
