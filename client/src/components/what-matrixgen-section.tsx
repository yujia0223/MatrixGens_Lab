import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const whatWeDo = [
  "Integrate people, ideas, and capabilities across institutions",
  "Coordinate pilot, research-first collaborations",
  "Support translation of ideas without compromising academic independence",
];

const whatWeDoNot = [
  "We do not replace universities, labs, or PIs",
  "We do not grant degrees or control academic authority",
  "We do not operate as a commercial vendor",
];

export function WhatMatrixGenSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            What MatrixGen is{" "}
            <span className="text-muted-foreground font-normal">(and is not)</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-4xl">
            MatrixGen is a non-profit research integration organization that helps ideas
            become coordinated, facilitates multi-institution research projects, and
            supports their responsible translation into society.
          </p>
        </motion.div>

        <Separator className="mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* What we do */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground">What we do</h3>
            <ul className="space-y-4">
              {whatWeDo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What we do not do */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
              What we do not do
            </h3>
            <ul className="space-y-4">
              {whatWeDoNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground mt-0.5 shrink-0">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
