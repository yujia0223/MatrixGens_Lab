import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import type { TeamMember } from "@shared/schema";

export default function Team() {
  const { data: members = [], isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  return (
    <main>
      <section className="py-16 lg:py-20 bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="text-sm text-muted-foreground mb-4">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">Team</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Meet the researchers and collaborators driving innovation at MatrixLab.
              Our team brings together expertise from top institutions worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <TeamSection members={members} showAll={true} isLoading={isLoading} />

      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Affiliated Institutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Our collaborators come from leading universities and research labs around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-muted-foreground">
              {[
                "University of Toronto",
                "McGill University",
                "HKUST",
                "University of Tokyo",
                "Google DeepMind",
                "Shanghai AI Lab",
                "Peking University",
                "UC San Diego",
                "MIT",
                "Carnegie Mellon",
              ].map((institution) => (
                <div key={institution} className="text-sm font-medium">
                  {institution}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
