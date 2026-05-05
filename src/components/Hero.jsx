import React from 'react';
import { PROFILE, STATS } from '../data';

const Hero = () => (
    <header className="min-h-screen bg-[var(--cream)] flex flex-col justify-end pt-32 pb-20 px-8 md:px-16 overflow-hidden relative">

        {/* Top meta row */}
        <div className="absolute top-28 left-8 md:left-16 right-8 md:right-16 flex justify-between items-center text-[9px] tracking-[0.35em] text-[var(--muted)] uppercase font-medium animate-fade-in">
        </div>

        <div className="max-w-[1600px] mx-auto w-full">
            {/* MAIN HEADLINE */}
            <div className="overflow-hidden mb-2">
                <h1 className="font-editorial font-light text-[16vw] md:text-[13vw] leading-[0.82] tracking-[-0.02em] text-[var(--ink)] animate-fade-up">
                    SHASHWAT
                </h1>
            </div>
            <div className="overflow-hidden flex items-end gap-6 md:gap-12">
                <h1 className="font-editorial font-light text-[16vw] md:text-[13vw] leading-[0.82] tracking-[-0.02em] text-[var(--ink)] animate-fade-up-delay italic">
                    SHARMA
                </h1>
            </div>


            <div className="h-px bg-[var(--rule)] mt-14 mb-10 animate-fade-in"></div>


            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end animate-fade-up-delay-2">
                <div className="md:col-span-5">
                    <p className="text-sm font-light leading-relaxed text-[var(--muted)] max-w-sm">
                        I'm <span className="text-[var(--ink)] font-medium">{PROFILE.name}</span>. I bridge complex
                        engineering with visual clarity — building systems that feel as precise as they look.
                    </p>
                </div>

                <div className="md:col-span-4 md:col-start-7 flex gap-12">
                    {STATS.map((stat, i) => (
                        <div key={i}>
                            <div className="font-editorial text-3xl font-light text-[var(--ink)]">{stat.value}</div>
                            <div className="text-[9px] tracking-[0.3em] uppercase text-[var(--muted)] mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="md:col-span-1 md:col-start-12 flex justify-end">
                    <a
                        href={`mailto:${PROFILE.email}`}
                        className="group relative py-3 px-8 border border-[var(--ink)] overflow-hidden block"
                    >
                        <span className="relative z-10 text-[9px] tracking-[0.3em] uppercase font-medium group-hover:text-[var(--cream)] transition-colors duration-500">
                            Hire
                        </span>
                        <div className="absolute inset-0 bg-[var(--ink)] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    </a>
                </div>
            </div>
        </div>
    </header>
);

export default Hero;