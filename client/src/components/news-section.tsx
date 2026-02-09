import { Link } from "wouter";
import { ArrowRight, Calendar, Award, Newspaper, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import type { NewsItem } from "@shared/schema";

const defaultNews: NewsItem[] = [
  {
    id: "1",
    title: "SCORE Paper Achieves 56 Citations",
    description: "Our work on Story Coherence and Retrieval Enhancement for AI Narratives continues to gain significant attention in the research community.",
    date: "2025-03-15",
    category: "publication",
  },
  {
    id: "2",
    title: "New Research on Code LLMs with RL",
    description: "Our latest paper on enhancing code generation with reinforcement learning has been published, demonstrating improved code quality.",
    date: "2025-02-20",
    category: "publication",
  },
  {
    id: "3",
    title: "CMAT Framework Presented at IEEE ICME",
    description: "Our multi-agent collaboration tuning framework received an Oral presentation at the prestigious IEEE ICME conference.",
    date: "2024-07-15",
    category: "conference",
  },
  {
    id: "4",
    title: "WCDT Accepted at IEEE ICRA 2024",
    description: "World-centric diffusion transformer for traffic scene generation accepted at the International Conference on Robotics and Automation.",
    date: "2024-05-13",
    category: "conference",
  },
  {
    id: "5",
    title: "MatrixLab Reaches 1000+ Citations",
    description: "Our collective research has now been cited over 1000 times, marking a significant milestone for our non-profit research lab.",
    date: "2024-12-01",
    category: "announcement",
  },
  {
    id: "6",
    title: "Self-evolving Agents Research Published",
    description: "New preprint released on agents with reflective and memory-augmented abilities for enhanced autonomous reasoning.",
    date: "2024-09-01",
    category: "publication",
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  conference: <Users className="h-4 w-4" />,
  publication: <Newspaper className="h-4 w-4" />,
  announcement: <Award className="h-4 w-4" />,
  event: <Calendar className="h-4 w-4" />,
};

const categoryColors: Record<string, string> = {
  conference: "bg-chart-1/10 text-chart-1",
  publication: "bg-chart-2/10 text-chart-2",
  announcement: "bg-chart-4/10 text-chart-4",
  event: "bg-chart-3/10 text-chart-3",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function NewsSection({
  news = defaultNews,
  showAll = false,
  limit = 3,
  isLoading = false,
}: {
  news?: NewsItem[];
  showAll?: boolean;
  limit?: number;
  isLoading?: boolean;
}) {
  const data = news || defaultNews;
  const displayNews = showAll ? data : data.slice(0, limit);

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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">News & Events</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest research milestones and announcements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col card-hover" data-testid={`card-news-${item.id}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge className={`gap-1 ${categoryColors[item.category]}`}>
                      {categoryIcons[item.category]}
                      <span className="capitalize">{item.category}</span>
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {!showAll && news.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link href="/news">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-all-news">
                View All News
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export { defaultNews };
