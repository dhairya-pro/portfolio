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
  category: "Full-Stack & Realtime" | "AI & HealthTech" | "Client Solutions";
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
    id: "collabboard",
    name: "CollabBoard",
    tagline: "Real-Time Collaborative Whiteboard Engine",
    featured: true,
    category: "Full-Stack & Realtime",
    description: "A high-concurrency multiplayer digital whiteboard engineered with React, Socket.io, and Redis Pub/Sub supporting 10+ simultaneous active users with conflict-free collaborative editing and refresh token auth security.",
    technologies: ["React", "Node.js", "Socket.io", "Redis", "JWT Authentication", "MongoDB"],
    metrics: [
      { label: "Simultaneous Users", value: "10+" },
      { label: "Conflict Resolution", value: "Real-Time" },
      { label: "Auth Mechanism", value: "JWT + Refresh" }
    ],
    problem: "Real-time collaborative digital canvases frequently suffer from state desynchronization, high WebSocket broker latency under multiple active drawing sessions, and unauthorized modifications across permission tiers.",
    solution: "Architected a state-synchronized canvas leveraging Socket.io connected to a Redis Pub/Sub backend broker. Implemented granular Role-Based Access Control (Owner, Editor, Viewer) coupled with refresh-token rotation and MongoDB canvas session persistence.",
    engineeringDecisions: [
      "Utilized Redis Pub/Sub to scale WebSocket message distribution across Node.js server processes.",
      "Implemented optimistic canvas rendering on the client with delta sync server reconciliation.",
      "Designed secure JWT authorization with HTTP-only refresh tokens to protect session integrity."
    ],
    results: [
      "Engineered real-time canvas synchronization supporting 10+ active concurrent drawers.",
      "Zero state conflict during intense simultaneous vector drawing tests.",
      "Full role-based security separating viewers, active editors, and board owners."
    ],
    architecture: [
      {
        id: "node-client",
        name: "React Client Canvas",
        category: "Client",
        description: "Renders smooth vector strokes, handles touch/mouse events, and performs optimistic local stroke previewing.",
        connections: ["node-gateway", "node-socket"]
      },
      {
        id: "node-gateway",
        name: "Node.js / Express API",
        category: "Gateway",
        description: "Handles RESTful user authentication, session creation, and role-based permissions validation.",
        connections: ["node-auth", "node-db"]
      },
      {
        id: "node-socket",
        name: "Socket.io Engine",
        category: "Realtime",
        description: "Maintains full-duplex WebSocket connections for sub-millisecond drawing event broadcasts.",
        connections: ["node-redis"]
      },
      {
        id: "node-redis",
        name: "Redis Pub/Sub",
        category: "Realtime",
        description: "Acts as a high-speed message broker managing inter-process communication for multiplayer state sync.",
        connections: ["node-db"]
      },
      {
        id: "node-auth",
        name: "JWT & Token Rotation",
        category: "Auth",
        description: "Generates short-lived access tokens and handles secure refresh token rotation stored in HTTP-only cookies.",
        connections: []
      },
      {
        id: "node-db",
        name: "MongoDB Session Store",
        category: "Database",
        description: "Persists canvas JSON state, canvas version history, and user board permissions.",
        connections: []
      }
    ]
  },
  {
    id: "healthbridge-ai",
    name: "HealthBridge AI",
    tagline: "AI-Powered Healthcare Triage & Real-Time Patient Platform",
    featured: true,
    category: "AI & HealthTech",
    description: "An intelligent healthcare application pairing LLM-driven symptom triage with sub-100ms WebSocket doctor-patient communication, serving 200+ beta users with a 95+ Lighthouse accessibility score.",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Socket.io", "Tailwind CSS"],
    metrics: [
      { label: "Beta Test Users", value: "200+" },
      { label: "Message Latency", value: "<100ms" },
      { label: "Lighthouse A11y", value: "95+" }
    ],
    problem: "Patients face delayed preliminary medical assessment and complex health portal interfaces that lack accessibility standards for users with disabilities.",
    solution: "Integrated an LLM-powered symptom triage assistant using the OpenAI API to provide instant preliminary guidance, paired with a sub-100ms WebSocket doctor-patient chat built on React and Tailwind CSS matching strict WCAG accessibility guidelines.",
    engineeringDecisions: [
      "Streamed OpenAI API responses using server-sent events for responsive user guidance.",
      "Optimized WebSocket frame size and binary serialization to achieve sub-100ms messaging latency during load testing.",
      "Constructed custom accessible ARIA widgets and high-contrast UI patterns in Figma, achieving a 95+ Lighthouse accessibility rating."
    ],
    results: [
      "Delivered real-time health guidance to 200+ test users during the beta testing phase.",
      "Achieved sub-100ms message latency across concurrent doctor-patient chat channels.",
      "Scored 95+ on official Lighthouse accessibility audits."
    ],
    architecture: [
      {
        id: "hb-ui",
        name: "Accessible React UI",
        category: "Client",
        description: "Figma-designed accessible interface built with Tailwind CSS, supporting screen readers & keyboard navigation.",
        connections: ["hb-server", "hb-socket"]
      },
      {
        id: "hb-server",
        name: "Node.js Orchestration",
        category: "Gateway",
        description: "Processes user symptom inputs, sanitizes prompt data, and coordinates session logging.",
        connections: ["hb-ai", "hb-db"]
      },
      {
        id: "hb-ai",
        name: "OpenAI API Triage",
        category: "AI",
        description: "Executes structured prompt engineering for intelligent symptom classification and preliminary guidance.",
        connections: []
      },
      {
        id: "hb-socket",
        name: "Socket.io Doctor Chat",
        category: "Realtime",
        description: "Delivers sub-100ms latency real-time messaging between patients and clinical advisors.",
        connections: ["hb-db"]
      },
      {
        id: "hb-db",
        name: "MongoDB Clinical Store",
        category: "Database",
        description: "Encrypts user chat histories, assessment logs, and doctor-patient session metadata.",
        connections: []
      }
    ]
  },
  {
    id: "tanushbuildcon",
    name: "TanushBuildCon",
    tagline: "Commercial Construction Services Platform",
    featured: false,
    category: "Client Solutions",
    description: "A production client platform providing a responsive React front-end, secure Express backend, automated lead notifications, and reliable infrastructure serving 300+ monthly visitors.",
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
      "Successfully launched live platform currently serving 300+ monthly visitors.",
      "Handles 50+ monthly client submissions with automated notification routing."
    ],
    architecture: []
  },
  {
    id: "auramed",
    name: "Auramed",
    tagline: "Pharmaceutical Product Showcase & API Platform",
    featured: false,
    category: "Client Solutions",
    description: "An optimized product showcase catalog displaying 100+ pharmaceutical products with lazy loading and compound MongoDB query tuning that slashed page load times by 35%.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "RESTful APIs"],
    metrics: [
      { label: "Load Time Reduction", value: "35%" },
      { label: "Pharma Catalog", value: "100+" },
      { label: "Database", value: "MongoDB" }
    ],
    problem: "Large catalog payloads caused sluggish page rendering, poor image load performance, and high drop-off rates during mobile product exploration.",
    solution: "Restructured product querying with indexed MongoDB pagination, implemented component-level lazy loading, and optimized dynamic React catalog lists.",
    engineeringDecisions: [
      "Added compound indexing on category and name fields in MongoDB for rapid pagination.",
      "Implemented image lazy loading and responsive asset sizing in React."
    ],
    results: [
      "Reduced average page load time by 35%.",
      "Dynamic showcase seamless rendering 100+ pharmaceutical products.",
      "Measurably boosted user retention metrics."
    ],
    architecture: []
  }
];
