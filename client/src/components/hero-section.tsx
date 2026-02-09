import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Advancing AI Research
            <span className="block mt-2 text-white/90">Through Open Collaboration</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
            MatrixLab is a non-profit research lab dedicated to pushing the boundaries of 
            artificial intelligence. We focus on reinforcement learning, LLM agents, 
            and multiagent systems to create impactful, open-source research.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" variant="secondary" className="gap-2" data-testid="button-explore-research">
                Explore Research
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/team">
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 bg-white/10 border-white/20 text-white backdrop-blur-sm"
                data-testid="button-meet-team"
              >
                Meet the Team
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            <StatsCard
              icon={<BookOpen className="h-5 w-5" />}
              value="40+"
              label="Publications"
            />
            <StatsCard
              icon={<Award className="h-5 w-5" />}
              value="1,000+"
              label="Citations"
            />
            <StatsCard
              icon={<Users className="h-5 w-5" />}
              value="15+"
              label="Active Collaborators"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-white" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
          {value}
        </div>
        <div className="text-sm text-white/70">{label}</div>
      </div>
    </div>
  );
}
