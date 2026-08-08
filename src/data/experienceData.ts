export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  type: "Internship" | "Client Project" | "Freelance";
  period: string;
  year: string;
  liveUrl?: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "technoviewer",
    role: "MERN Stack Developer Intern",
    company: "Technoviewer",
    location: "Bharuch, Gujarat",
    type: "Internship",
    period: "Jan 2026 – Present",
    year: "2026",
    summary: "Active internship developing & optimizing production-grade MERN web applications serving real-world client traffic with high availability and stringent MongoDB security standards.",
    highlights: [
      "Developing and maintaining 3+ full-stack web applications using the MERN stack.",
      "Applications serve 1,000+ active users across client deployments.",
      "Built RESTful APIs with JWT authentication handling 500+ daily requests.",
      "Focused on data integrity, index optimization, and security across MongoDB environments."
    ],
    metrics: [
      { label: "Active Users", value: "1,000+" },
      { label: "Daily API Requests", value: "500+" },
      { label: "Full-Stack Apps", value: "3+" }
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT", "JavaScript ES2023"]
  },
  {
    id: "dpfilterpress",
    role: "Full Stack Developer",
    company: "DP Filter Press Trading",
    location: "Live Client Platform",
    type: "Client Project",
    period: "Feb 2025 – Present",
    year: "2025",
    liveUrl: "https://dpfilterpresstrading.com/",
    summary: "Engineered a production industrial trading web application for machinery equipment product showcase and streamlined lead processing.",
    highlights: [
      "Developed responsive React frontend for industrial filter press machinery catalog.",
      "Constructed high-performance Node.js/Express APIs for commercial customer quote inquiries.",
      "Deployed live platform serving industrial trading clients with zero downtime."
    ],
    metrics: [
      { label: "Platform", value: "Live Client" },
      { label: "Category", value: "Industrial" },
      { label: "Stack", value: "Full-Stack" }
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs"]
  },
  {
    id: "tanushbuildcon",
    role: "Full Stack Developer",
    company: "TanushBuildCon (Tanush Group)",
    location: "Remote / Client",
    type: "Client Project",
    period: "Jan 2025 – Feb 2025",
    year: "2025",
    liveUrl: "https://tanushgroup.com/",
    summary: "End-to-end engineering of a high-performance construction services platform for client operations, inquiry management, and lead tracking.",
    highlights: [
      "Built a highly responsive React frontend integrated with a robust Node.js/Express backend.",
      "Deployed platform live at tanushgroup.com, currently serving 300+ monthly visitors with zero downtime.",
      "Implemented secure inquiry management system processing 50+ monthly client submissions.",
      "Configured automated real-time email notification integration for fast lead dispatch."
    ],
    metrics: [
      { label: "Monthly Visitors", value: "300+" },
      { label: "Monthly Submissions", value: "50+" },
      { label: "Delivery Time", value: "2 Months" }
    ],
    technologies: ["React.js", "Node.js", "Express.js", "CSS3", "Email API", "RESTful APIs"]
  },
  {
    id: "auramed",
    role: "Full Stack Engineer",
    company: "Auramed Enterprise",
    location: "Client Case Study",
    type: "Client Project",
    period: "Jan 2025 – Feb 2025",
    year: "2025",
    liveUrl: "https://www.auramedenterprise.com/",
    summary: "Engineered a fast, scalable pharmaceutical product showcase with dynamic index querying, optimized load times, and improved user retention.",
    highlights: [
      "Engineered a React-based product showcase with dynamic listings for 100+ pharmaceutical products.",
      "Deployed live platform at auramedenterprise.com.",
      "Reduced average page load time by 35% through lazy loading, code-splitting, and query tuning.",
      "Substantially improved user retention and browse depth metrics."
    ],
    metrics: [
      { label: "Page Load Boost", value: "35%" },
      { label: "Pharma Products", value: "100+" },
      { label: "Backend API", value: "Node/Mongo" }
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "REST APIs", "Lazy Loading", "Performance Optimization"]
  }
];
