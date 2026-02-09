import { motion } from "framer-motion";
import { Target, Users, Globe, BookOpen, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactSection } from "@/components/contact-section";

const values = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Open Science",
    description: "We believe in making research accessible to all. Our publications, code, and methodologies are shared openly with the global community.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaboration",
    description: "Great research happens when brilliant minds work together. We foster partnerships with institutions and researchers worldwide.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Impact",
    description: "Our research aims to address real-world challenges in transportation, healthcare, and technology for the benefit of society.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Rigorous Research",
    description: "We maintain the highest standards of scientific integrity, ensuring our work is reproducible and peer-reviewed.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Excellence",
    description: "With over 1000 citations and publications at top venues, we strive for excellence in every research endeavor.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Community",
    description: "As a non-profit, we're committed to nurturing the next generation of AI researchers through mentorship and education.",
  },
];

const researchAreas = [
  {
    title: "Reinforcement Learning",
    description: "Developing safe, efficient algorithms for autonomous systems including self-driving vehicles and robotic control.",
  },
  {
    title: "Large Language Model Agents",
    description: "Creating intelligent agents that can reason, plan, and collaborate using the power of large language models.",
  },
  {
    title: "Multiagent Systems",
    description: "Researching how multiple AI agents can coordinate and cooperate to solve complex real-world problems.",
  },
  {
    title: "AI Safety & Ethics",
    description: "Investigating bias in AI systems and developing frameworks for responsible AI development and deployment.",
  },
  {
    title: "Generative AI",
    description: "Advancing diffusion models and transformers for realistic content generation in traffic simulation and beyond.",
  },
  {
    title: "Code Intelligence",
    description: "Enhancing programming assistants through reinforcement learning for better code generation and understanding.",
  },
];

export default function About() {
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
              <span className="text-foreground">About</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              About MatrixLab
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A 501(c)(3) non-profit research lab dedicated to advancing AI 
              through open collaboration and rigorous scientific inquiry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MatrixLab was founded with a singular vision: to democratize AI research 
                  and create meaningful impact through open collaboration. We bring together 
                  researchers from leading institutions worldwide to tackle some of the most 
                  challenging problems in artificial intelligence.
                </p>
                <p>
                  Our work spans reinforcement learning, large language model agents, 
                  multiagent systems, and AI ethics. We believe that the best research 
                  happens when knowledge is shared freely and diverse perspectives come together.
                </p>
                <p>
                  As a non-profit organization, we're committed to advancing science for the 
                  benefit of humanity, not profit. Every publication, every line of code, 
                  and every insight we generate is made available to the global research community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Citations</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">17</div>
                <div className="text-sm text-muted-foreground">h-index</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Collaborators</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our research and collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Research Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our focus areas in artificial intelligence research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 rounded-lg border bg-card h-full">
                  <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
