import { Link } from "wouter";
import { ArrowRight, ExternalLink, FileText, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import type { Publication } from "@shared/schema";

const defaultPublications: Publication[] = [
  {
    id: "1",
    title: "SCORE: Story Coherence and Retrieval Enhancement for AI Narratives",
    authors: "Q Yi, Y He, J Wang, X Song, S Qian, X Yuan, M Zhang, L Sun, K Li, K Lu, T Shi, et al.",
    venue: "arXiv preprint",
    year: 2025,
    citations: 56,
    category: "Large Language Models",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&citation_for_view=DC0t9zwAAAAJ:uWQEDVKXjbEC",
  },
  {
    id: "2",
    title: "Enhancing Code LLMs with Reinforcement Learning in Code Generation",
    authors: "J Wang, Z Zhang, Y He, Y Song, T Shi, Y Li, H Xu, K Wu, G Qian, Q Chen, et al.",
    venue: "arXiv preprint",
    year: 2025,
    citations: 49,
    category: "Code Intelligence",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&citation_for_view=DC0t9zwAAAAJ:SP6oXDckpogC",
  },
  {
    id: "3",
    title: "GE-Adapter: A General and Efficient Adapter for Enhanced Video Editing with Pretrained Text-to-Image Diffusion Models",
    authors: "Y He, S Li, K Li, J Wang, B Li, T Shi, Y Xin, K Li, J Yin, M Zhang, X Wang",
    venue: "Expert Systems with Applications",
    year: 2025,
    citations: 26,
    category: "Generative AI",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&citation_for_view=DC0t9zwAAAAJ:V3AGJWp-ZtQC",
  },
  {
    id: "4",
    title: "Enhancing Intent Understanding for Ambiguous Prompts through Human-Machine Co-Adaptation",
    authors: "Y He, J Wang, K Li, Y Wang, L Sun, J Yin, M Zhang, X Wang",
    venue: "arXiv preprint",
    year: 2025,
    citations: 27,
    category: "Human-AI Interaction",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&citation_for_view=DC0t9zwAAAAJ:KxtntwgDAa4C",
  },
  {
    id: "5",
    title: "CMAT: A Multi-Agent Collaboration Tuning Framework for Enhancing Small Language Models",
    authors: "X Liang, Y He, M Tao, Y Xia, J Wang, T Shi, J Wang, JS Yang",
    venue: "IEEE ICME (Oral)",
    year: 2024,
    citations: 36,
    category: "Multiagent Systems",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&citation_for_view=DC0t9zwAAAAJ:CHSYGLWDkRkC",
  },
  {
    id: "6",
    title: "WCDT: World-Centric Diffusion Transformer for Traffic Scene Generation",
    authors: "C Yang, Y He, AX Tian, D Chen, J Wang, T Shi, A Heydarian, P Liu",
    venue: "IEEE ICRA",
    year: 2024,
    citations: 29,
    category: "Generative AI",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&citation_for_view=DC0t9zwAAAAJ:HoB7MX3m0LUC",
  },
  {
    id: "7",
    title: "Self-evolving Agents with Reflective and Memory-augmented Abilities",
    authors: "X Liang, Y He, Y Xia, X Song, J Wang, M Tao, L Sun, X Yuan, J Su, K Li, T Shi, et al.",
    venue: "arXiv preprint",
    year: 2024,
    citations: 26,
    category: "Large Language Models",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&citation_for_view=DC0t9zwAAAAJ:8AbLer7MMksC",
  },
  {
    id: "8",
    title: "Safe, Efficient, and Comfortable Reinforcement-Learning-Based Car-Following for AVs",
    authors: "O ElSamadisy, T Shi, I Smirnov, B Abdulhai",
    venue: "Transportation Research Record",
    year: 2023,
    citations: 30,
    category: "Reinforcement Learning",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&citation_for_view=DC0t9zwAAAAJ:r0BpntZqJG4C",
  },
  {
    id: "9",
    title: "Age-related Bias and Artificial Intelligence: A Scoping Review",
    authors: "CH Chu, S Donato-Woodger, SS Khan, R Nyrup, K Leslie, A Lyn, T Shi, et al.",
    venue: "Humanities and Social Sciences Communications",
    year: 2023,
    citations: 83,
    category: "AI Ethics",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&citation_for_view=DC0t9zwAAAAJ:k_IJM867U9cC",
  },
  {
    id: "10",
    title: "Offline Reinforcement Learning for Autonomous Driving with Safety and Exploration Enhancement",
    authors: "T Shi, D Chen, K Chen, Z Li",
    venue: "NeurIPS Workshop on ML for Autonomous Driving",
    year: 2021,
    citations: 50,
    category: "Reinforcement Learning",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&citation_for_view=DC0t9zwAAAAJ:hC7cP41nSMkC",
  },
];

export function PublicationsSection({
  publications = defaultPublications,
  showAll = false,
  limit = 5,
  isLoading = false,
}: {
  publications?: Publication[];
  showAll?: boolean;
  limit?: number;
  isLoading?: boolean;
}) {
  const data = publications || defaultPublications;
  const displayPublications = showAll ? data : data.slice(0, limit);

  return (
    <section className="py-20 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Recent Publications</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our latest research contributions to the AI community
          </p>
        </motion.div>

        <div className="space-y-4">
          {displayPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className="group p-5 rounded-lg bg-card border border-card-border hover:shadow-md transition-all duration-200"
                data-testid={`publication-${pub.id}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {pub.year}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {pub.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      {pub.venue}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 lg:flex-shrink-0">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Quote className="h-4 w-4" />
                      <span className="text-sm font-medium">{pub.citations}</span>
                    </div>
                    {pub.scholarUrl && (
                      <a
                        href={pub.scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                        data-testid={`link-publication-${pub.id}`}
                      >
                        <FileText className="h-4 w-4" />
                        <span className="hidden sm:inline">View</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && publications.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link href="/publications">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-all-publications">
                View All Publications
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export { defaultPublications };
