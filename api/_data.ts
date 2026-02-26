// Shared data for Vercel serverless API functions
// Prefix with _ so Vercel does NOT treat it as a route

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  citations: number;
  abstract?: string;
  pdfUrl?: string;
  scholarUrl?: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  publications: string[];
  status: "active" | "completed";
  imageUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  institution: string;
  researchInterests: string[];
  scholarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  imageUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "conference" | "publication" | "announcement" | "event";
  link?: string;
}

export const publicationsData: Publication[] = [
  {
    id: "pub-1",
    title: "VisualEDU: A Benchmark for Assessing Coding and Visual Comprehension through Educational Problem-Solving Video Generation",
    authors: "H Chen, T Shi, P Huang, Z Li, J Pan, Q Chen, L He",
    venue: "Findings of the Association for Computational Linguistics: EMNLP 2025",
    year: 2025,
    citations: 0,
    abstract: "We present VisualEDU, a comprehensive benchmark for assessing coding and visual comprehension capabilities through educational problem-solving video generation tasks.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:J-pR_7NvFogC",
    category: "Machine Learning"
  },
  {
    id: "pub-2",
    title: "GE-Adapter: A General and Efficient Adapter for Enhanced Video Editing with Pretrained Text-to-Image Diffusion Models",
    authors: "Y He, S Li, K Li, J Wang, B Li, T Shi, Y Xin, K Li, J Yin, M Zhang, X Wang",
    venue: "Expert Systems with Applications",
    year: 2025,
    citations: 26,
    abstract: "We introduce GE-Adapter, a general and efficient adapter that enables enhanced video editing capabilities using pretrained text-to-image diffusion models.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:V3AGJWp-ZtQC",
    category: "Machine Learning"
  },
  {
    id: "pub-3",
    title: "SEDM: Scalable Self-Evolving Distributed Memory for Agents",
    authors: "H Xu, J Hu, K Zhang, L Yu, Y Tang, X Song, Y Duan, L Ai, B Shi",
    venue: "arXiv preprint",
    year: 2025,
    citations: 1,
    abstract: "We propose SEDM, a scalable self-evolving distributed memory system designed for multi-agent systems, enabling efficient knowledge sharing and adaptation.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:eJXPG6dFmWUC",
    category: "AI Agents"
  },
  {
    id: "pub-4",
    title: "Measuring Harmfulness of Computer-Using Agents",
    authors: "AX Tian, R Zhang, J Tang, J Wang, T Shi, J Wen",
    venue: "arXiv preprint",
    year: 2025,
    citations: 0,
    abstract: "This work introduces a framework for measuring and evaluating the potential harmfulness of computer-using AI agents, addressing safety concerns in autonomous systems.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:eflP2zaiRacC",
    category: "AI Agents"
  },
  {
    id: "pub-5",
    title: "The 4th Dimension for Scaling Model Size",
    authors: "R Zhu, H Zhang, T Shi, C Wang, T Zhou, Z Qin",
    venue: "arXiv preprint",
    year: 2025,
    citations: 4,
    abstract: "We explore a novel fourth dimension for scaling model size, providing new insights into efficient model architecture design and training.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:XiSMed-E-HIC",
    category: "Machine Learning"
  },
  {
    id: "pub-6",
    title: "Mitigating age-related bias in large language models: Strategies for responsible artificial intelligence development",
    authors: "Z Liu, S Qian, S Cao, T Shi",
    venue: "INFORMS Journal on Computing (UTD24)",
    year: 2025,
    citations: 4,
    abstract: "We present strategies for mitigating age-related bias in large language models, contributing to more responsible and fair AI development practices.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:UxriW0iASnsC",
    category: "Machine Learning"
  },
  {
    id: "pub-7",
    title: "Catch Me If You Can: A Multi-Agent Synthetic Fraud Detection Framework for Complex Networks",
    authors: "Q Wang, WT Tsai, T Shi, Z Liu, B Du",
    venue: "IEEE 41st International Conference on Data Engineering (ICDE)",
    year: 2025,
    citations: 2,
    abstract: "We propose a multi-agent synthetic fraud detection framework designed for complex networks, achieving robust detection in adversarial settings.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:4fKUyHm3Qg0C",
    category: "AI Agents"
  },
  {
    id: "pub-8",
    title: "MDANet: A multi-stage domain adaptation framework for generalizable low-light image enhancement",
    authors: "J Wang, Y He, K Li, S Li, L Zhao, J Yin, M Zhang, T Shi, X Wang",
    venue: "Neurocomputing",
    year: 2025,
    citations: 19,
    abstract: "We introduce MDANet, a multi-stage domain adaptation framework that achieves generalizable low-light image enhancement across diverse scenarios.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:tS2w5q8j5-wC",
    category: "Machine Learning"
  },
  {
    id: "pub-9",
    title: "CCMA: A framework for cascading cooperative multi-agent in autonomous driving merging using Large Language Models",
    authors: "M Zhang, Z Fang, T Wang, S Lu, X Wang, T Shi",
    venue: "Expert Systems with Applications",
    year: 2025,
    citations: 15,
    abstract: "We present CCMA, a novel framework for cascading cooperative multi-agent systems in autonomous driving merging scenarios, powered by Large Language Models.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:08ZZubdj9fEC",
    category: "AI Agents"
  },
  {
    id: "pub-10",
    title: "Debflow: Automating agent creation via agent debate",
    authors: "J Su, Y Xia, R Shi, J Wang, J Huang, Y Wang, T Shi, Y Jingsong, L He",
    venue: "CFAgentic @ ICML'25",
    year: 2025,
    citations: 8,
    abstract: "We propose Debflow, an innovative approach to automating agent creation through structured agent debate, enabling more efficient and effective agent development.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:5Ul4iDaHHb8C",
    category: "AI Agents"
  },
  {
    id: "pub-11",
    title: "Multi-Modal Large Language Model with RAG Strategies in Soccer Commentary Generation",
    authors: "X Li, Y He, S Zu, Z Li, T Shi, Y Xie, K Zhang",
    venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
    year: 2025,
    citations: 3,
    abstract: "We present a multi-modal large language model with RAG strategies for generating high-quality soccer commentary, combining vision and language understanding.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:tOudhMTPpwUC",
    category: "Machine Learning"
  },
  {
    id: "pub-12",
    title: "Railway side slope hazard detection system based on generative models",
    authors: "X Zheng, Y He, Y Luo, L Zhang, J Wang, T Shi, Y Bai",
    venue: "IEEE Sensors Journal",
    year: 2025,
    citations: 9,
    abstract: "We develop a railway side slope hazard detection system leveraging generative models for improved safety monitoring and early warning capabilities.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:fQNAKQ3IYiAC",
    category: "Machine Learning"
  },
  {
    id: "pub-13",
    title: "SCBench: A Sports Commentary Benchmark for Video LLMs",
    authors: "K Ge, L Chen, K Zhang, Y Luo, T Shi, L Fan, X Li, G Wang, S Zhang",
    venue: "arXiv preprint",
    year: 2024,
    citations: 3,
    abstract: "We introduce SCBench, a comprehensive benchmark for evaluating Video LLMs on sports commentary generation tasks across multiple sports domains.",
    scholarUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DC0t9zwAAAAJ&sortby=pubdate&citation_for_view=DC0t9zwAAAAJ:1qzjygNMrQYC",
    category: "Machine Learning"
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "LLM Agent Systems",
    description: "Building intelligent multi-agent systems powered by Large Language Models for complex task solving",
    longDescription: "Our flagship project focused on developing cutting-edge LLM-powered agent systems. We research cascading cooperative multi-agent frameworks for autonomous driving, agent debate for automated agent creation, and scalable self-evolving distributed memory systems.",
    category: "AI Agents",
    publications: ["pub-3", "pub-4", "pub-7", "pub-9", "pub-10"],
    status: "active"
  },
  {
    id: "proj-2",
    title: "Multi-Modal AI Research",
    description: "Advancing vision-language models for video understanding, editing, and generation",
    longDescription: "This project explores multi-modal large language models combining vision and language understanding. Our work includes video editing with diffusion models, sports commentary generation with RAG strategies, and comprehensive benchmarks for evaluating video LLMs.",
    category: "Machine Learning",
    publications: ["pub-1", "pub-2", "pub-8", "pub-11", "pub-13"],
    status: "active"
  },
  {
    id: "proj-3",
    title: "Responsible AI Development",
    description: "Researching fairness, safety, and ethical considerations in AI systems",
    longDescription: "We investigate critical aspects of responsible AI development including mitigating age-related bias in large language models, measuring harmfulness of computer-using agents, and developing strategies for building fairer and safer AI systems.",
    category: "Machine Learning",
    publications: ["pub-4", "pub-6"],
    status: "active"
  },
  {
    id: "proj-4",
    title: "Applied AI Systems",
    description: "Real-world applications of AI in safety-critical domains including transportation and infrastructure",
    longDescription: "We develop practical AI solutions for real-world challenges including railway side slope hazard detection using generative models, fraud detection in complex networks, and autonomous driving systems.",
    category: "Machine Learning",
    publications: ["pub-7", "pub-12"],
    status: "active"
  }
];

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Tianyu Shi",
    role: "Director & Principal Researcher",
    institution: "University of Toronto",
    researchInterests: ["Reinforcement Learning", "Large Language Models", "LLM Agent", "Multiagent System"],
    scholarUrl: "https://scholar.google.com/citations?user=DC0t9zwAAAAJ",
    linkedinUrl: "https://linkedin.com"
  },
  {
    id: "team-2",
    name: "Yujia Zhang",
    role: "Research Scientist",
    institution: "University of Alberta",
    researchInterests: ["Large Language Models", "LLM Agents", "Knowledge Graphs"],
    scholarUrl: "https://scholar.google.com/citations?user=gk-KtnkAAAAJ&hl=en",
    linkedinUrl: "https://www.linkedin.com/in/yujia-zhang-phd/"
  },
  {
    id: "team-3",
    name: "Lewei He",
    role: "Research Collaborator",
    institution: "South China Normal University",
    researchInterests: ["Computer Vision", "Machine Learning", "Video Understanding"],
    scholarUrl: "https://scholar.google.com/citations?user=yNotJ_cAAAAJ"
  },
  {
    id: "team-4",
    name: "Pin Wang",
    role: "Research Collaborator",
    institution: "University of California, Berkeley",
    researchInterests: ["Machine Learning", "AI Systems", "Deep Learning"],
    scholarUrl: "https://scholar.google.com/citations?user=QPf13fYAAAAJ"
  },
  {
    id: "team-5",
    name: "Lijun Sun",
    role: "Research Collaborator",
    institution: "McGill University",
    researchInterests: ["Transportation", "Machine Learning", "Data Science"],
    scholarUrl: "https://scholar.google.com/citations?user=qi4IEtkAAAAJ"
  },
  {
    id: "team-6",
    name: "Lei Yu",
    role: "Research Collaborator",
    institution: "Meta Superintelligence Labs (FAIR), University of Toronto",
    researchInterests: ["Large Language Models", "AI Research", "Deep Learning"],
    scholarUrl: "https://scholar.google.com/citations?user=GJ_b4rkAAAAJ"
  },
  {
    id: "team-7",
    name: "Chi Wang",
    role: "Research Collaborator",
    institution: "Google DeepMind",
    researchInterests: ["Machine Learning", "AutoML", "AI Systems"],
    scholarUrl: "https://scholar.google.com/citations?user=IiSNwnAAAAAJ"
  },
  {
    id: "team-8",
    name: "Ruike Zhu",
    role: "Research Collaborator",
    institution: "University of Illinois Urbana-Champaign",
    researchInterests: ["Machine Learning", "Model Scaling", "Deep Learning"],
    scholarUrl: "https://scholar.google.com/citations?user=kTSKemkAAAAJ"
  },
  {
    id: "team-9",
    name: "Zengyi Qin",
    role: "Research Collaborator",
    institution: "Massachusetts Institute of Technology",
    researchInterests: ["Computer Vision", "Autonomous Systems", "Machine Learning"],
    scholarUrl: "https://scholar.google.com/citations?user=lwwVd7sAAAAJ"
  }
];

export const newsData: NewsItem[] = [
  {
    id: "news-1",
    title: "VisualEDU Paper Accepted at EMNLP 2025",
    description: "Our research on educational problem-solving video generation has been accepted at the Findings of EMNLP 2025.",
    date: "2025-10-15",
    category: "publication",
    link: "/publications"
  },
  {
    id: "news-2",
    title: "Debflow Presented at CFAgentic @ ICML'25",
    description: "Our work on automating agent creation via agent debate was presented at the CFAgentic workshop at ICML 2025.",
    date: "2025-07-20",
    category: "conference"
  },
  {
    id: "news-3",
    title: "CCMA Framework Published in Expert Systems with Applications",
    description: "Our cascading cooperative multi-agent framework for autonomous driving has been published and has received 15 citations.",
    date: "2025-06-10",
    category: "publication",
    link: "/publications"
  },
  {
    id: "news-4",
    title: "Multi-Agent Fraud Detection at ICDE 2025",
    description: "Our multi-agent synthetic fraud detection framework was presented at IEEE ICDE 2025.",
    date: "2025-04-15",
    category: "conference"
  }
];
