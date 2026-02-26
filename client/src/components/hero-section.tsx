import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NetworkGraph } from "./network-graph";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-slate-950">
      {/* Abstract network graph background */}
      <div className="absolute inset-0 opacity-30">
        <NetworkGraph />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white tracking-tight leading-tight">
            Democratizing Research Collaboration
            <span className="block mt-2 text-white/80">for Social Impact</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            MatrixGen is a non-profit research alliance enabling system-level collaboration across institutions—bridging academic research, real-world constraints, and public-interest outcomes.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/propose">
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 text-white"
                data-testid="button-propose-idea"
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
                className="gap-2 bg-white/5 border-white/15 text-white hover:bg-white/10 backdrop-blur-sm"
                data-testid="button-explore-collab"
              >
                Explore Collaboration Models
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
