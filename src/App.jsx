import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight, Copy, Github, Linkedin,
  Twitter, Mail, MoveRight
} from 'lucide-react';

// --- ASSETS & DATA ---
const PORTFOLIO = {
  name: "SHASHWAT SHARMA",
  role: "CREATIVE DEVELOPER",
  location: "PUNE, IND",
  email: "shashwat.sharma@adypu.edu.in",
  bio: "I craft digital experiences that blend technical precision with visual soul. Currently scaling systems at NorthStars.",
  stack: ["REACT", "NEXT.JS", "NODE.JS", "THREE.JS", "TYPESCRIPT", "SQL", "AWS"]
};

const PROJECTS = [
  {
    id: "01",
    name: "NorthStars",
    cat: "EDTECH / GAMIFICATION",
    desc: "Gamified learning platform reducing churn by 40%.",
    year: "2025"
  },
  {
    id: "02",
    name: "StackMate",
    cat: "DEV TOOLS / VS CODE",
    desc: "Productivity extension with 500+ active users.",
    year: "2025"
  },
  {
    id: "03",
    name: "Lazy Farms",
    cat: "AGRITECH / SAAS",
    desc: "Supply chain management for organic distribution.",
    year: "2024"
  }
];

// --- COMPONENTS ---

// 1. Noise Texture (The "Anti-AI" Secret Sauce)
const Noise = () => (
  <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// 2. Infinite Marquee
const Marquee = () => (
  <div className="relative flex overflow-x-hidden bg-zinc-900 text-white py-3 border-y border-zinc-800">
    <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-sm font-mono font-bold tracking-widest flex items-center gap-8">
          OPEN TO WORK <span className="text-zinc-600">//</span>
          FULL STACK <span className="text-zinc-600">//</span>
          CREATIVE DEV <span className="text-zinc-600">//</span>
        </span>
      ))}
    </div>
  </div>
);

// 3. Project Row with Hover Reveal
const ProjectRow = ({ p }) => (
  <div className="group border-t border-zinc-300 py-10 px-4 md:px-0 relative transition-colors hover:bg-zinc-50 cursor-pointer">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-4 md:gap-0 z-10 relative">
      <div className="md:w-1/4">
        <span className="font-mono text-xs text-zinc-400">({p.id})</span>
      </div>
      <div className="md:w-1/2">
        <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-900 group-hover:translate-x-4 transition-transform duration-300">
          {p.name}
        </h3>
        <p className="mt-2 text-zinc-500 font-mono text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          {p.desc}
        </p>
      </div>
      <div className="md:w-1/4 text-right">
        <span className="text-xs font-bold tracking-widest uppercase border border-zinc-900 px-2 py-1 rounded-full group-hover:bg-zinc-900 group-hover:text-white transition-colors">
          {p.cat}
        </span>
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#e6e6e6] min-h-screen text-zinc-900 font-sans selection:bg-orange-500 selection:text-white relative">
      <Noise />

      {/* NAV */}
      <nav className="flex justify-between items-center p-6 md:p-10 max-w-7xl mx-auto uppercase text-xs font-bold tracking-widest z-40 relative">
        <span className="font-display text-lg tracking-normal">S.Sharma©25</span>
        <div className="flex gap-6">
          <a href="#work" className="hover:line-through decoration-orange-500">Work</a>
          <a href="#about" className="hover:line-through decoration-orange-500">About</a>
          <a href={`mailto:${PORTFOLIO.email}`} className="hover:line-through decoration-orange-500">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="px-6 md:px-10 pt-20 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <h1 className="text-[13vw] leading-[0.8] font-display font-bold tracking-tighter mix-blend-difference text-zinc-900">
              FULL<br />STACK
            </h1>
            <div className="flex items-center gap-4 mt-4 ml-2">
              <div className="h-[2px] w-24 bg-orange-500"></div>
              <h1 className="text-[13vw] leading-[0.8] font-display font-bold tracking-tighter text-zinc-900">
                DEV.
              </h1>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-end pb-4">
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xs">
              {PORTFOLIO.bio}
            </p>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO.stack.map(tech => (
                <span key={tech} className="px-3 py-1 border border-zinc-400 rounded-full text-xs font-mono uppercase hover:bg-zinc-900 hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <Marquee />

      {/* WORK SECTION */}
      <section id="work" className="py-20 bg-white">
        <div className="px-6 md:px-10 mb-10 flex items-end justify-between max-w-6xl mx-auto">
          <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Selected Works (2024-25)</h2>
          <MoveRight className="text-zinc-400" />
        </div>

        <div className="border-b border-zinc-300">
          {PROJECTS.map((p) => (
            <ProjectRow key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="bg-zinc-900 text-[#e6e6e6] px-6 md:px-10 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-bold mb-8">LET'S<br />TALK.</h2>
            <div className="flex gap-4">
              <a href="#" className="p-4 rounded-full border border-zinc-700 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all"><Github /></a>
              <a href="#" className="p-4 rounded-full border border-zinc-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"><Linkedin /></a>
              <a href="#" className="p-4 rounded-full border border-zinc-700 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all"><Twitter /></a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div
              onClick={copyEmail}
              className="group cursor-pointer border-b border-zinc-700 pb-8 hover:border-orange-500 transition-colors"
            >
              <p className="text-zinc-500 text-sm font-mono mb-2">DROP A MAIL</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl md:text-4xl font-light">{PORTFOLIO.email}</span>
                {copied ? <span className="text-green-500 font-mono text-sm">COPIED!</span> : <Copy className="group-hover:text-orange-500 transition-colors" />}
              </div>
            </div>

            <div className="flex justify-between items-end mt-12 text-zinc-500 text-xs font-mono uppercase tracking-widest">
              <span>Local time: {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
              <span>Pune, India</span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}