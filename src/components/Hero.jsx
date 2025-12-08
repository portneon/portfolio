import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { PROFILE, STATS } from '../data';

const Hero = () => {
    return (
        <header className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto pt-20">
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider border border-indigo-100">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Available for Internships
                </div>

                <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    Building <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
                        Digital Clarity.
                    </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
                    I'm <span className="font-semibold text-slate-800">{PROFILE.name}</span>, a {PROFILE.role}.
                    I bridge the gap between complex algorithms and intuitive user interfaces.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a href={`mailto:${PROFILE.email}`} className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20 flex items-center gap-2">
                        Get in Touch <ArrowRight size={18} />
                    </a>
                    <div className="flex gap-2">
                        {[
                            { icon: Github, link: PROFILE.github },
                            { icon: Linkedin, link: PROFILE.linkedin }
                        ].map(({ icon: Icon, link }, i) => (
                            <a key={i} href={link} target="_blank" rel="noreferrer" className="p-4 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all hover:-translate-y-1">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 border-t border-slate-200 pt-8">
                {STATS.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm text-indigo-600 border border-slate-100">
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Hero;
