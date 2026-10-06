/**
 * Portfolio content — extracted from "Happy_Resume (1).pdf" (the single source of truth).
 *
 * Owner corrections (2026-10-06), which override the PDF where they differ:
 *  - Blissmi, EMW4Life and Shofar were all built at Brainer Hub; they are the full project list.
 *  - Communities Heritage Limited was an internship, with no projects attached.
 *  - Email only (no phone); GitHub and LinkedIn supplied by the owner; URLSession dropped.
 *  - Claude added to the AI tools by the owner (2026-10-06); not on the PDF.
 *
 * Rules: nothing here is invented. Every company, date, bullet and technology is
 * taken from the resume; wording is lightly normalised (typos fixed, duplicated
 * phrases removed) but no claim is added or strengthened. Anything the resume
 * doesn't state — links, location, metrics, project URLs — is deliberately absent.
 */

export interface Personal {
  name: string;
  role: string;
  /** The resume's own headline line. */
  headline: string;
  /** Years of experience as stated on the resume. */
  experience: string;
  summary: string;
  photo: { src: string; alt: string };
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  kind: string;
  stack: string[];
  highlights: string[];
  /** Themes used to cross-link the Security / Payments / Performance sections. */
  themes: Array<"security" | "payments" | "performance" | "apis" | "frontend">;
}

export interface Role {
  id: string;
  company: string;
  title: string;
  start: string;
  end: string;
  current: boolean;
  /** "Internship" for an internship; omitted for a full-time role. */
  type?: "Internship";
  /** Work done in the role. */
  highlights: string[];
  /** Products delivered in the role. */
  projects: Project[];
  themes: Project["themes"];
}

export interface Education {
  id: string;
  qualification: string;
  /** Compact form for tight spaces such as the credibility strip. */
  shortQualification: string;
  institution: string;
  start: string;
  end: string;
}

export const personal: Personal = {
  name: "Happy Prajapati",
  role: "Full Stack MERN Developer",
  headline: "MERN Stack | Next.js",
  experience: "1.5 years",
  summary:
    "Full Stack MERN Developer with 1.5 years of hands-on experience building scalable, secure, and production-ready web applications. Strong expertise in React.js, Next.js, Node.js, Express.js, and MongoDB. Experienced in designing RESTful APIs, implementing secure authentication systems including JWT and Two-Factor Authentication (2FA), and integrating payment gateways like Stripe. Proven ability to develop complete end-to-end solutions from frontend architecture to backend APIs and database management.",
  photo: { src: "/profile.jpeg", alt: "Portrait of Happy Prajapati" },
};

export const contact: Contact = {
  email: "happyprajapati2010@gmail.com",
  github: "https://github.com/happyprajapati",
  linkedin: "https://linkedin.com/in/happyprajapati/",
};

export const skills: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "Redux", "Context API", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "API Architecture"],
  },
  {
    id: "realtime",
    label: "Networking & Realtime",
    items: ["REST", "WebSockets", "Ably Realtime", "async/await", "Stripe"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "MariaDB"],
  },
  {
    id: "security",
    label: "Authentication & Security",
    items: ["JWT Authentication", "Role-Based Access Control", "Two-Factor Authentication (2FA)"],
  },
  {
    id: "payments",
    label: "Payment Integration",
    items: ["Stripe", "Razorpay"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "GitLab", "Postman", "Vercel", "Linux basics"],
  },
  {
    id: "ai",
    label: "AI & Automation Tools",
    items: ["Cursor", "Antigravity", "VS Code (with Codex)", "Claude"],
  },
];

export const experience: Role[] = [
  {
    id: "brainer-hub",
    company: "Brainer Hub Solution LLP",
    title: "Junior MERN Stack Developer",
    start: "April 2025",
    end: "Present",
    current: true,
    themes: ["apis", "security", "payments", "performance", "frontend"],
    highlights: [
      "Developed and maintained scalable, high-performance web applications using React.js, Next.js, Node.js, MySQL and MongoDB, ensuring reliability and responsiveness in production environments.",
      "Architected and implemented robust RESTful APIs for production-grade applications, enabling seamless communication between frontend and backend systems.",
      "Designed and deployed secure authentication and authorization using JWT (JSON Web Tokens) and Role-Based Access Control (RBAC) to enforce fine-grained access permissions.",
      "Implemented Two-Factor Authentication to strengthen account security and protect against unauthorized access.",
      "Engineered a dynamic cart and checkout system supporting both service-based and product-based transactions, ensuring a smooth and scalable purchasing workflow.",
      "Integrated the Stripe payment gateway to facilitate secure, compliant, and reliable online payment processing.",
      "Developed modular, high-performance frontend components, optimized app state with Redux, and collaborated with backend/DevOps to ensure smooth deployments and stable production.",
      "Conducted research and development on AI agent-based systems using Node.js and Next.js, exploring scalability.",
    ],
    projects: [
      {
        id: "blissmi",
        name: "Blissmi",
        kind: "Service & Product Platform",
        stack: ["Next.js", "Node.js", "Express.js", "MariaDB"],
        themes: ["security", "payments", "performance", "apis", "frontend"],
        highlights: [
          "Designed and developed a secure authentication system using JWT, along with Two-Factor Authentication (2FA) to enhance account security and prevent unauthorized access.",
          "Architected and implemented a comprehensive booking and checkout workflow supporting both service-based and product-based transactions.",
          "Engineered dynamic pricing mechanisms, including premium pricing models and quantity-based pricing logic, enabling flexible and scalable business rules.",
          "Built a robust, scalable cart management system handling multiple item types, with optimized state management for consistent, high-performance interactions.",
          "Developed reusable, modular UI components — including modal systems and protected login flows — to improve maintainability and reuse.",
          "Integrated backend APIs with comprehensive input validation, structured error handling and response management.",
          "Enhanced frontend performance through lazy loading and dynamic imports, reducing initial load time and improving responsiveness.",
          "Collaborated on backend API enhancements and database schema modifications to support evolving business requirements.",
        ],
      },
      {
        id: "emw4life",
        name: "EMW4Life",
        kind: "Full Stack Web Application",
        stack: ["Next.js", "Node.js", "Express.js", "MongoDB"],
        themes: ["payments", "apis"],
        highlights: [
          "Designed and implemented scalable RESTful APIs using Node.js and Express.js, supporting core platform functionality.",
          "Architected and delivered production-grade APIs for user management, payment processing, and essential business workflows.",
          "Integrated the Stripe payment gateway on the backend, implementing secure and compliant payment flows aligned with industry best practices.",
          "Developed and managed Stripe webhooks to handle real-time payment confirmations, transaction status updates, and event-driven processing.",
          "Collaborated with frontend developers to integrate backend APIs into React.js applications, with proper data validation and structured error handling.",
          "Designed scalable API architecture focused on clean code, modular structure and secure data handling; contributed to deployment-ready builds and resolved production-level issues.",
        ],
      },
      {
        id: "shofar",
        name: "Shofar",
        kind: "Frontend Web Application",
        stack: ["Next.js"],
        themes: ["frontend", "performance"],
        highlights: [
          "Designed and developed responsive, user-centric frontend interfaces using Next.js, focusing on performance, scalability and user experience.",
          "Implemented dynamic page rendering by integrating RESTful APIs, ensuring real-time data synchronization and efficient content management.",
          "Developed reusable, modular UI components to keep the interface consistent and accelerate feature development.",
          "Optimized application performance through efficient state management and component-level optimizations; contributed to feature enhancements and bug fixing.",
        ],
      },
    ],
  },
  {
    id: "communities-heritage",
    company: "Communities Heritage Limited",
    title: "Backend Developer",
    type: "Internship",
    start: "January 2025",
    end: "April 2025",
    current: false,
    themes: ["apis"],
    highlights: [],
    projects: [],
  },
];

export const education: Education[] = [
  {
    id: "be",
    qualification: "Bachelor of Engineering (B.E.) in Computer Engineering",
    shortQualification: "B.E. Computer Engineering",
    institution: "Government Engineering College, Gandhinagar",
    start: "2022",
    end: "2025",
  },
  {
    id: "diploma",
    qualification: "Diploma in Computer Engineering",
    shortQualification: "Diploma, Computer Engineering",
    institution: "Government Polytechnic, Ahmedabad",
    start: "2019",
    end: "2022",
  },
];

/** Hero statement. The positioning line is the owner's own; the intro restates resume facts only. */
export const hero = {
  headline: "From interface to infrastructure.",
  intro:
    "I’m Happy, a full stack MERN developer with 1.5 years of building production web applications: React and Next.js interfaces, Node.js APIs, secure authentication and Stripe payments, through to the database.",
  primaryCta: { label: "See my work", href: "#work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
} as const;

export interface TraceStep {
  step: string;
  /** Technologies from the skills list / experience bullets that back this layer. */
  evidence: string[];
}

/** The hero's request trace: one request, in the order it meets each layer. */
export const systemTrace: TraceStep[] = [
  { step: "Interface", evidence: ["React.js", "Next.js", "Redux"] },
  { step: "API", evidence: ["REST APIs", "WebSockets"] },
  { step: "Backend", evidence: ["Node.js", "Express.js"] },
  { step: "Authentication", evidence: ["JWT", "RBAC", "2FA"] },
  { step: "Payments", evidence: ["Stripe", "Razorpay"] },
  { step: "Database", evidence: ["MongoDB", "MySQL", "PostgreSQL", "MariaDB"] },
  { step: "Production", evidence: ["Vercel", "Git"] },
];

/** The flows the unique sections visualise — each step is backed by a resume line above. */
export const systemFlow = systemTrace.map((s) => s.step);

// ─── Evidence lookup ─────────────────────────────────────────────────────
// Deep-dive sections quote resume lines instead of restating them. A quote is
// found by its opening words; if a line is edited so it no longer matches,
// the build fails rather than silently showing stale or invented text.

export interface Evidence {
  /** Where the line comes from: a project name, or the employer for role-level work. */
  source: string;
  /** Anchor of the source on the page. */
  href: string;
  text: string;
  /** Step ids this line supports; drives the hover highlight. */
  steps: string[];
}

function quote(sourceId: string, startsWith: string, steps: string[]): Evidence {
  for (const role of experience) {
    if (role.id === sourceId) {
      const text = role.highlights.find((line) => line.startsWith(startsWith));
      if (text) return { source: role.company, href: "#experience", text, steps };
    }
    for (const project of role.projects) {
      if (project.id !== sourceId) continue;
      const text = project.highlights.find((line) => line.startsWith(startsWith));
      if (text) return { source: project.name, href: `#project-${project.id}`, text, steps };
    }
  }
  throw new Error(`portfolio.ts: no resume line in "${sourceId}" starts with "${startsWith}"`);
}

// ─── About ───────────────────────────────────────────────────────────────

export const about = {
  summary: personal.summary,
  exploring: quote("brainer-hub", "Conducted research and development on AI agent-based systems", []).text,
  aiTools: skills.find((group) => group.id === "ai")?.items ?? [],
};

// ─── Capabilities ────────────────────────────────────────────────────────

export interface Capability {
  id: string;
  title: string;
  /** Plain restatement of resume lines; no new claims. */
  summary: string;
  href: string;
  linkLabel: string;
}

export const capabilities: Capability[] = [
  {
    id: "interfaces",
    title: "Interfaces",
    summary: "Responsive, reusable React and Next.js interfaces, with application state managed in Redux.",
    href: "#project-shofar",
    linkLabel: "See Shofar",
  },
  {
    id: "apis",
    title: "APIs",
    summary: "RESTful APIs in Node.js and Express.js, with input validation, structured error handling and a modular architecture.",
    href: "#project-emw4life",
    linkLabel: "See EMW4Life",
  },
  {
    id: "security",
    title: "Security",
    summary: "Authentication and authorization with JWT, role-based access control and two-factor authentication.",
    href: "#systems",
    linkLabel: "How it fits together",
  },
  {
    id: "payments",
    title: "Payments",
    summary: "Cart and checkout for services and products, Stripe on the backend, and webhooks for payment confirmation.",
    href: "#payments",
    linkLabel: "Follow a payment",
  },
  {
    id: "performance",
    title: "Performance",
    summary: "Lazy loading, dynamic imports and component-level optimization to cut initial load time.",
    href: "#performance",
    linkLabel: "See the techniques",
  },
];

// ─── Deep dives: Security, Payments, Performance ─────────────────────────

export interface FlowStep {
  id: string;
  label: string;
  detail: string;
}

export interface DeepDive {
  id: string;
  title: string;
  intro: string;
  /** True only for a real order of events; it turns on step numbering. */
  sequence: boolean;
  steps: FlowStep[];
  evidence: Evidence[];
}

export const security: DeepDive = {
  id: "systems",
  title: "Security",
  intro: "Three layers between a visitor and their data: a signed token, a permission check for their role, and a second factor at sign-in.",
  sequence: false,
  steps: [
    { id: "jwt", label: "JWT", detail: "Signed tokens authenticate each session." },
    { id: "rbac", label: "RBAC", detail: "Roles set fine-grained permissions for what each user can do." },
    { id: "2fa", label: "2FA", detail: "A second factor at sign-in blocks unauthorized access." },
  ],
  evidence: [
    quote("brainer-hub", "Designed and deployed secure authentication and authorization", ["jwt", "rbac"]),
    quote("brainer-hub", "Implemented Two-Factor Authentication", ["2fa"]),
    quote("blissmi", "Designed and developed a secure authentication system", ["jwt", "2fa"]),
    quote("blissmi", "Developed reusable, modular UI components", ["jwt"]),
  ],
};

export const payments: DeepDive & { gateways: string[] } = {
  id: "payments",
  title: "Payments",
  intro: "From cart to confirmed payment: the checkout collects the order, Stripe takes the payment, and a webhook records the result.",
  sequence: true,
  steps: [
    { id: "checkout", label: "Checkout", detail: "One cart and checkout for both services and products." },
    { id: "stripe", label: "Stripe", detail: "Payment is processed by Stripe, integrated on the backend." },
    { id: "webhook", label: "Webhook", detail: "Stripe calls back with the confirmation and status updates." },
    { id: "database", label: "Database", detail: "The transaction’s status is stored against the order." },
  ],
  evidence: [
    quote("brainer-hub", "Engineered a dynamic cart and checkout system", ["checkout"]),
    quote("blissmi", "Architected and implemented a comprehensive booking and checkout workflow", ["checkout"]),
    quote("blissmi", "Engineered dynamic pricing mechanisms", ["checkout"]),
    quote("brainer-hub", "Integrated the Stripe payment gateway", ["stripe"]),
    quote("emw4life", "Integrated the Stripe payment gateway on the backend", ["stripe"]),
    quote("emw4life", "Developed and managed Stripe webhooks", ["webhook", "database"]),
    quote("emw4life", "Architected and delivered production-grade APIs", ["database"]),
  ],
  gateways: skills.find((group) => group.id === "payments")?.items ?? [],
};

export const performance: DeepDive = {
  id: "performance",
  title: "Performance",
  intro: "Techniques I use to keep pages quick to load and quick to respond.",
  sequence: false,
  steps: [
    { id: "lazy", label: "Lazy loading", detail: "Load what’s off-screen only when it’s needed." },
    { id: "dynamic", label: "Dynamic imports", detail: "Split rarely used code out of the first download." },
    { id: "state", label: "Efficient state management", detail: "Keep shared state predictable so screens re-render less." },
    { id: "component", label: "Component-level optimizations", detail: "Tune the components that render most often." },
  ],
  evidence: [
    quote("blissmi", "Enhanced frontend performance through lazy loading", ["lazy", "dynamic"]),
    quote("blissmi", "Built a robust, scalable cart management system", ["state"]),
    quote("shofar", "Optimized application performance", ["state", "component"]),
    quote("brainer-hub", "Developed modular, high-performance frontend components", ["state", "component"]),
  ],
};

/** Explicitly absent from the resume — kept here so nobody "fills them in" later. */
export const notOnResume = [
  "Personal website URL",
  "Live links or screenshots for Blissmi, EMW4Life, Shofar",
  "Phone number on the site (owner chose email only)",
  "Details of the Communities Heritage internship beyond title and dates",
  "Location",
  "Metrics (users, revenue, load times, percentages)",
  "Certifications",
] as const;
