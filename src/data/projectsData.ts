export interface ArchitectureNode {
  id: string;
  name: string;
  category: "Client" | "Gateway" | "Realtime" | "AI" | "Database" | "Auth";
  description: string;
  connections: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  featured: boolean;
  isLiveClient: boolean;
  category: "Client Solutions" | "Realtime Systems" | "AI & HealthTech";
  liveUrl?: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  engineeringDecisions: string[];
  results: string[];
  architecture: ArchitectureNode[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "dpfilterpress",
    name: "DP Filter Press Trading",
    tagline: "Industrial Trading & Machinery Equipment Platform",
    featured: true,
    isLiveClient: true,
    category: "Client Solutions",
    liveUrl: "https://dpfilterpresstrading.com/",
    description: "An industrial trading web application engineered for DP Filter Press Trading, featuring custom machinery product categorization, high-throughput inquiry routing, and responsive performance.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Tailwind CSS"],
    metrics: [
      { label: "Deployment", value: "Live Client" },
      { label: "Industry", value: "Industrial" },
      { label: "Platform", value: "Full-Stack" }
    ],
    problem: "The client required an intuitive industrial equipment platform to present filter press machinery models and streamline commercial customer quote inquiries.",
    solution: "Built a modern responsive web portal with modular product catalogs, structured specification sheets, and a secure lead dispatch system.",
    engineeringDecisions: [
      "Engineered flexible component structures in React to render technical equipment specifications.",
      "Configured robust RESTful API endpoints for inquiry sanitization and lead delivery."
    ],
    results: [
      "Successfully deployed live industrial platform at dpfilterpresstrading.com.",
      "Enhanced digital visibility and customer quote request workflow."
    ],
    architecture: []
  },
  {
    id: "tanushbuildcon",
    name: "TanushBuildCon (Tanush Group)",
    tagline: "Commercial Construction Services Platform",
    featured: true,
    isLiveClient: true,
    category: "Client Solutions",
    liveUrl: "https://tanushgroup.com/",
    description: "A live production client platform providing a responsive React front-end, secure Express backend, automated lead notifications, and reliable infrastructure serving 300+ monthly visitors.",
    technologies: ["React.js", "Node.js", "Express.js", "CSS3", "Email API"],
    metrics: [
      { label: "Monthly Visitors", value: "300+" },
      { label: "Client Submissions", value: "50+" },
      { label: "Status", value: "Live Client" }
    ],
    problem: "The client required a modern digital presence to replace legacy contact flows, capture customer inquiries securely, and eliminate missed construction project leads.",
    solution: "Designed and developed a sleek responsive web portal connected to a Node.js inquiry processing pipeline with real-time email notifications for project managers.",
    engineeringDecisions: [
      "Built lightweight custom CSS layout modules to optimize mobile rendering speed.",
      "Implemented input sanitization and rate-limiting on Express form submission endpoints."
    ],
    results: [
      "Successfully launched live platform at tanushgroup.com serving 300+ monthly visitors.",
      "Handles 50+ monthly client submissions with automated notification routing."
    ],
    architecture: []
  },
  {
    id: "auramed",
    name: "Auramed Enterprise",
    tagline: "Pharmaceutical Product Showcase & API Platform",
    featured: true,
    isLiveClient: true,
    category: "Client Solutions",
    liveUrl: "https://www.auramedenterprise.com/",
    description: "An optimized pharmaceutical product showcase catalog displaying 100+ pharmaceutical products with lazy loading and compound MongoDB query tuning that slashed page load times by 35%.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "RESTful APIs"],
    metrics: [
      { label: "Load Time Reduction", value: "35%" },
      { label: "Pharma Catalog", value: "100+" },
      { label: "Status", value: "Live Client" }
    ],
    problem: "Large catalog payloads caused sluggish page rendering, poor image load performance, and high drop-off rates during mobile product exploration.",
    solution: "Restructured product querying with indexed MongoDB pagination, implemented component-level lazy loading, and optimized dynamic React catalog lists.",
    engineeringDecisions: [
      "Added compound indexing on category and name fields in MongoDB for rapid pagination.",
      "Implemented image lazy loading and responsive asset sizing in React."
    ],
    results: [
      "Launched live showcase at auramedenterprise.com.",
      "Reduced average page load time by 35% across 100+ pharmaceutical products."
    ],
    architecture: []
  },
  {
    id: "collabboard",
    name: "CollabBoard",
    tagline: "Real-Time Collaborative Whiteboard",
    featured: false,
    isLiveClient: false,
    category: "Realtime Systems",
    description: "Worked on engineering a real-time multiplayer digital whiteboard supporting 10+ simultaneous users with conflict-free collaborative editing, Socket.io, Redis Pub/Sub, and JWT refresh-token rotation.",
    technologies: ["React", "Node.js", "Socket.io", "Redis", "JWT Authentication", "MongoDB"],
    metrics: [
      { label: "Simultaneous Users", value: "10+" },
      { label: "Editing Model", value: "Conflict-Free" },
      { label: "Type", value: "Technical Project" }
    ],
    problem: "Real-time collaborative digital canvases frequently suffer from state desynchronization and high WebSocket broker latency across active drawing sessions.",
    solution: "Built a state-synchronized whiteboard concept using Socket.io connected to Redis Pub/Sub for inter-process message broadcasting, paired with JWT refresh token auth and MongoDB canvas persistence.",
    engineeringDecisions: [
      "Utilized Redis Pub/Sub to scale WebSocket message distribution across Node.js server processes.",
      "Designed secure JWT authorization with HTTP-only refresh tokens."
    ],
    results: [
      "Engineered multiplayer whiteboard architecture supporting 10+ active concurrent drawers.",
      "Implemented role-based access for Owner, Editor, and Viewer permissions."
    ],
    architecture: []
  },
  {
    id: "healthbridge-ai",
    name: "HealthBridge AI",
    tagline: "AI-Powered Healthcare Platform",
    featured: false,
    isLiveClient: false,
    category: "AI & HealthTech",
    description: "Worked on building an AI symptom triage chatbot concept powered by the OpenAI API, paired with a sub-100ms WebSocket chat prototype tested with 200+ beta users and a 95+ Lighthouse accessibility rating.",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Socket.io", "Tailwind CSS"],
    metrics: [
      { label: "Beta Test Users", value: "200+" },
      { label: "Message Latency", value: "<100ms" },
      { label: "Type", value: "Technical Project" }
    ],
    problem: "Developing an accessible healthcare interface providing rapid preliminary symptom assessment without clinical latency.",
    solution: "Integrated OpenAI API for preliminary symptom triage guidance paired with a sub-100ms WebSocket doctor-patient chat built on React and Tailwind CSS matching WCAG accessibility guidelines.",
    engineeringDecisions: [
      "Streamed OpenAI API responses for responsive user guidance.",
      "Constructed accessible UI patterns in Figma achieving a 95+ Lighthouse accessibility rating."
    ],
    results: [
      "Delivered real-time health guidance concept tested with 200+ beta users.",
      "Achieved sub-100ms message latency in load tests with a 95+ Lighthouse accessibility score."
    ],
    architecture: []
  }
];
