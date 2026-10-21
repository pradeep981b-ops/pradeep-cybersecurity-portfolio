/**
 * Central portfolio data — generated from Pradeep's resume (Pradeep_Resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Borra Pradeep',
  displayName: 'Pradeep',
  firstName: 'PRADEEP',
  seriesTag: 'CYBERSECURITY',
  originalLabel: 'PRADEEP ORIGINAL',
  
role: 'B.Tech Cybersecurity Student',
  tagline: ['Cybersecurity', 'Ethical Hacking', 'SOC Analyst'],
  
intro:
  'I am a B.Tech Cybersecurity student at Vignan Institute of Information Technology, Visakhapatnam. I am interested in ethical hacking, network security, and security operations. I am continuously developing my technical skills and working toward a career as a SOC Analyst.',
  location: 'Visakhapatnam, Andhra Pradesh',
  email: 'pradeep981b@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/pradeep-borra-101005387?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/pradeep981b-ops',
  },
  resumePdf: '/Pradeep-Resume.pdf',
  portrait: {
    src: '/Pradeep.png',
    srcSet: '',
    alt: 'Portrait of Pradeep Borra',
  },
  interests: [
    'Ethical Hacking',
    'Network Security',
    'Security Operations',
  ],
};



export const education = [
  {
    school: "Vignan's Institute of Information Technology",
    place: 'Visakhapatnam, Andhra Pradesh',
    degree: 'Bachelor of Technology — Cybersecurity',
    period: '2025 – 2029',
    score: 'Currently pursuing',
  },
  {
    school: 'Sri Vidya Junior College',
    place: 'Narsipatnam, Andhra Pradesh',
    degree: 'Intermediate — MPC',
    period: '2023 – 2025',
    score: '98%',
  },
  {
    school: 'Government High School',
    place: 'Pedaboddepalli, Andhra Pradesh',
    degree: 'SSC',
    period: '2022 – 2023',
    score: '92.33%',
  },
];

export const experience = [
  {
    company: 'CodeAlpha',
    role: 'Python Programming Intern',
    place: 'Remote',
    period: 'May 2025 – June 2025',
    points: [
  'Completed assigned tasks during a Python programming internship.',
  'Practiced Python programming and problem-solving.',
  'Strengthened programming fundamentals through hands-on exercises.',
],
  },
];
export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};


export const projects: Project[] = [
  {
    id: 'real-time-cricket-scoring',
    title: 'Real-Time Cricket Scoring Web App',
    year: '2026',
    genre: 'Web Development • Live Scoring',
    logline:
      'A shared live-scoring web app for street and local cricket, allowing players to follow ball-by-ball updates from their own phones.',
    stack: ['JavaScript', 'Web Development', 'Real-Time Communication'],
    build: [
      'Built a cricket scoring web app where players can access the same match using a match code and follow ball-by-ball score updates.',
      'Added a scoring baton so only one scorer is active at a time, allowing another available player to take over.',
      'Included custom street-cricket rules for wides, no-ball runs, byes, and a joker player.',
    ],
    features: [
      'Shared live match scoring',
      'Match code to access the same match',
      'Ball-by-ball score updates',
      'Scoring baton and scorer handover',
      'Custom street-cricket rules',
    ],
    metrics: [
      { value: 'Live', label: 'score updates' },
      { value: 'Shared', label: 'match access' },
      { value: 'Custom', label: 'cricket rules' },
    ],
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};


export const achievements: Achievement[] = [
  {
    id: 'cricliv',
    title: 'Cricliv Website',
    org: 'Personal Project',
    detail:
      'Built a working cricket-scoring website for street and local cricket.',
    laurel: 'Project Development',
  },
  {
    id: 'hackathon-prototype',
    title: '24-Hour Hackathon',
    org: 'College Hackathon',
    detail:
      'Built a working prototype during a time-limited college hackathon.',
    laurel: 'Hackathon Experience',
  },
  {
    id: 'codealpha-internship',
    title: 'Python Programming Intern',
    org: 'CodeAlpha',
    detail:
      'Completed a Python programming internship focused on coding and problem-solving.',
    laurel: 'Internship',
  },
  {
    id: 'cybersecurity-club',
    title: 'Club Influencer',
    org: 'Cybersecurity Department Club',
    detail:
      'Contributes to club activities and promotes student participation in cybersecurity initiatives.',
    laurel: 'Leadership',
  },
  {
    id: 'academic',
    title: 'Intermediate — 98%',
    org: 'Sri Vidya Junior College',
    detail:
      'Completed Intermediate MPC with 98%.',
    laurel: 'Academic Achievement',
  },
];


export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'Online Course',
    name: 'Prompt Engineering',
    link: 'https://drive.google.com/file/d/1MvzfOJzdwbiubN5XkyYe-TkDUJ2cretF/view?usp=drivesdk',
  },
  {
    issuer: 'IBM',
    name: 'AI Fundamentals',
    link: 'https://drive.google.com/file/d/1qkUiZLmm1hyP4wsOm_3UcdQ_SHyu37Gz/view?usp=drivesdk',
  },
   {
    issuer: 'IBM',
    name: 'Lifelong Professional Skills',
    link: 'https://drive.google.com/file/d/108cA5JocxdTTpJtSjrbDcexABXnTUzlt/view?usp=drivesdk',
  },
  {
    issuer: 'IBM',
    name: 'Cybersecurity',
    link: 'https://drive.google.com/file/d/1ewH8JVX_gua9_LAwPEAlq3f098T8xolp/view?usp=drivesdk',
  },
  {
    issuer: 'Skill Test',
    name: 'Data Structure',
    link: 'https://drive.google.com/file/d/1xCAGLqw_bkrOQGH5vCnnqEXxXzpBqOub/view?usp=drivesdk',
  },
  {
    issuer: 'CTF Challenge',
    name: 'CTF Challenge — Completed',
    link: 'https://drive.google.com/file/d/1fmzGxTgBhojJVjttrnO1_tmN-3yCP6jg/view?usp=drivesdk',
  },
  {
    issuer: 'Skill Test',
    name: 'Java',
    link: 'https://drive.google.com/file/d/1m644ytJlh9i3-vsW8CBbNCygn_UTRoOD/view?usp=drivesdk',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };



export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Programming fundamentals',
    skills: [
      { name: 'C', mono: 'C', note: 'Fundamentals' },
      { name: 'Python', mono: 'Py', note: 'Basics' },
      { name: 'Java', mono: 'Jv', note: 'Basics & OOP' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Security and networking foundations',
    skills: [
      { name: 'Cybersecurity Fundamentals', mono: 'CS' },
      { name: 'Networking Fundamentals', mono: 'NW' },
      { name: 'CTF Challenge', mono: 'CTF' },
    ],
  },
  {
    id: 'development',
    title: 'Web Development',
    subtitle: 'Practical application development',
    skills: [
      { name: 'Web Development', mono: 'WB' },
      { name: 'Real-Time Applications', mono: 'RT' },
      { name: 'Git / GitHub', mono: 'GH' },
    ],
  },
  {
    id: 'foundations',
    title: 'Core Concepts',
    subtitle: 'Computer science and creative problem solving',
    skills: [
      { name: 'Data Structures', mono: 'DS' },
      { name: 'Problem Solving', mono: 'PS' },
      { name: 'Prompt Engineering', mono: 'PE' },
    ],
  },
];
/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */

export const skillEvidence: Record<string, string[]> = {
  C: ['Programming fundamentals'],
  Python: ['CodeAlpha Python Programming Internship'],
  Java: ['Java fundamentals and OOP basics'],
  'Cybersecurity Fundamentals': [
    'Cybersecurity learning and CTF challenge experience',
  ],
  'Networking Fundamentals': [
    'Networking course',
  ],
  'Web Development': [
    'Cricliv — working cricket-scoring website',
  ],
  'Real-Time Applications': [
    'Cricliv — cricket-scoring project',
  ],
  'Git / GitHub': [
    'GitHub profile and project work',
  ],
  'Data Structures': [
    'Data Structure skill test',
  ],
  'Problem Solving': [
    '24-hour college hackathon prototype',
  ],
  'Prompt Engineering': [
    'Prompt Engineering course',
  ],
};


export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };


export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2019 – 2023',
    synopsis:
      'Building the academic foundation through school and Intermediate education.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The School Years',
        description:
          'Completed SSC at Government High School, Pedaboddepalli, with 92.33%.',
        tags: ['SSC', '92.33%'],
        runtime: '2019 – 2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The MPC Chapter',
        description:
          'Completed Intermediate MPC at Sri Vidya Junior College, Narsipatnam, with 98%.',
        tags: ['Intermediate', 'MPC', '98%'],
        runtime: '2021 – 2023',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Into Cybersecurity',
    period: '2025 – Present',
    synopsis:
      'Pursuing a B.Tech in Cybersecurity and building a foundation in programming, networking, and security.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Cybersecurity Student',
        description:
          "Started a B.Tech in Cybersecurity at Vignan's Institute of Information Technology, Visakhapatnam.",
        tags: ['B.Tech', 'Cybersecurity'],
        runtime: '2025 – 2029',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Python Intern',
        description:
          'Completed a Python Programming Internship at CodeAlpha, gaining hands-on coding and problem-solving experience.',
        tags: ['Python', 'Internship', 'CodeAlpha'],
        runtime: 'May 2025 – June 2025',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning by Building',
    period: '2026',
    synopsis:
      'Turning ideas into practical projects and learning through hands-on development.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Cricket App Builder',
        description:
          'Built Cricliv, a working cricket-scoring website designed for street and local cricket.',
        tags: ['Cricliv', 'Web Development', 'Cricket'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'The Hackathon Prototype',
        description:
          'Built a working prototype during a 24-hour college hackathon.',
        tags: ['Hackathon', 'Prototyping', 'Teamwork'],
        runtime: '24-hour hackathon',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'Growing in Security',
    period: 'Present',
    synopsis:
      'Developing cybersecurity knowledge, strengthening technical foundations, and participating in the college cybersecurity community.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Community Contributor',
        description:
          'Contributes to the Cybersecurity Department Club as an Influencer, promoting club activities and student participation.',
        tags: ['Cybersecurity Club', 'Leadership', 'Community'],
        runtime: '2026 – Present',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Future SOC Analyst',
        description:
          'Working toward a cybersecurity career by developing programming, networking, and security fundamentals.',
        tags: ['Cybersecurity', 'Networking', 'SOC Analyst'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'The Next Chapter',
    synopsis:
      'Continuing to learn, build projects, and prepare for future opportunities in cybersecurity.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Mission',
        description:
          'Focused on expanding cybersecurity knowledge, gaining practical experience, and preparing for a future SOC Analyst role.',
        tags: ['Cybersecurity', 'Hands-on Learning', 'Career Growth'],
        runtime: 'In progress',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };


export const topPicks: TopPick[] = [
  {
    label: 'Featured Project',
    title: 'Cricliv',
    detail: 'Working cricket-scoring website',
    palette: ocean,
  },
  {
    label: 'Hackathon Experience',
    title: '24-Hour Hackathon',
    detail: 'Built a working prototype',
    palette: crimson,
  },
  {
    label: 'Programming',
    title: 'C, Python & Java',
    detail: 'Programming fundamentals and Java OOP basics',
    palette: amber,
  },
  {
    label: 'Internship',
    title: 'CodeAlpha',
    detail: 'Python Programming Internship • 2025',
    palette: violet,
  },
  {
    label: 'Academic Background',
    title: 'B.Tech Cybersecurity',
    detail: "Vignan's Institute of Information Technology",
    palette: jade,
  },
  {
    label: 'Security Foundations',
    title: 'Cybersecurity',
    detail: 'Learning networking and security fundamentals',
    palette: ocean,
  },
  {
    label: 'Community',
    title: 'Cybersecurity Club',
    detail: 'Influencer • Department club activities',
    palette: crimson,
  },
  {
    label: 'Core Concepts',
    title: 'Data Structures',
    detail: 'Building computer science fundamentals',
    palette: violet,
  },
  {
    label: 'Technical Interest',
    title: 'Ethical Hacking',
    detail: 'Developing practical security knowledge',
    palette: amber,
  },
  {
    label: 'Career Goal',
    title: 'SOC Analyst',
    detail: 'Working toward a cybersecurity career',
    palette: jade,
  },
];


/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };


export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Cybersecurity',
    lines: [
      "Vignan's Institute of Information Technology, Visakhapatnam",
      '2025 – 2029 · Currently pursuing',
    ],
    chips: ['Cybersecurity', 'B.Tech'],
  },
  {
    kicker: 'Programming',
    title: 'Learning by coding.',
    lines: [
      'C · Python fundamentals · Java and OOP basics',
      'Building programming and problem-solving skills',
    ],
    chips: ['C', 'Python', 'Java'],
  },
  {
    kicker: 'Internship',
    title: 'Python in Practice',
    lines: [
      'Python Programming Internship · CodeAlpha',
      'May 2025 – June 2025',
    ],
    chips: ['Python', 'Internship'],
  },
  {
    kicker: 'Featured Project',
    title: 'Meet Cricliv.',
    lines: [
      'A working cricket-scoring website for local and street cricket',
      'Built to make following a match easier',
    ],
    chips: ['Cricliv', 'Web Development'],
  },
  {
    kicker: 'Hackathon',
    title: 'Built in 24 Hours.',
    lines: [
      'Developed a working prototype during a 24-hour college hackathon',
      'Learning through teamwork and rapid prototyping',
    ],
    chips: ['Hackathon', 'Prototype'],
  },
  {
    kicker: 'Cybersecurity',
    title: 'Security Mindset.',
    lines: [
      'Exploring cybersecurity, ethical hacking, and networking fundamentals',
      'Contributing to college cybersecurity club activities',
    ],
    chips: ['Cybersecurity', 'Networking'],
  },
  {
    kicker: 'Current Mission',
    title: 'Future SOC Analyst.',
    lines: [
      'Building a foundation in programming, networking, and security',
      'Focused on practical learning and career growth',
    ],
    chips: ['SOC Analyst', 'Keep Learning'],
  },
];


export type ProfileId = 'pradeep' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';


export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'pradeep',
    name: 'Pradeep',
    blurb: 'My cybersecurity journey, from beginning to now',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Education, skills, projects and experience',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, technical skills and GitHub',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'My Journey',
    blurb: 'Highlights, achievements and personal growth',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];


export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'Introduction • Education & Career Goals',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Projects',
    card: 'My Projects',
    meta: `${projects.length} Projects • Practical Development`,
    palette: crimson,
  },
  picks: {
    nav: 'Highlights',
    card: 'Career Highlights',
    meta: 'Skills • Projects • Experience',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'Technical Skills',
    meta: `${skillCategories.length} Skill Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Achievements',
    card: 'Achievements & Certifications',
    meta: `${achievements.length} Achievements • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'My Resume',
    meta: 'Education • Experience • Resume PDF',
    palette: violet,
  },
};

