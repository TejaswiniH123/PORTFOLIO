export const personalInfo = {
  name: "Tejaswini H",
  title: "I.S.E Engineer | Software Engineer | Backend Developer | Java and Spring Boot Enthusiast",
  intro:
    "Final Year Information Science Engineering student passionate about building scalable backend applications, solving real-world problems, and continuously learning modern software engineering technologies.",
  about:
    "I enjoy developing robust backend systems using Java, Spring Boot, REST APIs, and SQL. Alongside backend development, I have experience building AI-powered applications and full-stack projects. I am currently preparing for Software Development Engineer roles while strengthening my skills in Data Structures, System Design, and Cloud technologies.",
  email: "tejaswinih2005@gmail.com",
  github: "https://github.com/TejaswiniH123",
  linkedin: "https://www.linkedin.com/in/tejaswini-h/",
  instagram: "https://www.instagram.com/htejaswinii",
  twitter: "https://x.com/TejaswiniH21",
  resume:
    "https://drive.google.com/file/d/1eOIfz9iNXCChgZ_U_8ccdHmtAAA3L-lP/view",
};

export const stats = [
  { label: "Projects", value: 10, suffix: "+", icon: "🚀" },
  { label: "Internships / Roles", value: 2, suffix: "+", icon: "💼" },
  { label: "CGPA", value: 8.96, suffix: "/10", icon: "🎓", decimals: 2 },
    {
    label: "Technologies",
    value: 10,
    suffix: "+",
    icon: "💻",
  },
];

export const skills = {
  "Programming Languages": {
    icon: "💻",
    color: "#4483BE",
    items: ["Python", "Java", "C"],
  },
  "Frameworks & Libraries": {
    icon: "🧩",
    color: "#7C3AED",
    items: [
      "Spring Boot",
      "React",
      "Scikit-learn",
      "REST APIs",
      "Hibernate",
      "Spring Data JPA",
    ],
  },
  Databases: {
    icon: "🗄️",
    color: "#06B6D4",
    items: ["MySQL", "PostgreSQL",],
  },
  "Tools & Platforms": {
    icon: "🛠️",
    color: "#10B981",
    items: ["Docker", "Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Maven", "Excel"],
  },
  Specializations: {
    icon: "🧠",
    color: "#F59E0B",
    items: [
      "Machine Learning",
      "Backend Development",
      "Java Development",
      "System Design",
      "Cloud Computing",
      "Crypotgraphy and Network Security",
      "BlockChain basics",
    ],
  },
  "Core Subjects": {
    icon: "📚",
    color: "#EC4899",
    items: ["DSA", "DBMS", "OS", "Computer Networks", "OOPS"],
  },
};

export const experience = [
  {
    role: "Software Development Intern",
    company: "Proxenix",
    period: "Oct 2025 – Dec 2025",
    duration: "2 months",
    type: "Industry",
    color: "#4483BE",
    icon: "💼",
    logo: "/logos/Proxenix.png",
    points: [
      "Developed and deployed a sentiment analysis application using Spring Boot and machine learning.",
      "Built REST APIs and integrated MySQL for efficient data storage and prediction services.",
      "Gaining hands-on exposure to enterprise software development",
    ],
  },
  {
    role: "Bootcamp Mentee",
    company: "Amazon Future Engineer",
    period: "Mar 2025 – May 2025",
    duration: "2 months",
    type: "Apprenticeship",
    color: "#7C3AED",
    icon: "🔬",
    logo: "/logos/amazon.png",
    points: [
      "Attended Bootcamp officially conducted by Foundation For Excellance Organisation",
      "Gaining hands on experience with python and DSA",
    ],
  },
  {
  role: "Mentorship Program Mentee",
  company: "Foundation for Excellence",
  period: "Jul 2025 – Apr 2026",
  duration: "10 months",
  type: "Mentorship",
  color: "#3B82F6",
  icon: "🎯",
  logo: "/logos/ffe.png",
  points: [
    "Participated in mentorship sessions focused on professional development and career readiness.",
    "Strengthened communication, time management, and workplace skills through structured training.",
    "Received guidance from industry mentors on software engineering career preparation.",
  ],
},
];

export const projects = [
{
  title: "AI-Powered Voice Navigation Assistant for Visually Impaired",
  description:
    "Built an AI-powered navigation assistant that detects obstacles and provides real-time voice guidance for visually impaired users. Integrated OCR, GPS, and offline AI models to support indoor and outdoor navigation, obstacle detection, and signboard reading.",
  tech: [
    "Python",
    "FastAPI",
    "Computer Vision",
    "OpenCV",
    "OCR",
    "GPS",
    "Voice Assistant"
  ],
  github: "https://github.com/TejaswiniH123/AI-navigation-assistant-for-visually-impaired",
  color: "#4483BE",
  gradient: "from-blue-600/20 to-purple-600/10",
  icon: "🛡️",
  category: "AI",
  featured: true,
},

{
  title: "Load Balancer Simulator & Visualizer",
  description:
    "Developed a load balancer simulator to visualize real-time request routing across multiple backend servers. Implemented Round Robin, Weighted Round Robin, and Least Connections algorithms with live analytics, WebSocket updates, and dynamic server scaling. Deployed the application using Docker, Render, and Vercel.",
  tech: [
    "Java",
    "Spring Boot",
    "Next.js",
    "TypeScript",
    "WebSocket",
    "Docker"
  ],
  github: "https://github.com/TejaswiniH123/Load_Balancer_Simulator",
  color: "#7C3AED",
  gradient: "from-purple-600/20 to-pink-600/10",
  icon: "⚖️",
  category: "System Design",
  featured: true,
},

{
  title: "IntelliHire - Technical Interview Evaluation System",
  description:
    "Developed a resume-driven interview platform that extracts candidate skills and generates domain-specific technical interview questions. Built a scoring engine with performance analytics and skill-gap detection using Spring Boot and MySQL.",
  tech: [
    "Java",
    "Spring Boot",
    "MySQL",
    "REST API",
    "PDF Parsing"
  ],
  github: "https://github.com/TejaswiniH123/Intellihire---ResumeAware-Technical-Interview-Evaluation-System",
  color: "#06B6D4",
  gradient: "from-cyan-600/20 to-blue-600/10",
  icon: "💼",
  category: "Full Stack",
  featured: true,
},
];

export const achievements = [
  {
    title: "Foundation for Excellence Scholar",
    event: "Foundation for Excellence",
    date: "2023-2027",
    badge: "🎓 Scholar",
    description:
      "Awarded the Foundation for Excellence Scholarship in recognition of academic performance and commitment to pursuing engineering education.",
    icon: "🎓",
    color: "#3B82F6",
    image: "/logos/ffe.png",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Inter-Branch Volleyball & Throwball Player",
    event: "College Sports",
    date: "2023 – Present",
    badge: "🏐 Sports",
    description:
      "Represented the department in inter-branch Volleyball and Throwball tournaments, demonstrating teamwork, leadership, discipline, and competitive spirit.",
    icon: "🏐",
    color: "#EC4899",
    image: "/logos/sports.png",
    gradient: "from-pink-500/20 to-rose-500/10",
  },
  {
    title: "Active Hackathon Participant",
    event: "National & College-Level Hackathons",
    date: "2024 – Present",
    badge: "💻 Hackathons",
    description:
      "Participated in multiple hackathons and technical competitions, collaborating with teams to design innovative software solutions and strengthen problem-solving skills.",
    icon: "💻",
    color: "#10B981",
    image: "/logos/hackathon.jpeg",
    gradient: "from-emerald-500/20 to-green-500/10",
  },
];

export const leadership = [
  {
    org: "Anvaya NIE IUCEE Student Chapter",
    icon: "🎨",
    color: "#7C3AED",
    logo: "/logos/anvaya.png",
    roles: [
      {
        title: "Associate – Design and Media",
        period: "Oct 2025 – Present",
        current: true,
        description:
          "Collaborate with the design team to create posters, event visuals, and digital content that support chapter activities and outreach. Design promotional materials using Canva and Figma.",
      },
    ],
  },
  {
    org: "Youth For Seva",
    icon: "🤝",
    color: "#10B981",
    logo: "/logos/yfs.png",
    roles: [
      {
        title: "Volunteer",
        period: "2025 – Present",
        current: true,
        description:
          "Volunteer in community service initiatives, supporting social impact activities and collaborating with teams to organize and participate in service programs.",
      },
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering – Information Science & Engineering",
    institution: "The National Institute of Engineering, Mysuru",
    period: "2023 – 2027",
    score: "CGPA: 8.96/10",
    icon: "🎓",
    color: "#4483BE",
    logo: "/logos/NIE.png",
  },
  {
    degree: "Pre-University Course (PCMB)",
    institution: "Vishwachetana Vidyanikethan Residential PU College, Davanagere",
    period: "2021 – 2023",
    score: "96.33%",
    icon: "📖",
    color: "#7C3AED",
    logo: "/logos/puc.png",
  },
  {
    degree: "SSLC",
    institution: "St. Mary's Convent School, Harihar",
    period: "2021",
    score: "95.84%",
    icon: "🏫",
    color: "#06B6D4",
    logo: "/logos/school.png",
  },
];

export const certifications = [
  {
    title: "Amazon Future Engineer Bootcamp",
    issuer: "Amazon Future Engineer - Nav Gurukul",
    image: "/photos/AFE.png",
    credential: "https://drive.google.com/file/d/1PQzC3Cm5i60grVoK-CT9bdyKtCCBR5gr/view",
    color: "#4483BE",
  },
  {
    title: "Mentorship Program",
    issuer: "Foundation For Excellence",
    image: "/photos/mentorship.png",
    credential: "https://drive.google.com/file/d/1idiZcLbXjWGa-WD3TUlYzjMHHvRte-h0/view",
    color: "#D97757",
  },
  {
    title: "Multiple Coursera Certifications",
    issuer: "Coursera",
    image: "/photos/coursera.png",
    credential: "https://drive.google.com/drive/folders/12DLGlBel6wwXGds4G_l5dDoRwW2Sw4TB?usp=sharing",
    color: "#06B6D4",
  },
];

export const techIcons = [
  { label: "Python", emoji: "🐍", color: "#3B82F6" },
  { label: "Java", emoji: "☕", color: "#F89820" },
  { label: "Spring Boot", emoji: "🍃", color: "#6DB33F" },
  { label: "React", emoji: "⚛️", color: "#61DAFB" },
  { label: "Next.js", emoji: "▲", color: "#000000" },
  { label: "MySQL", emoji: "🗄️", color: "#4479A1" },
  { label: "Docker", emoji: "🐳", color: "#2496ED" },
  { label: "Git", emoji: "🌿", color: "#F05032" },
  { label: "AI", emoji: "🤖", color: "#7C3AED" },
  { label: "ML", emoji: "⚡", color: "#F59E0B" },
];
