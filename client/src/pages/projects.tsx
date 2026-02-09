import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import type { Project } from "@shared/schema";

export default function Projects() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
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
              <span className="text-foreground">Projects</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Research Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore our cutting-edge research initiatives spanning reinforcement learning,
              large language models, multiagent systems, and AI ethics.
            </p>
          </motion.div>
        </div>
      </section>

      <ProjectsSection 
        projects={projects} 
        showAll={true}
        title="All Projects"
        subtitle="Our complete portfolio of active and completed research"
        isLoading={isLoading}
      />

      <ContactSection />
    </main>
  );
}
