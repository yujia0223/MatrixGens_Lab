import { motion } from "framer-motion";

export function SupportSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
            Supported by
          </h3>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            MatrixGen is supported by a mix of academic collaborators, industry partners,
            and philanthropic contributions—while remaining research-first and
            public-interest driven.
          </p>
        </motion.div>

        {/* Placeholder for future collaborator logos */}
        {/* <div className="mt-10 flex flex-wrap items-center gap-8 opacity-40">
          logos here
        </div> */}
      </div>
    </section>
  );
}
