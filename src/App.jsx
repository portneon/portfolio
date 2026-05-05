import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

/* ─── Noise Grain Overlay ─── */
const Grain = () => (
    <div className="noise-overlay" aria-hidden="true" />
);

/* ─── Editorial Ticker ─── */
const Ticker = () => {
    const items = ['Full Stack Engineer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Open to Work', 'Pune, India'];
    const repeated = [...items, ...items];
    return (
        <div className="bg-[var(--ink)] text-[var(--cream)] py-3 overflow-hidden border-y border-zinc-800">
            <div className="flex animate-marquee whitespace-nowrap">
                {repeated.map((item, i) => (
                    <span key={i} className="text-[9px] tracking-[0.4em] uppercase mx-10 font-medium">
                        {item} <span className="text-zinc-600 mx-4">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default function App() {
    return (
        <div className="bg-[var(--cream)] min-h-screen text-[var(--ink)]">
            <Grain />
            <Navbar />

            <main>
                <Hero />
                <Ticker />
                <FeaturedProjects />
                <Skills />
                <Education />
            </main>

            <Footer />
        </div>
    );
}