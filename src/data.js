import {
    Github, Linkedin, Mail, Code, Terminal,
    ExternalLink, Award, Cpu, Globe, Layout
} from 'lucide-react';

export const PROFILE = {
    name: "Shashwat Sharma",
    role: "Full Stack Engineer",
    sub: "Building scalable systems & interactive web experiences.",
    email: "shashwat.sharma@adypu.edu.in",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    leetcode: "https://leetcode.com/yourusername"
};

export const STATS = [
    { icon: Terminal, value: "1414", label: "LeetCode Rating" },
    { icon: Code, value: "1164", label: "Codeforces" },
    { icon: Award, value: "Top 10%", label: "Hackathon Rank" },
];

export const SKILLS = [
    { category: "Languages", items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'] },
    { category: "Frontend", items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: "Backend", items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MongoDB'] },
];

export const PROJECTS = [
    {
        title: "NorthStars",
        date: "2025",
        tags: ["React", "Gamification", "Node.js"], /* Renamed from tags to match component prop */
        desc: "A gamified learning platform reducing student churn by 40% through interactive quizzes and real-time leaderboards.",
        points: [ /* Added points to match component structure, using desc as base */
            "Reduced student churn by 40% through interactive quizzes.",
            " implemented real-time leaderboards."
        ],
        links: { demo: "#", github: "#" }
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
        links: { demo: "#", github: "#" }
    },
    {
        title: "The Art of Farming",
        date: "2025",
        tags: ["React", "UI/UX", "Rest API"],
        desc: "High-performance botanical explorer featuring infinite scroll, deep filtering, and a custom design system.",
        points: [
            "Features infinite scroll and deep filtering.",
            "Custom design system for high-performance botanical exploration."
        ],
        links: { demo: "#", github: "#" }
    }
];
