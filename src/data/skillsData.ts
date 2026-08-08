export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "AI / ML" | "Testing & DevOps" | "Tools";
  description: string;
  featured?: boolean;
}

export const SKILL_CATEGORIES = [
  "Frontend",
  "Backend",
  "AI / ML",
  "Testing & DevOps",
  "Tools"
] as const;

export const SKILLS: SkillItem[] = [
  // Frontend
  { name: "React.js", category: "Frontend", description: "Core framework used in CollabBoard, HealthBridge AI, TanushBuildCon, and Auramed.", featured: true },
  { name: "Next.js 14", category: "Frontend", description: "Server-side rendering, App Router architecture, and production optimization.", featured: true },
  { name: "TypeScript", category: "Frontend", description: "Type-safe full-stack application development ensuring strict API contracts.", featured: true },
  { name: "JavaScript ES2023", category: "Frontend", description: "Modern asynchronous execution, ES modules, array methods, and functional patterns.", featured: false },
  { name: "HTML5", category: "Frontend", description: "Semantic markup, accessible DOM structures, and optimized element hierarchy.", featured: false },
  { name: "CSS3", category: "Frontend", description: "Modern flexbox, grid layouts, fluid typography, and custom micro-animations.", featured: false },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility-first styling used for HealthBridge AI achieving 95+ Lighthouse accessibility.", featured: true },
  { name: "Bootstrap", category: "Frontend", description: "Responsive grid layouts and pre-styled UI component integration.", featured: false },
  { name: "Redux", category: "Frontend", description: "Centralized state management for multi-view web applications.", featured: false },
  { name: "Zustand", category: "Frontend", description: "Lightweight reactive state store for micro-frontend state synchronization.", featured: false },

  // Backend
  { name: "Node.js", category: "Backend", description: "Asynchronous runtime powering server APIs for Technoviewer, CollabBoard, and HealthBridge AI.", featured: true },
  { name: "Express.js", category: "Backend", description: "RESTful routing, auth middleware, and API endpoint construction.", featured: true },
  { name: "MongoDB", category: "Backend", description: "NoSQL document database, compound indexing, lazy querying used across 3+ client apps.", featured: true },
  { name: "RESTful APIs", category: "Backend", description: "Robust HTTP API design handling 500+ daily requests in internship deployments.", featured: true },
  { name: "JWT Authentication", category: "Backend", description: "Secure access tokens and HTTP-only refresh-token rotation in CollabBoard.", featured: true },
  { name: "Socket.io", category: "Backend", description: "Full-duplex WebSockets achieving <100ms latency in HealthBridge AI and 10+ user CollabBoard.", featured: true },
  { name: "Redis", category: "Backend", description: "Pub/Sub message broker and caching engine for real-time multiplayer state.", featured: true },
  { name: "Flask", category: "Backend", description: "Python micro-framework for serving AI model inference endpoints.", featured: false },

  // AI / ML
  { name: "Python", category: "AI / ML", description: "Core programming language for machine learning pipeline development and data modeling.", featured: true },
  { name: "scikit-learn", category: "AI / ML", description: "Supervised and unsupervised classification, regression, and model evaluation.", featured: true },
  { name: "TensorFlow", category: "AI / ML", description: "Deep learning model construction, neural network training, and evaluation.", featured: true },
  { name: "Pandas", category: "AI / ML", description: "Data cleaning, feature engineering, and tabular dataset manipulation.", featured: false },
  { name: "NumPy", category: "AI / ML", description: "High-performance vector and matrix linear algebra calculations.", featured: false },
  { name: "OpenCV", category: "AI / ML", description: "Computer vision, image pre-processing, and spatial analysis.", featured: false },
  { name: "NLP / spaCy", category: "AI / ML", description: "Text tokenization, entity recognition, and natural language processing.", featured: false },
  { name: "OpenAI API", category: "AI / ML", description: "LLM prompt engineering for HealthBridge AI symptom triage chatbot engine.", featured: true },

  // Testing & DevOps
  { name: "Jest", category: "Testing & DevOps", description: "Unit testing and assertion suites for API logic validation.", featured: false },
  { name: "React Testing Library", category: "Testing & DevOps", description: "User-centric component rendering and accessibility interaction testing.", featured: false },
  { name: "GitHub Actions", category: "Testing & DevOps", description: "Automated CI/CD workflows for linting, testing, and deployment.", featured: true },
  { name: "CI/CD", category: "Testing & DevOps", description: "Continuous integration pipelines delivering client updates securely.", featured: false },
  { name: "Docker", category: "Testing & DevOps", description: "Containerized deployment environments ensuring consistent production runtime.", featured: true },
  { name: "Vercel", category: "Testing & DevOps", description: "Serverless web deployment with automated edge CDN caching.", featured: false },
  { name: "Netlify", category: "Testing & DevOps", description: "Jamstack platform hosting and continuous Git branch deployment.", featured: false },
  { name: "Render", category: "Testing & DevOps", description: "Cloud hosting for Node.js API services and MongoDB connection instances.", featured: false },

  // Tools
  { name: "Git", category: "Tools", description: "Version control, feature branching, interactive rebase, and code review.", featured: true },
  { name: "GitHub", category: "Tools", description: "Repository management, issues tracking, pull request workflows.", featured: true },
  { name: "VS Code", category: "Tools", description: "Primary IDE configured with ESLint, Prettier, and debugging tools.", featured: false },
  { name: "Postman", category: "Tools", description: "API contract testing, endpoint debugging, and collection verification.", featured: false },
  { name: "Figma", category: "Tools", description: "UI design wireframing and accessibility prototyping used for HealthBridge AI.", featured: true }
];
