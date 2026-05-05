import {
    Github, Linkedin, Mail, Code, Terminal,
    ExternalLink, Award, Cpu, Globe, Layout
} from 'lucide-react';

export const PROFILE = {
    name: "Shashwat Sharma",
    role: "Full Stack Engineer",
    sub: "Building scalable systems & interactive web experiences.",
    email: "shashwat.sharma@adypu.edu.in",
    github: "https://github.com/portneon",
    linkedin: "https://linkedin.com/in/shashwat-sharma-nst",
    leetcode: "https://leetcode.com/u/paaalak/"
};

export const STATS = [
    { icon: Terminal, value: "1414", label: "LeetCode Rating" },
    { icon: Code, value: "1164", label: "Codeforces" },
    { icon: Award, value: "Top 10%", label: "Hackathon Rank" },
];

export const SKILLS = [
    { category: "Languages", items: ['JavaScript', 'TypeScript', 'Python', 'NUMPY', 'PANDAS', 'SQL'] },
    { category: "Frontend", items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: "Backend", items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MongoDB'] },
    { category: "Analytics", items: ['Google Sheets', 'tableau', 'Jupyter Notebook ', 'Matplotlib', 'seaborn'] }
];  
    
export const PROJECTS = [
    {
        title: "FleetOS",
        date: "2026",
        tags: ["React", "SaaS", "Node.js", "Tailwind CSS", "MySQL", "Prisma", "Oauth"], /* Renamed from tags to match component prop */
        desc: "A complete platform for vehicle management system from route scheduling to vechile and Employee management.",
        points: [ /* Added points to match component structure, using desc as base */
            "Providing a sytem for Vechile tracking, maintenance, fuel logs, Employee management.",
            " Implemented Oauth authentication using Oauth2.0 for secure Login."
        ],
        links: { demo: "https://fleet-os-2qut.vercel.app/", github: "https://github.com/portneon/FLEET.OS" }
    },

    {
        title: "NorthStars",
        date: "2025",
        tags: ["React", "Gamification", "Node.js"], /* Renamed from tags to match component prop */
        desc: "A gamified learning platform reducing student churn by 40% through interactive quizzes and real-time leaderboards.",
        points: [ /* Added points to match component structure, using desc as base */
            "Reduced student churn by 40% through interactive quizzes.",
            " implemented real-time leaderboards."
        ],
        links: { demo: "https://north-sta-rs.vercel.app/", github: "https://github.com/portneon/NorthStars" }
    },
    {
        title: "StackMate",
        date: "2025",
        tags: ["VS Code Ext", "TypeScript", "API"],
        desc: "Developer productivity tool integrating StackOverflow directly into the IDE context, saving average search time by 30%.",
        points: [
            "Integrates StackOverflow directly into the IDE context.",
            "Saves average search time by 30%."
        ],
        links: { demo: "https://marketplace.visualstudio.com/items?itemName=sakina.stackmate", github: "https://github.com/nst-sdc/StackMate" }
    },
    {
        title: "The Art of Farming",
        date: "2025",
        tags: ["React", "UI/UX", "Saas", "Rest API"],
        desc: "A SaaS platform for farmers to manage their crops and livestock. and small gardens",
        points: [
            "create graden manage you garden digitally and get notifications for your garden.",
            "Track your plant growth from your computer"
        ],
        links: { demo: "https://the-art-of-farming.vercel.app/", github: "https://github.com/portneon/art-of-farming" }
    }
];
