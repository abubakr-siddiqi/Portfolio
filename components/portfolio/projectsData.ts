export type ProjectTechStackItem = {
  label: string;
  value: string;
};

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type ProjectPlatformModule = {
  title: string;
  items: readonly string[];
};

export type ProjectDetail = {
  slug: string;
  title: string;
  /** Short copy for homepage card */
  cardDescription: string;
  cardImage: string;
  cardTags: readonly string[];
  /** Hero subtitle */
  tagline: string;
  liveUrl?: string;
  client: string;
  industry: string;
  timeline: string;
  /** Shown in metadata card */
  technologiesSummary: string;
  heroImage: string;
  overview: readonly string[];
  role: readonly string[];
  techStack: readonly ProjectTechStackItem[];
  keyFeatures: readonly string[];
  platformModules?: readonly ProjectPlatformModule[];
  /** Overrides default "Platform modules" heading when set */
  modulesSectionTitle?: string;
  userRoles?: readonly ProjectPlatformModule[];
  targetAudience?: readonly string[];
  codeStructure: readonly string[];
  performanceOptimizations?: readonly string[];
  architecturePoints: readonly string[];
  challenges: readonly ProjectChallenge[];
  results?: readonly string[];
  seoDescription?: string;
};

export const PROJECTS: readonly ProjectDetail[] = [
  {
    slug: "energy-recruitment-hub",
    title: "Energy Recruitment Hub",
    cardDescription:
      "Full stack job portal and headless CMS for the energy sector with AI CV scoring, Stripe billing, and multi role dashboards.",
    cardImage: "/projects/project-1.webp",
    cardTags: ["Next.js", "Strapi", "PostgreSQL", "Stripe"],
    tagline:
      "Energy Recruitment Hub (ERH) is a full stack, multi role job portal and headless CMS built for the energy and recruitment sector. It connects job seekers, recruiters, and internal staff in one marketplace with AI powered CV scoring, career intelligence, Stripe subscriptions, and role based dashboards.",
    liveUrl: "https://www.energyrecruitmenthub.com/",
    client: "Energy recruitment platform",
    industry: "Recruitment / Energy",
    timeline: "Production release",
    technologiesSummary:
      "Next.js 16, Strapi 5, PostgreSQL, Stripe, OpenAI, AWS S3",
    heroImage: "/projects/project-1.webp",
    overview: [
      "Energy Recruitment Hub is a production grade recruitment platform connecting three sides of a hiring marketplace: job seekers who browse jobs, apply, and use AI CV scoring and career intelligence; recruiters and employers who post jobs, manage companies, unlock applicants, and pay via Stripe subscriptions; and internal staff (Admin and VA) who moderate content, manage users, and run training workflows.",
      "The project is a monorepo with a Strapi 5 TypeScript backend (headless CMS, REST API, business logic) and a Next.js 16 frontend (public marketing site plus four role based dashboards). Production runs at energyrecruitmenthub.com with the frontend on Vercel and Strapi hosted separately.",
      "The platform includes 99 frontend pages and 23 backend API modules, with monetization through four Stripe subscription tiers (Access, Recruit, Hire, Partner), usage limits, publish gates, and webhook driven entitlement sync.",
    ],
    role: [
      "Full stack development across Strapi 5 backend and Next.js 16 frontend",
      "Backend: custom auth, two layer RBAC, Stripe billing with webhooks, OpenAI integrations, S3 CV uploads, PostgreSQL",
      "Frontend: App Router architecture, Redux state, Tailwind v4 and shadcn/ui, SEO and Core Web Vitals optimization",
      "Custom Strapi content types, controllers, services, and permission bootstrap",
      "Recruiter subscription billing, job lifecycle approval workflow, and applicant unlock flows",
      "AI CV checker, career intelligence, interview prep, and AI assisted job drafts",
      "BFF auth routes with HttpOnly JWT cookies and three layer route gating",
      "Sentry observability and documentation driven feature workflow",
    ],
    techStack: [
      {
        label: "Frontend",
        value:
          "Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, Redux Toolkit, TipTap 3, Framer Motion",
      },
      {
        label: "Forms & HTTP",
        value:
          "React Hook Form, Axios (JWT cookie + localStorage fallback), lucide-react",
      },
      {
        label: "Backend",
        value:
          "Strapi 5 (TypeScript), @strapi/plugin-users-permissions, PostgreSQL",
      },
      {
        label: "Payments & AI",
        value:
          "Stripe 17 (Checkout, Portal, webhooks), OpenAI 4 (CV scoring, job drafts, career intelligence)",
      },
      {
        label: "Storage & Parsing",
        value:
          "AWS S3 (CV uploads), pdf-parse, mammoth (DOCX), xlsx (bulk import), fuse.js",
      },
      {
        label: "Observability",
        value: "Sentry (@sentry/node, @strapi/plugin-sentry), nodemailer",
      },
      {
        label: "SEO",
        value: "next-sitemap, JSON-LD, canonical domains, PWA manifest",
      },
    ],
    keyFeatures: [
      "Public job board with search, filters, split pane layout, and direct to recruiter applications",
      "AI CV checker with deterministic rule based matching and LLM relevance gate",
      "AI interview prep with per job cached questions and career context prep",
      "Career Intelligence: role matching, skills gap analysis, salary insights, career journey dashboard",
      "Recruiter Stripe subscriptions with 4 plans, usage limits, publish gates, and Customer Portal",
      "Job lifecycle workflow: draft, pending, active with admin approve/reject and billing gates",
      "AI assisted job drafts and Excel bulk job import",
      "Multi role dashboards: Admin, Recruiter, VA, and Job seeker with scoped pages",
      "Auth: email/password, Google OAuth, OTP, email verification, persona switching",
      "Companies, Projects, and Training modules with ownership rules",
      "SEO and PWA: structured data, sitemap, robots, web manifest, llms.txt",
    ],
    platformModules: [
      {
        title: "Public",
        items: [
          "/, /jobs, /projects, /companies, /career-intelligence",
          "/cv-checker, /blog, /training, /pricing, /about, /contact",
        ],
      },
      {
        title: "Auth",
        items: [
          "/auth/login, register, verify-email",
          "Forgot/reset password, OAuth callback",
        ],
      },
      {
        title: "Job Seeker",
        items: [
          "/job-seeker/dashboard, applied-jobs, saved-jobs",
          "Projects, training, profile, membership",
        ],
      },
      {
        title: "Recruiter",
        items: [
          "/recruiter/dashboard, jobs, companies, applications",
          "Membership, profile, job create and status flows",
        ],
      },
      {
        title: "VA (Virtual Assistant)",
        items: [
          "/va/jobs, all-jobs, companies, projects",
          "Applicants, training, dashboard",
        ],
      },
      {
        title: "Admin",
        items: [
          "/admin/dashboard, users, jobs, companies, projects",
          "Applicants, CVs, training, settings (permissions, email templates)",
        ],
      },
      {
        title: "Backend API (23 modules)",
        items: [
          "auth, job, job-application, company, project, recruiter",
          "stripe, membership, career-intelligence, training-course",
          "analytics, upload, bulk-import, preview-score, and more",
        ],
      },
    ],
    userRoles: [
      {
        title: "Job Seeker",
        items: [
          "Browse jobs, apply, CV feedback, and career guidance",
          "Persona: job-seeker with security role authenticated",
        ],
      },
      {
        title: "Recruiter / Employer",
        items: [
          "Post jobs, unlock applicants, Stripe subscription customer",
          "Can switch persona to job seeker without re registration",
        ],
      },
      {
        title: "VA (Virtual Assistant)",
        items: [
          "Create and moderate jobs, companies, projects, and training",
          "Staff workflow on behalf of recruiters",
        ],
      },
      {
        title: "Admin",
        items: [
          "Full platform control: users, approvals, settings, permissions",
          "Two layer RBAC: security role (role.type) + UX persona (user_type)",
        ],
      },
    ],
    targetAudience: [
      "Energy sector job seekers seeking roles, CV feedback, and career guidance",
      "Recruiters and employers posting jobs and unlocking applicants via paid plans",
      "Virtual assistants moderating jobs, companies, and training content",
      "Platform admins managing users, approvals, and system settings",
    ],
    codeStructure: [
      "job_portal_cms/  (monorepo)",
      "├── backend/                    # Strapi 5 (TypeScript)",
      "│   ├── src/api/                # 23 API route groups",
      "│   ├── src/services/           # recruiter-billing, ai-cv-matcher, stripe/*",
      "│   ├── src/middlewares/",
      "│   └── src/index.ts            # Bootstrap: roles, permissions, patches",
      "└── frontend/                   # Next.js 16 App Router",
      "    ├── app/                    # 99 pages, role prefixed segments",
      "    ├── app/api/auth/           # BFF layer (HttpOnly strapi_jwt cookies)",
      "    └── store/                  # Redux Toolkit slices",
      "",
      "Request flow:",
      "Browser → Next.js → BFF /api/auth → Strapi REST /api → PostgreSQL",
      "                              ├→ AWS S3 (CVs)",
      "                              ├→ Stripe (billing)",
      "                              └→ OpenAI (AI features)",
    ],
    performanceOptimizations: [
      "LCP fixes: optimized next/image with responsive sizes on hero and banner assets",
      "Home page below the fold sections moved to next/dynamic lazy loading",
      "Google Analytics deferred via next/script strategy afterInteractive",
      "System font stack (font-sans), no render blocking next/font",
      "Core Web Vitals targets: Performance > 80, LCP < 2.5s, CLS < 0.1, INP < 200ms",
      "AI hot path uses deterministic CV scoring; OpenAI gated behind relevance check",
      "Interview prep questions cached per job and reused for later applicants",
      "NODE_OPTIONS max old space size cap in production start",
      "Usage counters synced from DB after publish to avoid drift",
      "Mobile responsiveness audit: tablet nav, body scroll lock, touch targets",
    ],
    architecturePoints: [
      "Thin controllers, fat services: domain logic in backend/src/services/",
      "One way dependency chains: resume-detection → cv-relevance-gate → ai-cv-matcher",
      "Two layer RBAC: canPerform(securityRole, persona, action) requires both layers",
      "Ownership stamping: created_by_user_id immutable from request body on update",
      "Strapi 5 draft/publish dedupe helpers (dedupeJobsByDocumentId) on list endpoints",
      "Redux Toolkit slices: auth, jobs, companies, recruiter, jobSeeker, admin, projects",
      "Three layer auth: Next.js middleware → Strapi permissions → BFF cookie handling",
      "Documentation driven development with feature docs in docs/features/*",
    ],
    challenges: [
      {
        challenge:
          "Strapi 5 documentId duplication from draft/publish creating multiple rows.",
        solution:
          "Shared dedupe helpers (dedupeJobsByDocumentId, dedupeRecruiterJobsByIdentity) on all list endpoints.",
      },
      {
        challenge: "Two authorization needs: hard role ceiling vs UX persona.",
        solution:
          "Two layer RBAC with role.type for security and user_type persona; canPerform() requires both.",
      },
      {
        challenge:
          "Recruiter and job seeker switching without re registration.",
        solution:
          "Persona switch updates user_profiles.user_type only, keeping Strapi security role intact.",
      },
      {
        challenge:
          "Stripe billing complexity with limits, usage, and publish gates.",
        solution:
          "Strapi owns limits and gates; Stripe owns subscriptions; webhook sync with idempotency table.",
      },
      {
        challenge: "Irrelevant or non resume uploads skewing AI scores.",
        solution:
          "detectResumeLikeDocument and evaluateCvRelevanceGate run before deterministic scoring.",
      },
      {
        challenge: "Circular service imports across CV and Stripe modules.",
        solution:
          "Refactored into one way dependency chains without behavior change.",
      },
      {
        challenge: "Core Web Vitals on image heavy marketing pages.",
        solution:
          "Image optimization, dynamic imports, and deferred third party scripts.",
      },
      {
        challenge: "SQLite to PostgreSQL migration.",
        solution:
          "Postgres only config, Docker compose, import script, and removal of SQLite artifacts.",
      },
    ],
    results: [
      "Production grade platform with 99 frontend pages and 23 backend API modules at energyrecruitmenthub.com.",
      "Monetization ready with 4 Stripe subscription tiers, usage limits, publish gates, and Customer Portal.",
      "AI differentiation: CV scoring, career intelligence, job drafts, and cached interview prep with cost controlled LLM usage.",
      "Secure role aware system with three layer auth, frozen permission matrix, and ownership enforcement.",
      "SEO and performance optimized: Core Web Vitals targets met, structured data, canonical domains, PWA manifest.",
      "Maintainable and observable with Sentry, documentation sync workflow, and audit reports.",
    ],
    seoDescription:
      "Energy Recruitment Hub case study: full stack energy job portal with Strapi CMS, AI CV scoring, Stripe billing, and multi role dashboards.",
  },
  {
    slug: "brand-appeal-boardroom",
    title: "Brand Appeal Boardroom",
    cardDescription:
      "Subscription SaaS for aesthetic professionals, Canva templates, social calendar, Stripe billing, and admin content workflow.",
    cardImage: "/projects/project-2.webp",
    cardTags: ["Next.js", "Stripe", "Canva", "MongoDB"],
    tagline:
      "Brand Appeal (The Brand Appeal Boardroom™) is a subscription SaaS platform for aesthetic professionals, med spas, injectors, skincare providers, and similar businesses. It delivers done for you social media content via Canva templates, content planning tools, and monthly Boardroom membership perks positioned as strategic content for aesthetic brands.",
    liveUrl: "https://brandappeal.io/",
    client: "Aesthetic & beauty industry",
    industry: "Membership / Content SaaS",
    timeline: "Production release",
    technologiesSummary:
      "Next.js 15, React 19, Stripe, Canva API, MongoDB, Vercel",
    heroImage: "/projects/project-2.webp",
    overview: [
      "Brand Appeal Boardroom is a subscription SaaS platform built for med spas, injectors, skincare providers, and beauty clinics who need consistent, on brand social content without building everything in house. Members get Canva templates (Posts, Carousels, Reels, Stories), a social calendar, trending library, and Boardroom features including Content Vault, Social Calendar, Trend Report, Beauty Briefcase, Executive Suite, and Reception Desk.",
      "The platform positions itself as strategic content membership for aesthetic brands, strategy, captions, content plans, and trend tools delivered monthly at $49/month for unlimited access on the landing page.",
      "Core user journey: register and verify email → subscribe via Stripe → request and receive Canva team access (admin approval) → connect personal Canva account (OAuth PKCE) → browse, bookmark, and edit published templates → track usage in a social calendar. Production: user portal at user.brandappeal.io with API at brand-backend-rust.vercel.app/api.",
    ],
    role: [
      "Full stack development, Express REST API, MongoDB models, Next.js frontends",
      "Stripe integration, checkout, webhooks, billing portal, subscription lifecycle",
      "Canva integration, OAuth PKCE, admin template import, team access workflow",
      "User portal, template browsing, bookmarks, social calendar, profile, billing",
      "Admin portal, user management, template publish, Canva access queue, plans, FAQs",
      "Authentication and security, JWT, route guards, middleware, rate limiting",
      "Resend transactional email and Cloudinary media uploads",
      "Deployment on Vercel (Next.js frontends + serverless Express backend)",
    ],
    techStack: [
      {
        label: "Frontend",
        value:
          "Next.js 15 (App Router), React 19, Tailwind CSS 4, Lucide React, Axios",
      },
      {
        label: "UI Features",
        value:
          "FullCalendar (social calendar), Stripe.js, react-toastify, react-paginate",
      },
      { label: "Backend", value: "Node.js, Express, MongoDB, Mongoose" },
      { label: "Authentication", value: "JWT, bcrypt, localStorage tokens" },
      {
        label: "Payments",
        value:
          "Stripe Checkout, billing portal, webhooks (checkout.session.completed, subscription updated/deleted)",
      },
      {
        label: "Integrations",
        value:
          "Canva API (OAuth PKCE, template import/edit), Resend, Cloudinary",
      },
      {
        label: "Security",
        value:
          "Helmet, CORS, rate limiting, mongo-sanitize, xss-clean, hpp, compression, Winston logging",
      },
      { label: "Deployment", value: "Vercel (@vercel/node for Express API)" },
    ],
    keyFeatures: [
      "Register, login, email verification, and JWT based session handling",
      "Post checkout onboarding flow (/onboarding?session_id=...)",
      "Frontend route guards on /user/* and /admin/* paths",
      "Stripe plan CRUD, Checkout sessions, billing portal, cancel, and billing history",
      "Stripe webhooks for checkout completion and subscription updates",
      "Admin Canva template import with publish workflow and trending algorithm",
      "Template browse with search, filters, pagination, free tier (10) vs paid (unlimited)",
      "Canva team access request queue with admin approve/reject flow",
      "User Canva OAuth (PKCE) for in app template editing",
      "User dashboard: trending templates, Content Vault bookmarks, social calendar",
      "Admin dashboard: user stats, user management, template management, plans, FAQ CRUD",
      "Trending score from edit, bookmark, and view counts with recency weighting",
      "Multi layer gating: subscription → team access → Canva OAuth connection",
    ],
    modulesSectionTitle: "Boardroom modules",
    platformModules: [
      {
        title: "Content Vault",
        items: [
          "Bookmarked Canva templates (/user/bookmark)",
          "Admin Content Vault management (/admin/template/updated)",
          "Posts, Carousels, Reels, and Stories content types",
        ],
      },
      {
        title: "Social Calendar",
        items: [
          "FullCalendar based posting schedule (/user/calendar)",
          "Track template usage and content planning",
          "Paginated calendar history",
        ],
      },
      {
        title: "Trend Report",
        items: [
          "Trending template library (/user/template)",
          "Algorithm driven trending score on save",
          "Search with debounced filters and pagination",
        ],
      },
      {
        title: "Beauty Briefcase",
        items: [
          "Branding and marketing resource content",
          "Educational materials for aesthetic professionals",
        ],
      },
      {
        title: "Executive Suite",
        items: [
          "Premium content and strategy services",
          "Agency level consultation positioning",
        ],
      },
      {
        title: "Reception Desk",
        items: [
          "Member support and platform guidance",
          "FAQ system with admin CRUD (/admin/faq)",
        ],
      },
    ],
    userRoles: [
      {
        title: "User (Member)",
        items: [
          "Default role after registration",
          "User dashboard at /user after Canva team approval",
          "Templates, bookmarks, calendar, profile, billing settings",
          "Gated by isVerified, canvaTeamAccess, canvaConnected, and subscription",
        ],
      },
      {
        title: "Admin",
        items: [
          "Admin dashboard at /admin",
          "User management, template import and publish",
          "Canva access approvals, plan management, FAQ CRUD",
          "Platform settings and user stats",
        ],
      },
    ],
    targetAudience: [
      "Med spas, injectors, and skincare providers",
      "Beauty clinics needing consistent on brand social content",
      "Aesthetic professionals who want strategy and templates without an in house team",
    ],
    codeStructure: [
      "brand-appeal-co/",
      "├── brand-appeal-frontend/           # Marketing landing (redesign)",
      "├── brand-user-dashboard/            # User portal (user.brandappeal.io)",
      "├── brand-admin-dashboard/           # Admin portal",
      "├── brand-backend2.0/Brand_appeal/backend/",
      "│   ├── server.js                    # Express entry, middleware stack",
      "│   ├── routes/                      # auth, user, stripe, canva, templates",
      "│   ├── controllers/",
      "│   ├── models/                      # User, Template, Plan, Subscription",
      "│   ├── middleware/                  # Auth, Canva gates, validation",
      "│   └── services/CanvaService.js",
      "└── brand-appeal-2/                  # Bundled v2 snapshot (all apps)",
      "",
      "Frontend (Next.js App Router):",
      "src/",
      "├── app/                             # Thin route files",
      "├── components/pages/                # Page logic",
      "├── components/router/               # Route guards",
      "├── context/                         # Auth, Dashboard, Template, Bookmark",
      "└── service/api.js                   # Axios + JWT interceptor",
    ],
    performanceOptimizations: [
      "Gzip compression via compression() middleware",
      "Rate limiting, 100 requests per 15 minutes on /api",
      "MongoDB indexes on Subscription, CanvaAccessRequest, UserTempHistory, Plan",
      "Pagination helper on list endpoints with lean queries for admin imports",
      "Graceful shutdown handlers (SIGTERM, unhandledRejection)",
      "next/font with display: swap (Poppins, Outfit, Playfair)",
      "next/image for heroes, logos, and template thumbnails",
      "Debounced template search (~300ms)",
      "Paginated API fetching for template lists and calendar history",
      "Turbopack dev server (next dev --turbopack)",
    ],
    architecturePoints: [
      "Marketing site + member portal + admin portal + REST API on Vercel",
      "React Context providers only, no Redux (Auth, Dashboard, Template, Bookmark, Plan)",
      "Standardized ApiResponse / ApiError pattern across REST /api routes",
      "express-async-handler with global error and 404 handlers",
      "Legacy ContentItem model coexists with newer Template system for backward compatibility",
      "Bearer token auth (not cookies), CORS with credentials pattern",
    ],
    challenges: [
      {
        challenge: "Canva team management across admin and member workflows.",
        solution:
          "Built CanvaService with admin import flow, user team access request queue, and admin approve/reject pipeline.",
      },
      {
        challenge: "PKCE OAuth on serverless Vercel invocations.",
        solution:
          "Implemented PKCE flow with codeVerifier storage, noted serverless durability constraints for OAuth callback handling.",
      },
      {
        challenge:
          "Dual content systems (legacy ContentItem + new Template model).",
        solution:
          "Maintained backward compatibility on User bookmarks/downloads while migrating primary flows to the Template system.",
      },
      {
        challenge:
          "Multi layer Canva gating before users can view or edit templates.",
        solution:
          "Chained subscription check → team access approval → OAuth connection with middleware returning clear error messages.",
      },
      {
        challenge: "Subscription activation after Stripe Checkout.",
        solution:
          "Post checkout onboarding UI paired with Stripe webhooks (checkout.session.completed, subscription updated/deleted).",
      },
      {
        challenge: "Trending content discovery at scale.",
        solution:
          "Pre save trending algorithm weighting edit, bookmark, and view counts with recency decay on Template model.",
      },
    ],
    results: [
      "Full SaaS platform delivered, marketing site, member portal, admin portal, and REST API.",
      "Live production at user.brandappeal.io with API deployed on Vercel.",
      "Monetization via Stripe subscriptions ($49/month unlimited access positioning).",
      "Canva powered workflow from admin template import to member edit in Canva.",
      "Member experience: trending library, bookmarks, social calendar, profile, and billing.",
      "Production ready authentication, subscription gating, and admin content operations.",
    ],
    seoDescription:
      "Brand Appeal Boardroom case study, subscription SaaS for aesthetic professionals with Canva templates, Stripe billing, social calendar, and admin content workflow.",
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    cardDescription:
      "Multi role LMS for tutoring institutes with 8 dashboards, RBAC, scheduling, billing, and institute operations.",
    cardImage: "/projects/project-3.webp",
    cardTags: ["Next.js", "React", "TypeScript", "MongoDB"],
    tagline:
      "A multi role educational platform built for tutoring centers and learning institutes. Beyond traditional course delivery, it handles end to end institute management: students, teachers, class scheduling, family billing, room operations, learning materials, feedback, and role based permissions across eight user types.",
    liveUrl: "https://lms-olive-five.vercel.app/",
    client: "Tutoring & learning institutes",
    industry: "EdTech / LMS",
    timeline: "Production release",
    technologiesSummary:
      "Next.js 15, React 19, Vite, TypeScript, Tailwind CSS 4, MongoDB",
    heroImage: "/projects/project-3.webp",
    overview: [
      "Learning Management System (LMS) is a multi role educational platform designed for tutoring centers and learning institutes. It is not a traditional video only LMS. It manages the full institute workflow from enrollment and scheduling to attendance, billing, and feedback.",
      "The platform covers student and teacher management, class scheduling and attendance, family and guardian billing, room scheduling, learning materials, tasks, reports, and granular role based permissions across eight user types.",
      "Architecture follows a multi frontend, single REST API model: three frontend applications (Super Admin, Admin Panel, Teacher/Student/Guardian) connected to one Node.js, Express, and MongoDB backend.",
    ],
    role: [
      "Frontend Developer, designed and implemented 8 role based dashboards",
      "Super Admin Dashboard (Vite + React + TypeScript + Redux)",
      "Admin Panel, Finance, Academic, Operations, General (Next.js 15 App Router)",
      "Role Base Dashboard, Teacher, Student, Guardian (Next.js 15 App Router)",
      "Role prefixed routing and protected routes",
      "permission driven UI (sidebar, forms, actions show/hide)",
      "API integration with Axios and JWT",
      "Dashboards, CRUD screens, calendars, charts, and PDF export",
      "Context API and Redux state management",
      "Responsive UI with Tailwind CSS 4",
    ],
    techStack: [
      {
        label: "Frontend",
        value:
          "Next.js 15.3, Vite 6, React 19, JavaScript + TypeScript, Tailwind CSS 4",
      },
      {
        label: "State",
        value:
          "React Context API (Admin, Role Base), Redux Toolkit (Super Admin)",
      },
      {
        label: "HTTP & Auth",
        value: "Axios, JWT Bearer auth, jwt-decode, localStorage tokens",
      },
      {
        label: "UI Libraries",
        value:
          "Recharts, FullCalendar, Framer Motion, Lucide React, React Icons",
      },
      { label: "Export", value: "html2canvas + jsPDF" },
      {
        label: "Backend (integrated)",
        value: "Node.js, Express 4.x, MongoDB, Mongoose, JWT, bcrypt, AWS S3",
      },
      {
        label: "Security",
        value: "Helmet, CORS, rate limiting, sanitization",
      },
    ],
    keyFeatures: [
      "JWT based login across all dashboards",
      "Role based route guards and module level permissions",
      "Dynamic sidebar showing only allowed modules",
      "Student and teacher CRUD with performance tracking",
      "Class scheduling via FullCalendar (day/week/timegrid views)",
      "Attendance tracking and learning materials distribution",
      "Invoice creation, family billing, and payment tracking",
      "Financial reports with PDF export",
      "Room management, teacher availability, and task management",
      "Feedback system across teacher, student, and guardian flows",
      "Notifications and WhatsApp integration (backend)",
      "Super Admin oversight, admin CRUD, roles, permissions, system reports",
    ],
    platformModules: [
      {
        title: "Students",
        items: ["Enrollment", "Profiles", "Attendance"],
      },
      {
        title: "Teachers",
        items: ["Profiles", "Availability", "Performance"],
      },
      {
        title: "Classes",
        items: ["Scheduling", "Calendar", "Attendance"],
      },
      {
        title: "Families",
        items: ["Parent/guardian accounts", "Children linking"],
      },
      {
        title: "Invoices",
        items: ["Billing", "Payments"],
      },
      {
        title: "Rooms",
        items: ["Room scheduling", "Maintenance"],
      },
      {
        title: "Tasks",
        items: ["Internal task management"],
      },
      {
        title: "Reports",
        items: ["Financial", "Academic", "Operational"],
      },
      {
        title: "Materials",
        items: ["Learning content distribution"],
      },
      {
        title: "Feedback",
        items: ["Reviews and feedback flow"],
      },
    ],
    userRoles: [
      {
        title: "Super Admin",
        items: [
          "Vite + Redux dashboard",
          "Platform owner with full system control",
        ],
      },
      {
        title: "Finance Admin",
        items: ["/finance dashboard", "Billing, invoices, and payments"],
      },
      {
        title: "Academic Admin",
        items: [
          "/academic dashboard",
          "Students, teachers, classes, and attendance",
        ],
      },
      {
        title: "Operations Admin",
        items: ["/operations dashboard", "Rooms, scheduling, and maintenance"],
      },
      {
        title: "General Admin",
        items: [
          "/general dashboard",
          "Read heavy access with limited create permissions",
        ],
      },
      {
        title: "Teacher",
        items: [
          "/dashboard/teacher",
          "Classes, materials, students, and feedback",
        ],
      },
      {
        title: "Student",
        items: [
          "/dashboard/student",
          "Classes, booking, materials, and feedback",
        ],
      },
      {
        title: "Guardian / Parent",
        items: [
          "/dashboard/family",
          "Children schedule, attendance, and invoices",
        ],
      },
    ],
    targetAudience: [
      "Tutoring centers and coaching institutes",
      "Private learning academies",
      "Institutes where students, teachers, parents, and multiple admin departments work together",
    ],
    codeStructure: [
      "LMS/",
      "└── Admin-panel/lms-admin/",
      "    ├── lms-backend-3.0/",
      "    │   └── lms-2.0-backend/",
      "    │       ├── models/          (23 Mongoose models)",
      "    │       ├── routes/",
      "    │       ├── controllers/",
      "    │       ├── middlewares/",
      "    │       └── utils/",
      "    ├── admin-dashboard/lms-admins/   ← 4 Admin roles (Next.js)",
      "    │   └── src/app/",
      "    │       ├── academic/",
      "    │       ├── finance/",
      "    │       ├── operations/",
      "    │       └── general/",
      "    ├── super/lms-super-admin/        ← Super Admin (Vite + Redux)",
      "    └── LMS-role base/lms-role base/    ← Teacher / Student / Guardian",
      "        └── src/app/dashboard/",
      "",
      "Architecture:",
      "┌─────────────────┐  ┌─────────────────┐  ┌──────────────────────┐",
      "│ Super Admin     │  │ Admin Panel     │  │ Role Base (T/S/G)    │",
      "│ Vite + Redux    │  │ Next.js + Ctx   │  │ Next.js + Context    │",
      "└────────┬────────┘  └────────┬────────┘  └──────────┬───────────┘",
      "         └────────────────────┼───────────────────────┘",
      "                              │  Axios + JWT Bearer",
      "                    ┌─────────▼─────────┐",
      "                    │  Express REST API │",
      "                    └─────────┬─────────┘",
      "                              │",
      "                    ┌─────────▼─────────┐",
      "                    │  MongoDB          │",
      "                    └───────────────────┘",
    ],
    performanceOptimizations: [
      "Dashboard data cache with 5 minute TTL (DashboardContext.js)",
      "Axios request throttling with 1 second interval (AxiosConfig.js)",
      "Duplicate request cancellation (AxiosConfig.js)",
      "429 retry with exponential backoff (AxiosConfig.js)",
      "Debounced calendar API calls (FullCalendarComponent.jsx)",
      "useCallback and useMemo in contexts and list components",
      "Search debouncing on teacher and student lists",
      "Turbopack dev server on Role Base app (next dev --turbopack)",
      "Framer Motion viewport={{ once: true }} for scroll animations",
      "Redux normalized state in Super Admin slices",
      "Backend gzip, rate limiting, MongoDB indexes, and pagination",
    ],
    architecturePoints: [
      "Role prefixed routing, same components across four admin URL prefixes",
      "permission driven UI with hasPermission(module, action) for buttons and sidebar",
      "Nested Context Provider composition (Auth → Dashboard → Student → …)",
      "Feature based API modules, StudentsApi.js, TeacherApi.js, and related services",
      "Client-side route guards with JWT and role checks",
      "Redux feature slices for Super Admin domain wise CRUD flows",
      "23 MongoDB models on backend including User, Student, Family, Class, Invoice, and more",
    ],
    challenges: [
      {
        challenge:
          "Eight roles sharing the same modules with different permissions.",
        solution:
          "Role prefixed route trees, shared components, and hasPermission() checks.",
      },
      {
        challenge: "Four admin roles with duplicate page trees.",
        solution:
          "Single Next.js app with /academic, /finance, /operations, and /general prefixes for code reuse.",
      },
      {
        challenge: "Dynamic sidebar per role.",
        solution:
          "Fetch permissions from API and build nav items from moduleNavMap.",
      },
      {
        challenge: "API rate limiting and duplicate calls.",
        solution:
          "Axios throttling, pending request tracking, and 429 retry logic.",
      },
      {
        challenge: "Heavy calendar with many classes.",
        solution: "Debounced fetch on date range change.",
      },
      {
        challenge: "Multiple frontend apps connected to one API.",
        solution:
          "Consistent JWT auth and feature based API modules across all frontends.",
      },
      {
        challenge: "Super Admin vs Admin state complexity.",
        solution:
          "Redux for complex CRUD flows vs Context API for simpler admin and role base flows.",
      },
      {
        challenge: "Guardian vs Family naming mismatch across stack.",
        solution:
          "Mapped backend guardian and /parent API to frontend /dashboard/family routes.",
      },
    ],
    results: [
      "Delivered 8 complete role based dashboards from Super Admin to Student and Guardian.",
      "Built 3 frontend applications (Next.js × 2, Vite × 1) on one unified REST API.",
      "RBAC across 10 modules with granular actions and permission driven UI.",
      "Full institute workflow, enrollment, scheduling, attendance, billing, and feedback.",
      "Production ready patterns, JWT auth, route guards, API throttling, caching, and pagination.",
      "Modern stack, React 19, Next.js 15, Tailwind CSS 4, TypeScript (Super Admin).",
      "Rich UI, FullCalendar scheduling, Recharts analytics, PDF export, Framer Motion animations.",
    ],
    seoDescription:
      "Learning Management System case study, multi role LMS with 8 dashboards, RBAC, institute scheduling, billing, and operations for tutoring centers.",
  },
  {
    slug: "linkbiz",
    title: "LinkBiz",
    cardDescription:
      "WhatsApp lead capture SaaS with CRM, campaign tracking, Paystack billing, and AI powered business insights for SMBs.",
    cardImage: "/projects/project-4.webp",
    cardTags: ["React", "Node.js", "MongoDB", "Paystack"],
    tagline:
      "LinkBiz is a SaaS platform built to help businesses capture, organize, and manage customer enquiries generated through WhatsApp. Instead of customers directly opening a WhatsApp chat, LinkBiz first collects their name, contact number, enquiry, and lead source through a simple form before redirecting them to WhatsApp.",
    liveUrl: "https://www.linkbiz.co.za/",
    client: "Small and medium businesses",
    industry: "SaaS / CRM",
    timeline: "Production release",
    technologiesSummary:
      "React, Vite, Node.js, MongoDB, Paystack, WhatsApp deep linking, Vercel",
    heroImage: "/projects/project-4.webp",
    overview: [
      "LinkBiz transforms WhatsApp into a complete lead generation and customer management platform. Whenever a customer clicks a LinkBiz business link, they complete a lead form with contact information and enquiry details before WhatsApp opens. Every enquiry becomes a stored lead inside the business dashboard.",
      "Many businesses rely on WhatsApp for customer communication, but WhatsApp alone is not designed to manage leads effectively. Messages get buried, contacts are lost when devices change, there is no centralized database, no lead source tracking, and no reporting. These gaps result in missed opportunities and reduced growth.",
      "LinkBiz solves this by storing every enquiry securely, providing CRM features, campaign tracking, analytics, subscription management, and AI powered business insights. The Growth Package extends the platform with revenue attribution, opportunity dashboards, growth recommendations, and follow up management.",
    ],
    role: [
      "Full Stack Development",
      "SaaS Product Development",
      "UI/UX Implementation",
      "Business Dashboard Development",
      "CRM Development",
      "WhatsApp Lead Capture Integration",
      "Authentication and Authorization",
      "Campaign Tracking System",
      "Analytics Dashboard",
      "Subscription and Billing Integration",
      "Admin Panel Development",
      "Performance Optimization",
      "Deployment",
    ],
    techStack: [
      {
        label: "Frontend",
        value: "React.js, Vite, Tailwind CSS, React Router",
      },
      { label: "Backend", value: "Node.js, Express.js, REST APIs" },
      { label: "Database", value: "MongoDB" },
      { label: "Authentication", value: "JWT Authentication" },
      { label: "Payments", value: "Paystack Subscription" },
      { label: "Integrations", value: "WhatsApp Deep Linking" },
      { label: "Deployment", value: "Vercel, Render" },
      {
        label: "Libraries",
        value: "Axios, Framer Motion, React Hook Form, Chart.js",
      },
    ],
    keyFeatures: [
      "Business profile with company info, logo, contact details, and WhatsApp link",
      "Lead capture form before WhatsApp opens (name, phone, message, source, timestamp)",
      "Lead inbox with search, filters, status updates, notes, tags, and archive",
      "CRM dashboard: total leads, converted customers, revenue, conversion rate",
      "Campaign tracking: views, clicks, WhatsApp conversions, and lead source analysis",
      "Subscription plans: Free, Growth, and Trial with billing management",
      "Revenue Attribution Dashboard with lead source breakdown (Facebook, Instagram, referral, website)",
      "Opportunity Dashboard: potential revenue, uncontacted leads, inactive customers",
      "Growth Recommendations: overdue leads, top platforms, quotation follow ups",
      "Follow up management: reminders, overdue alerts, lead aging, scheduled dates",
      "Campaign pages with product catalog, posters, and WhatsApp CTA",
      "Admin panel for users, businesses, subscriptions, plans, and platform metrics",
    ],
    platformModules: [
      {
        title: "Authentication",
        items: [
          "Register, login, password recovery",
          "Email verification, JWT authentication",
        ],
      },
      {
        title: "Business Profile",
        items: [
          "Company information and logo upload",
          "Contact details, WhatsApp number, business description",
        ],
      },
      {
        title: "Lead Management",
        items: [
          "Lead inbox, search, filters, status updates",
          "Customer notes, tags, and archive",
        ],
      },
      {
        title: "CRM and Analytics",
        items: [
          "Lead statistics and revenue dashboard",
          "Conversion reports, sales pipeline, analytics",
        ],
      },
      {
        title: "Campaigns",
        items: [
          "Campaign builder and tracking",
          "Lead source analysis and CTA performance",
        ],
      },
      {
        title: "Follow Up",
        items: [
          "Reminder scheduling and notifications",
          "Overdue alerts and lead prioritization",
        ],
      },
      {
        title: "Subscription",
        items: [
          "Pricing plans, trial management, billing",
          "Payment history and subscription status",
        ],
      },
      {
        title: "Admin Panel",
        items: [
          "Users, businesses, active subscriptions",
          "Revenue reports, plans, platform metrics",
        ],
      },
    ],
    userRoles: [
      {
        title: "Business Owner",
        items: [
          "Manage profile and capture leads",
          "View CRM, analyze revenue, upgrade subscription",
          "Run campaigns and follow up workflows",
        ],
      },
      {
        title: "Customer",
        items: [
          "Submit enquiry via business link form",
          "Contact business and start WhatsApp conversation",
        ],
      },
      {
        title: "Admin",
        items: [
          "Manage users and monitor platform",
          "Manage subscriptions and view reports",
        ],
      },
    ],
    targetAudience: [
      "Small and medium sized businesses using WhatsApp for customer communication",
      "Business owners who need a centralized lead database and follow up system",
      "Marketing teams tracking campaign performance and lead sources",
    ],
    codeStructure: [
      "src/",
      "├── components/",
      "│   ├── Navbar",
      "│   ├── Hero",
      "│   ├── Features",
      "│   ├── LeadForm",
      "│   ├── DashboardCards",
      "│   ├── AnalyticsCharts",
      "│   ├── CampaignCard",
      "│   ├── Pricing",
      "│   ├── FAQ",
      "│   └── Footer",
      "├── pages/",
      "│   ├── Home",
      "│   ├── Dashboard",
      "│   ├── Leads",
      "│   ├── Campaigns",
      "│   ├── Analytics",
      "│   ├── Billing",
      "│   ├── Settings",
      "│   └── Admin",
      "├── hooks/",
      "├── services/",
      "├── api/",
      "├── context/",
      "├── utils/",
      "├── assets/",
      "├── layouts/",
      "└── routes/",
    ],
    performanceOptimizations: [
      "Lazy loading and code splitting",
      "Optimized API calls with pagination",
      "Component reusability and memoization",
      "Image optimization",
      "Secure JWT authentication",
      "Responsive design across devices",
      "SEO optimization",
    ],
    architecturePoints: [
      "Lead form gate before WhatsApp deep link redirect",
      "Centralized CRM storing every enquiry with source and timestamp",
      "Subscription gating for Free vs Growth plan features",
      "Campaign pages with views, clicks, and conversion tracking",
      "Growth Package analytics layer for revenue attribution and recommendations",
    ],
    challenges: [
      {
        challenge: "Businesses were losing customer enquiries inside WhatsApp.",
        solution:
          "Implemented a lead capture form before opening WhatsApp so every enquiry is stored in the CRM.",
      },
      {
        challenge:
          "Businesses could not identify which marketing channels generated revenue.",
        solution:
          "Built a Revenue Attribution Dashboard that tracks lead sources and conversion performance.",
      },
      {
        challenge: "Poor customer follow up resulted in lost sales.",
        solution:
          "Developed reminder scheduling, overdue alerts, and lead prioritization tools.",
      },
      {
        challenge: "Small businesses lacked actionable sales insights.",
        solution:
          "Created Growth Recommendations that analyze business data and suggest next best actions to increase revenue.",
      },
      {
        challenge: "Managing free and paid users securely.",
        solution:
          "Integrated subscription billing, trial management, account gating, and secure payment processing with Paystack.",
      },
    ],
    results: [
      "Organized WhatsApp enquiries into a structured CRM.",
      "Eliminated lost customer leads through pre chat form capture.",
      "Improved follow up efficiency through automated reminders.",
      "Provided actionable analytics for better marketing decisions.",
      "Enabled businesses to identify high performing marketing channels.",
      "Created a scalable SaaS platform with subscription based monetization.",
      "Improved lead conversion rates through centralized customer management and business intelligence.",
    ],
    seoDescription:
      "LinkBiz case study, WhatsApp lead capture SaaS with CRM, campaign tracking, Paystack billing, and growth analytics for small businesses.",
  },
] as const;

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
