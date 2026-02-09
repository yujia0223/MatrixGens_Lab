import { useQuery } from "@tanstack/react-query";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { PublicationsSection } from "@/components/publications-section";
import { TeamSection } from "@/components/team-section";
import { NewsSection } from "@/components/news-section";
import { ContactSection } from "@/components/contact-section";
import type { Publication, Project, TeamMember, NewsItem } from "@shared/schema";

export default function Home() {
  const { data: publications, isLoading: loadingPubs } = useQuery<Publication[]>({
    queryKey: ["/api/publications"],
  });

  const { data: projects, isLoading: loadingProjects } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const { data: team, isLoading: loadingTeam } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  const { data: news, isLoading: loadingNews } = useQuery<NewsItem[]>({
    queryKey: ["/api/news"],
  });

  return (
    <main>
      <HeroSection />
      <ProjectsSection 
        projects={projects} 
        isLoading={loadingProjects} 
      />
      <PublicationsSection 
        publications={publications} 
        isLoading={loadingPubs} 
      />
      <TeamSection 
        members={team} 
        isLoading={loadingTeam} 
      />
      <NewsSection 
        news={news} 
        isLoading={loadingNews} 
      />
      <ContactSection />
    </main>
  );
}
