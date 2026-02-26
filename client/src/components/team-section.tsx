import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SiGithub, SiLinkedin, SiGooglescholar } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import type { TeamMember } from "@shared/schema";

const defaultTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Tianyu Shi",
    role: "Principal Researcher",
    institution: "University of Toronto",
    researchInterests: ["Reinforcement Learning", "LLM Agents", "Multiagent Systems"],
    scholarUrl: "https://scholar.google.com/citations?user=DC0t9zwAAAAJ&hl=en",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "2",
    name: "Dr. Yujia Zhang",
    role: "Research Scientist",
    institution: "University of Alberta",
    researchInterests: ["Large Language Models", "LLM Agents", "Knowledge Graphs"],
    scholarUrl: "https://scholar.google.com/citations?user=gk-KtnkAAAAJ&hl=en",
    linkedinUrl: "https://www.linkedin.com/in/yujia-zhang-phd/",
  },
  {
    id: "3",
    name: "Dr. Yangqiu Song",
    role: "Research Collaborator",
    institution: "HKUST",
    researchInterests: ["NLP", "Knowledge Graphs", "Machine Learning"],
    scholarUrl: "https://scholar.google.com/citations?user=MdQZ-q8AAAAJ&hl=en",
  },
  {
    id: "4",
    name: "Dr. Lijun Sun",
    role: "Research Collaborator",
    institution: "McGill University",
    researchInterests: ["Transportation", "Graph Neural Networks", "Urban Computing"],
    scholarUrl: "https://scholar.google.com/citations?user=qi4IEtkAAAAJ&hl=en",
  },
  {
    id: "5",
    name: "Dr. Baher Abdulhai",
    role: "Research Collaborator",
    institution: "University of Toronto",
    researchInterests: ["Intelligent Transportation", "Traffic Control", "AI in Infrastructure"],
    scholarUrl: "https://scholar.google.com/citations?user=ezgstIoAAAAJ&hl=en",
  },
  {
    id: "6",
    name: "Dr. Chi Wang",
    role: "Research Collaborator",
    institution: "Google DeepMind",
    researchInterests: ["AutoML", "LLM Systems", "AI Agents"],
    scholarUrl: "https://scholar.google.com/citations?user=IiSNwnAAAAAJ&hl=en",
  },
  {
    id: "7",
    name: "Dr. Jie Fu",
    role: "Research Collaborator",
    institution: "Shanghai AI Lab",
    researchInterests: ["Deep Learning", "Reinforcement Learning", "NLP"],
    scholarUrl: "https://scholar.google.com/citations?user=66osleIAAAAJ&hl=en",
  },
  {
    id: "8",
    name: "Dr. Shanghang Zhang",
    role: "Research Collaborator",
    institution: "Peking University",
    researchInterests: ["Computer Vision", "Domain Adaptation", "Autonomous Systems"],
    scholarUrl: "https://scholar.google.com/citations?user=voqw10cAAAAJ&hl=en",
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((part) => part.length > 0 && part[0] === part[0].toUpperCase())
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function TeamSection({
  members = defaultTeamMembers,
  showAll = false,
  limit = 4,
  isLoading = false,
}: {
  members?: TeamMember[];
  showAll?: boolean;
  limit?: number;
  isLoading?: boolean;
}) {
  const data = members || defaultTeamMembers;
  const displayMembers = showAll ? data : data.slice(0, limit);

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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            World-class researchers pushing the boundaries of AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: limit }).map((_, i) => (
              <Card key={i} className="h-full">
                <CardContent className="p-6 text-center">
                  <Skeleton className="h-20 w-20 mx-auto mb-4 rounded-full" />
                  <Skeleton className="h-5 w-32 mx-auto mb-1" />
                  <Skeleton className="h-4 w-24 mx-auto mb-1" />
                  <Skeleton className="h-3 w-28 mx-auto mb-4" />
                  <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  <div className="flex justify-center gap-2">
                    <Skeleton className="h-9 w-9" />
                    <Skeleton className="h-9 w-9" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : displayMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover" data-testid={`card-team-member-${member.id}`}>
                <CardContent className="p-6 text-center">
                  <Avatar className="h-20 w-20 mx-auto mb-4 text-lg">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-4">{member.institution}</p>
                  
                  <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                    {member.researchInterests.slice(0, 2).map((interest) => (
                      <Badge key={interest} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center gap-2">
                    {member.scholarUrl && (
                      <a
                        href={member.scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-scholar-${member.id}`}
                      >
                        <Button variant="ghost" size="icon">
                          <SiGooglescholar className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    {member.githubUrl && (
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-github-${member.id}`}
                      >
                        <Button variant="ghost" size="icon">
                          <SiGithub className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-linkedin-${member.id}`}
                      >
                        <Button variant="ghost" size="icon">
                          <SiLinkedin className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {!showAll && !isLoading && members.length > limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link href="/team">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-all-team">
                View All Team Members
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export { defaultTeamMembers };
