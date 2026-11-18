export interface SkillCategory {
  id: string;
  label: string;
  items: string[];
}

export interface SpokenLanguage {
  name: string;
  level: 'Fluent' | 'Intermediate' | 'Basic';
  proficiencyPercent: number;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerGroup: 'Oracle' | 'Cisco' | 'Red Hat' | 'CodeChef' | 'IBM';
  year?: string;
  description: string;
  imagePath: string;
  pdfPath?: string;
  badgeLabel?: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  isPrizeWinner?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: 'Faizan Ahamad Bhat',
    watermarkName: 'Faizan Ahamad Bhat',
    subtitle: 'AI/ML ENGINEERING STUDENT · PYTHON & AI DEVELOPER',
    location: 'Bengaluru, Karnataka · Verinag, J&K',
    phone: '+91 60065 25161',
    phoneHref: 'tel:+916006525161',
    email: 'bhatfaizan471@gmail.com',
    emailHref: 'mailto:bhatfaizan471@gmail.com',
    linkedinDisplay: 'linkedin.com/in/faizan-ahamad-bhat-71a570385',
    linkedinUrl: 'https://www.linkedin.com/in/faizan-ahamad-bhat-71a570385/',
    githubDisplay: 'github.com/bhatfaizan471-png',
    githubUrl: 'https://github.com/bhatfaizan471-png',
    leetcodeDisplay: 'leetcode.com/u/FAIXAN',
    leetcodeUrl: 'https://leetcode.com/u/FAIXAN/',
    photoPath: '/images/profile/photo.jpeg',
    resumePath: '/resume.pdf',
    resumeFileName: 'Faizan_Ahamad_Bhat_Resume.pdf',
  },
  heroQuote:
    'I build practical AI applications, responsive websites, Python automation, and database solutions—applying AI/ML and software engineering foundations to real-world challenges.',
  glanceMetrics: [
    {
      value: '8.0',
      suffix: '/10',
      label: 'B.E. CSE (AI & ML) CGPA',
    },
    {
      value: '100+',
      suffix: '',
      label: 'LeetCode problems solved',
    },
    {
      value: '7',
      suffix: '',
      label: 'Industry certifications',
    },
    {
      value: '1st',
      suffix: '',
      label: 'Prize Winner · Admission Assistant',
    },
  ],
  profile: {
    statement:
      'I am a 3rd-year Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy solving problems with Python, exploring AI/ML fundamentals, working with SQL and databases, and turning ideas into practical projects. Constantly building, testing, and improving with every build.',
    targetRoles: [
      'Software Development',
      'AI/ML Engineering',
      'Full Stack Development',
      'Python Automation',
    ],
  },
  education: {
    degree: 'Bachelor of Engineering in CSE (Artificial Intelligence & Machine Learning)',
    institution: 'Nagarjuna College of Engineering and Technology (NCET), Bengaluru',
    cgpaValue: '8.0 / 10',
    cgpaNote: 'Cumulative CGPA',
    statusNote: '3rd Year · Class of 2027',
    expectedGraduation: '2027',
    coursework: [
      'Artificial Intelligence & ML',
      'Data Structures and Algorithms',
      'Natural Language Processing (NLP)',
      'Database Management Systems',
      'Object-Oriented Programming (Java & C)',
      'Python Application Development',
    ],
  },
  experience: {
    role: 'AI/ML Engineering Student & Developer',
    context: 'Academic Projects & Practical Builds',
    bullets: [
      'Awarded Prize Winner in college competition for developing the NCET Admission Assistant NLP chatbot.',
      'Active algorithmic problem solver with 100+ problems solved on LeetCode across arrays, DP, recursion, and SQL.',
      'Developed database-driven web systems including Riwaaj Ledger, recursive puzzle engines, and Streamlit prototypes.',
    ],
  },
  languages: [
    { name: 'English', level: 'Fluent', proficiencyPercent: 95 },
    { name: 'Urdu', level: 'Fluent', proficiencyPercent: 95 },
    { name: 'Kashmiri', level: 'Fluent', proficiencyPercent: 100 },
    { name: 'Hindi', level: 'Fluent', proficiencyPercent: 90 },
  ] as SpokenLanguage[],
  skills: [
    {
      id: 'programming',
      label: 'Programming Languages',
      items: ['Python', 'Java', 'C', 'SQL', 'JavaScript', 'TypeScript'],
    },
    {
      id: 'ai-ml',
      label: 'AI & Machine Learning',
      items: [
        'AI/ML Fundamentals',
        'Natural Language Processing (NLP)',
        'Generative AI',
        'LangChain',
        'Grok API',
        'Streamlit',
      ],
    },
    {
      id: 'databases',
      label: 'Databases & Cloud',
      items: [
        'MySQL',
        'MongoDB',
        'SQL Queries',
        'Firebase Firestore',
        'CRUD Architecture',
        'Data Modeling',
      ],
    },
    {
      id: 'tools',
      label: 'Tools & Environments',
      items: [
        'Git',
        'GitHub',
        'Kali Linux',
        'Ubuntu',
        'Linux CLI',
        'VS Code',
        'Vite',
      ],
    },
    {
      id: 'problem-solving',
      label: 'Problem Solving & CS',
      items: [
        'Data Structures & Algorithms',
        'LeetCode (100+ Solved)',
        'Recursion & Backtracking',
        'Algorithmic Thinking',
        'CodeChef 500 Difficulty',
      ],
    },
  ] as SkillCategory[],
  certifications: [
    {
      id: 'redhat-java-ee',
      title: 'Red Hat Java EE (AD183)',
      issuer: 'Red Hat',
      issuerGroup: 'Red Hat',
      year: '2026',
      description: 'Red Hat Application Development I: Programming in Java EE (AD183 - RHA) - Ver. 7.0 · April 22, 2026',
      imagePath: '/images/redhat-java-ad183.png',
      pdfPath: '/logos/certifications/1nc24ci032-redhat-java.pdf',
      badgeLabel: 'Red Hat Certified',
    },
    {
      id: 'oracle-java',
      title: 'Oracle Java Fundamentals',
      issuer: 'Oracle Academy',
      issuerGroup: 'Oracle',
      year: '2026',
      description: 'Award of Completion, April 25, 2026 · Java Foundations & OOP',
      imagePath: '/logos/certifications/oracle-java-fundamentals.jpg',
      badgeLabel: 'Oracle Academy',
    },
    {
      id: 'oracle-ai',
      title: 'Oracle AI Foundations Associate',
      issuer: 'Oracle Cloud Infrastructure',
      issuerGroup: 'Oracle',
      year: '2025',
      description: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate · Valid through Nov 2027',
      imagePath: '/logos/certifications/oracle-ai-foundations.png',
      badgeLabel: 'Oracle Certified',
    },
    {
      id: 'codechef-500',
      title: 'CodeChef 500 Difficulty',
      issuer: 'CodeChef',
      issuerGroup: 'CodeChef',
      year: '2026',
      description: 'Verified Certificate of Excellence in Problem Solving & Algorithmic Practice',
      imagePath: '/logos/certifications/1nc24ci032-codechef.pdf',
      pdfPath: '/logos/certifications/1nc24ci032-codechef.pdf',
      badgeLabel: 'Problem Solving',
    },
    {
      id: 'redhat-python',
      title: 'Python Programming with Red Hat (AD141)',
      issuer: 'Red Hat',
      issuerGroup: 'Red Hat',
      year: '2025',
      description: 'Python Programming with Red Hat (AD141 - RHA - Ver. 9.0) · September 06, 2025',
      imagePath: '/images/python-redhat-ad141.png',
      pdfPath: '/logos/certifications/python-certificate.pdf',
      badgeLabel: 'Red Hat Attendance',
    },
    {
      id: 'cisco-c-essentials',
      title: 'C Essentials 1',
      issuer: 'Cisco Networking Academy',
      issuerGroup: 'Cisco',
      year: '2025',
      description: 'Cisco Networking Academy C Essentials 1 Certificate · September 04, 2025',
      imagePath: '/logos/certifications/cisco-c-essentials.png',
      pdfPath: '/logos/certifications/cessentials1update20260512-32-fqhs3e.pdf',
      badgeLabel: 'Cisco Academy',
    },
    {
      id: 'ibm-ai-literacy',
      title: 'IBM AI Literacy',
      issuer: 'IBM & Infosys Springboard',
      issuerGroup: 'IBM',
      year: '2025',
      description: 'Artificial Intelligence Literacy, Machine Learning Principles & Ethics Certification',
      imagePath: '/logos/certifications/all-certificates.pdf',
      pdfPath: '/logos/certifications/all-certificates.pdf',
      badgeLabel: 'IBM & Infosys',
    },
  ] as Certification[],
  projects: [
    {
      id: 'ncet-assistant',
      index: '01',
      title: 'NCET Admission Assistant',
      category: 'AI Assistant · Prize Winner',
      description:
        'AI-powered assistant for admissions and student queries using Python and NLP. Won a college competition as a recognized Prize Winner project.',
      technologies: ['Python', 'NLP', 'AI', 'Streamlit'],
      highlights: [
        'Won college project competition as a recognized Prize Winner.',
        'Processes admission, department, curriculum, and campus inquiries via intuitive conversational UI.',
        'Built with Python NLP pipelines and interactive Streamlit web interface.',
      ],
      liveDemoUrl: 'https://ncetchatbot.streamlit.app/',
      githubUrl: 'https://github.com/bhatfaizan471-png/collage_chatbot',
      isPrizeWinner: true,
    },
    {
      id: 'tower-of-hanoi',
      index: '02',
      title: 'Tower of Hanoi Game',
      category: 'Recursion Puzzle & Simulation',
      description:
        'Java-based interactive puzzle that demonstrates recursion, algorithmic thinking, data structures, and structured user flow.',
      technologies: ['Java', 'Recursion', 'Data Structures', 'Web Demo'],
      highlights: [
        'Visualized step-by-step recursive disc movement algorithm.',
        'Interactive disc controls, move counter, and minimum-move formula verification.',
        'Deployed with live interactive web demo and complete open source repository.',
      ],
      liveDemoUrl: 'https://tower-of-honai-game.onrender.com/',
      githubUrl: 'https://github.com/bhatfaizan471-png/Tower_of_Honai_game',
    },
    {
      id: 'leetcode-track',
      index: '03',
      title: 'LeetCode Problem Solving',
      category: 'DSA Journey & Practice',
      description:
        'Consistent practice track across arrays, dynamic programming, recursion, binary search, and SQL with 100+ problems solved and real-time profile integration.',
      technologies: ['DSA', 'SQL', 'Java', 'Python', 'LeetCode API'],
      highlights: [
        '100+ solved challenges across algorithms and database problem sets.',
        'Deep focus on time complexity analysis and memory optimization.',
        'Connected to live LeetCode stats API displaying verified problem count.',
      ],
      liveDemoUrl: 'https://leetcode.com/u/FAIXAN/',
      githubUrl: 'https://leetcode.com/u/FAIXAN/',
    },
    {
      id: 'riwaaj-ledger',
      index: '04',
      title: 'Riwaaj Ledger',
      category: 'Wedding & Event Ledger',
      description:
        'Digital ledger application tailored for Kashmiri weddings to manage guest contacts, record gift transactions, and track net debit-credit balances in real time.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Firestore'],
      highlights: [
        'Real-time Firestore database synchronization for cash and gift entries.',
        'Designed specifically for cultural wedding ceremonies with intuitive mobile UX.',
        'Instant balance calculation, searchable guest records, and transaction logs.',
      ],
      liveDemoUrl: 'https://riwaaj-ledger.vercel.app/',
      githubUrl: 'https://github.com/bhatfaizan471-png/RiwaajLedger',
    },
  ] as ProjectItem[],
  currentlyBuilding: {
    id: 'personal-chatbot',
    title: 'Personal AI Chatbot',
    category: 'Conversational AI · Active Development',
    description:
      'Currently building an intelligent personal AI chatbot focused on conversational AI, prompt orchestration, and practical agent workflows.',
    technologies: ['Python', 'Grok API', 'LangChain', 'Streamlit'],
    status: 'In Progress',
    highlights: [
      'Integrating Grok API and LangChain for multi-turn conversational memory.',
      'Designing contextual prompt chains tailored for student and productivity assistance.',
      'Active development prototype with planned public release.',
    ],
  },
  services: [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Responsive websites, personal portfolios, landing pages, and clean web applications.',
      iconName: 'Laptop',
      category: 'Frontend & Web',
    },
    {
      id: 'python-automation',
      title: 'Python Automation',
      description: 'Custom scripts, scrapers, and workflow automation for repetitive tasks and file processing.',
      iconName: 'Cog',
      category: 'Automation',
    },
    {
      id: 'database-solutions',
      title: 'SQL & Database Solutions',
      description: 'Practical database design, query optimization, schema structuring, and CRUD operations.',
      iconName: 'Database',
      category: 'Databases',
    },
    {
      id: 'ai-prototypes',
      title: 'AI Chatbot Prototypes',
      description: 'Conversational AI ideas, LLM API integrations (Grok/OpenAI), and interactive agent prototypes.',
      iconName: 'Bot',
      category: 'Artificial Intelligence',
    },
    {
      id: 'streamlit-apps',
      title: 'Streamlit Applications',
      description: 'Fast, interactive web dashboards that make Python models and algorithms simple to explore.',
      iconName: 'LineChart',
      category: 'Interactive Tools',
    },
    {
      id: 'data-cleaning',
      title: 'Data Cleaning & Prep',
      description: 'Organizing, cleaning, transforming, and formatting raw datasets for analysis or apps.',
      iconName: 'Filter',
      category: 'Data Engineering',
    },
    {
      id: 'technical-presentations',
      title: 'Technical Presentations',
      description: 'Clean, structured technical slide decks and diagrams for project demos and student reviews.',
      iconName: 'Presentation',
      category: 'Communication',
    },
  ] as ServiceItem[],
};
