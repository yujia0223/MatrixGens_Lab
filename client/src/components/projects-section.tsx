import { Link } from "wouter";
import { ArrowRight, Brain, Cpu, Bot, Car, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import type { Project } from "@shared/schema";

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "LLM Agent Systems",
    description: "Developing intelligent agents powered by large language models with enhanced reasoning, memory, and collaboration capabilities.",
    category: "Large Language Models",
    publications: ["cmat", "self-evolving"],
    status: "active",
  },
  {
    id: "2",
    title: "Reinforcement Learning for Autonomous Driving",
    description: "Creating safe and efficient autonomous driving systems using deep reinforcement learning with safety guarantees.",
    category: "Reinforcement Learning",
    publications: ["driving-decision", "offline-rl"],
    status: "active",
  },
  {
    id: "3",
    title: "Multi-Agent Collaboration",
    description: "Research on multi-agent reinforcement learning and graph neural networks for connected automated vehicles.",
    category: "Multiagent Systems",
    publications: ["multi-agent-graph"],
    status: "active",
  },
  {
    id: "4",
    title: "Code Generation with RL",
    description: "Enhancing code LLMs with reinforcement learning techniques for improved code generation quality.",
    category: "Code Intelligence",
    publications: ["code-llm-rl"],
    status: "active",
  },
  {
    id: "5",
    title: "AI Fairness & Bias",
    description: "Investigating age-related bias in AI systems and developing methods for more equitable AI applications.",
    category: "AI Ethics",
    publications: ["age-bias"],
    status: "active",
  },
  {
    id: "6",
    title: "Diffusion Models for Traffic",
    description: "World-centric diffusion transformer models for realistic traffic scene generation and simulation.",
    category: "Generative AI",
    publications: ["wcdt"],
    status: "active",
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "Large Language Models": <MessageSquare className="h-5 w-5" />,
  "Reinforcement Learning": <Brain className="h-5 w-5" />,
  "Multiagent Systems": <Bot className="h-5 w-5" />,
  "Code Intelligence": <Cpu className="h-5 w-5" />,
  "AI Ethics": <Sparkles className="h-5 w-5" />,
  "Generative AI": <Car className="h-5 w-5" />,
};

export function ProjectsSection({ 
  projects = defaultProjects, 
  showAll = false,
  title = "Research Projects",
  subtitle = "Exploring the frontiers of artificial intelligence",
  isLoading = false,
}: { 
  projects?: Project[]; 
  showAll?: boolean;
  title?: string;
  subtitle?: string;
  isLoading?: boolean;
}) {
  const data = projects || defaultProjects;
  const displayProjects = showAll ? data : data.slice(0, 6);

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Skeleton className="h-10 w-10 rounded-lg" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-32 mt-1" />
                </CardHeader>
                <CardContent className="flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full mt-2" />
                  <Skeleton className="h-4 w-3/4 mt-2" />
                </CardContent>
                <CardFooter className="pt-4">
                  <Skeleton className="h-9 w-full" />
                </CardFooter>
              </Card>
            ))
          ) : displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col card-hover" data-testid={`card-project-${project.id}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {categoryIcons[project.category] || <Brain className="h-5 w-5" />}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.status === "active" ? "Active" : "Completed"}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href={`/projects/${project.id}`} className="w-full">
                    <Button variant="ghost" className="w-full gap-2" data-testid={`button-view-project-${project.id}`}>
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {!showAll && !isLoading && projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link href="/projects">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export { defaultProjects };
