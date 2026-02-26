import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FooterCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Start with a pilot, not a commitment
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/propose">
              <Button
                size="lg"
                className="gap-2"
                data-testid="button-footer-propose"
              >
                <span className="text-base">🔹</span>
                Propose a Research Idea
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/collaborate">
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                data-testid="button-footer-collaborate"
              >
                How to Collaborate
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
