import { Layers, RefreshCw, ArrowRightLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: "System-level problems outgrow single labs",
    description:
      "Frontier research increasingly requires coordination across teams, disciplines, and institutions.",
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Academic and industrial cycles are misaligned",
    description:
      "Ideas move faster than grants, curricula, and organizational boundaries.",
  },
  {
    icon: <ArrowRightLeft className="h-6 w-6" />,
    title: "Translation remains structurally under-supported",
    description:
      "Evaluation, integration, and deployment of ideas often encounter difficulties as they fall between institutions.",
  },
];

export function WhyMatrixGenSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Why a new collaboration layer is needed
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/60 bg-card hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/8 text-primary mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
