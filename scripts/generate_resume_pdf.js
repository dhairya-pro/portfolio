import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4"
});

// Color Palette
const DARK = "#0f172a";
const ACCENT = "#0284c7";
const GRAY = "#475569";
const LIGHT_BG = "#f8fafc";

// Helper function for line adding
let y = 15;

function addHeader() {
  doc.setFillColor(15, 23, 42); // #0f172a
  doc.rect(0, 0, 210, 38, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("DHAIRYA SHAH", 15, 16);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(56, 189, 248); // sky-400
  doc.text("Full-Stack / MERN Stack Developer & AI/ML Engineer", 15, 23);

  doc.setFontSize(9);
  doc.setTextColor(226, 232, 240);
  doc.text("Bharuch, Gujarat, India  |  +91 88496 37157  |  shahdhairya069@gmail.com", 15, 30);
  doc.text("LinkedIn: linkedin.com/in/dhairya-shah  |  GitHub: github.com/dhairya-shah", 15, 35);
  y = 45;
}

function addSectionTitle(title) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(2, 132, 199);
  doc.text(title.toUpperCase(), 15, y);
  y += 2;
  doc.setDrawColor(2, 132, 199);
  doc.setLineWidth(0.5);
  doc.line(15, y, 195, y);
  y += 6;
}

addHeader();

// Professional Summary
addSectionTitle("Professional Summary");
doc.setFont("helvetica", "normal");
doc.setFontSize(9.5);
doc.setTextColor(71, 85, 105);
const summaryText = "Full-Stack developer with hands-on experience building production-grade MERN applications for real clients and active internship. Combines web development expertise with AI/ML capabilities using technologies such as Python, TensorFlow, and scikit-learn to build intelligent, user-centric products. Holds a 9.0/10 CGPA academic record with experience delivering end-to-end solutions ranging from accessible UI design to secure RESTful APIs.";
const splitSummary = doc.splitTextToSize(summaryText, 180);
doc.text(splitSummary, 15, y);
y += splitSummary.length * 4.5 + 4;

// Professional Experience
addSectionTitle("Professional Experience");

// Role 1
doc.setFont("helvetica", "bold");
doc.setFontSize(10.5);
doc.setTextColor(15, 23, 42);
doc.text("MERN Stack Developer Intern", 15, y);
doc.setFont("helvetica", "bold");
doc.setTextColor(2, 132, 199);
doc.text("Technoviewer", 95, y);
doc.setFont("helvetica", "italic");
doc.setTextColor(71, 85, 105);
doc.setFontSize(9);
doc.text("Bharuch, India  |  Jan 2026 – Present", 145, y);
y += 5;

const exp1 = [
  "Developing and maintaining 3+ full-stack web applications using the MERN stack.",
  "Applications serve 1,000+ active users across client deployments.",
  "Built RESTful APIs with JWT authentication handling 500+ daily requests.",
  "Focused on data integrity, query optimization, and security across MongoDB environments."
];
exp1.forEach(bullet => {
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text("•  " + bullet, 18, y);
  y += 4.5;
});
y += 3;

// Role 2 - Client Project
doc.setFont("helvetica", "bold");
doc.setFontSize(10.5);
doc.setTextColor(15, 23, 42);
doc.text("Full Stack Developer (Freelance Client)", 15, y);
doc.setFont("helvetica", "bold");
doc.setTextColor(2, 132, 199);
doc.text("TanushBuildCon", 105, y);
doc.setFont("helvetica", "italic");
doc.setTextColor(71, 85, 105);
doc.setFontSize(9);
doc.text("Jan 2025 – Feb 2025", 160, y);
y += 5;

const exp2 = [
  "Built responsive React frontend and Node.js/Express backend for a commercial construction platform.",
  "Website went live, serving 300+ monthly visitors with zero downtime.",
  "Implemented secure inquiry management handling 50+ monthly client submissions with automated email integration."
];
exp2.forEach(bullet => {
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text("•  " + bullet, 18, y);
  y += 4.5;
});
y += 3;

// Featured Projects
addSectionTitle("Featured Technical Projects");

// CollabBoard
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(15, 23, 42);
doc.text("CollabBoard — Real-Time Collaborative Whiteboard", 15, y);
doc.setFont("helvetica", "italic");
doc.setFontSize(8.5);
doc.setTextColor(2, 132, 199);
doc.text("React, Node.js, Socket.io, Redis, JWT, MongoDB", 130, y);
y += 5;
const proj1 = [
  "Built a multiplayer whiteboard supporting 10+ simultaneous users with conflict-free collaborative editing.",
  "Used Socket.io and Redis Pub/Sub for real-time collaboration and state synchronization across sessions.",
  "Implemented JWT authentication with refresh-token rotation and role-based access (Owner, Editor, Viewer).",
  "Engineered session persistence using MongoDB for continuous canvas recovery."
];
proj1.forEach(b => {
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text("•  " + b, 18, y);
  y += 4.5;
});
y += 2;

// HealthBridge AI
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(15, 23, 42);
doc.text("HealthBridge AI — AI-Powered Healthcare Platform", 15, y);
doc.setFont("helvetica", "italic");
doc.setFontSize(8.5);
doc.setTextColor(2, 132, 199);
doc.text("React, Node.js, MongoDB, OpenAI API, Socket.io, Tailwind", 115, y);
y += 5;
const proj2 = [
  "Integrated an LLM-powered symptom triage chatbot using OpenAI API, serving 200+ test users during beta.",
  "Built WebSocket-based real-time doctor-patient chat using Socket.io, achieving sub-100ms message latency.",
  "Designed accessible UI in Figma and implemented in React & Tailwind CSS, scoring 95+ on Lighthouse accessibility audits."
];
proj2.forEach(b => {
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text("•  " + b, 18, y);
  y += 4.5;
});
y += 2;

// Auramed
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(15, 23, 42);
doc.text("Auramed — Pharmaceutical Showcase & API Engine", 15, y);
doc.setFont("helvetica", "italic");
doc.setFontSize(8.5);
doc.setTextColor(2, 132, 199);
doc.text("React, Node.js, MongoDB, Express", 140, y);
y += 5;
const proj3 = [
  "Engineered a React-based product showcase with dynamic listings for 100+ pharmaceutical products.",
  "Reduced average page load time by 35% through lazy loading and optimized MongoDB query compound indexing."
];
proj3.forEach(b => {
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text("•  " + b, 18, y);
  y += 4.5;
});
y += 3;

// Technical Skills
addSectionTitle("Technical Skills");
const skillGroups = [
  { label: "Frontend", val: "React.js, Next.js 14, TypeScript, JavaScript ES2023, HTML5, CSS3, Tailwind CSS, Bootstrap, Redux, Zustand" },
  { label: "Backend", val: "Node.js, Express.js, MongoDB, RESTful APIs, JWT Authentication, Socket.io, Redis, Flask" },
  { label: "AI / ML", val: "Python, scikit-learn, TensorFlow, Pandas, NumPy, OpenCV, NLP / spaCy, OpenAI API" },
  { label: "Testing & DevOps", val: "Jest, React Testing Library, GitHub Actions, CI/CD, Docker, Vercel, Netlify, Render" },
  { label: "Tools", val: "Git, GitHub, VS Code, Postman, Figma" }
];
skillGroups.forEach(sg => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(sg.label + ": ", 15, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text(sg.val, 50, y);
  y += 4.5;
});
y += 3;

// Education
addSectionTitle("Education");
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(15, 23, 42);
doc.text("Charotar University of Science and Technology (CHARUSAT)", 15, y);
doc.setFont("helvetica", "bold");
doc.setTextColor(2, 132, 199);
doc.text("CGPA: 9.0 / 10", 160, y);
y += 4.5;

doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(71, 85, 105);
doc.text("B.Tech in Information Technology  |  Changa, India  |  Sep 2022 – Apr 2026", 15, y);

const outputDir = path.join(__dirname, "../public");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, "Dhairya_Shah_Resume.pdf");
const pdfOutput = doc.output("arraybuffer");
fs.writeFileSync(outputPath, Buffer.from(pdfOutput));
console.log("Resume PDF generated successfully at:", outputPath);
