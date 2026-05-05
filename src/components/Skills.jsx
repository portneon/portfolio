import React from 'react';
import { SKILLS } from '../data';

const Skills = () => (
    <section id="skills" className="bg-[var(--ink)] text-[var(--cream)] py-32 px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto">

            {/* Section Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-24">
                <div className="md:col-span-6">
                    <p className="text-[9px] tracking-[0.4em] text-zinc-500 uppercase mb-6">Technical Arsenal</p>
                    <h2 className="font-editorial font-light text-6xl md:text-8xl leading-none tracking-tight">
                        The Stack<span className="italic text-zinc-500"> I Build</span>
                        <br/>With.
                    </h2>
                </div>
                <div className="md:col-span-4 md:col-start-9 flex items-end">
                    <p className="text-sm font-light leading-relaxed text-zinc-400 max-w-xs">
                        Combining modern frameworks with engineering precision to build products that endure.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-800 mb-16"></div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {SKILLS.map((group, idx) => (
                    <div
                        key={idx}
                        className="py-10 pr-10 border-b md:border-b-0 md:border-r border-zinc-800 last:border-r-0 last:border-b-0"
                    >
                        <span className="block text-[9px] tracking-[0.4em] uppercase text-zinc-500 mb-8 font-medium">
                            0{idx + 1} — {group.category}
                        </span>
                        <div className="space-y-3">
                            {group.items.map(skill => (
                                <div
                                    key={skill}
                                    className="flex items-center gap-3 group cursor-default"
                                >
                                    <span className="w-5 h-px bg-zinc-700 group-hover:w-10 group-hover:bg-[var(--cream)] transition-all duration-300"></span>
                                    <span className="font-editorial text-2xl font-light group-hover:italic group-hover:text-zinc-200 transition-all duration-300">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;