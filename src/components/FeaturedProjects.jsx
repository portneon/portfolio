import React from 'react';
import { Github } from 'lucide-react';
import { PROJECTS } from '../data';

const FeaturedProjects = () => (
    <section id="work" className="bg-[var(--cream)] py-32 px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto">

            {/* Section Header */}
            <div className="flex items-end justify-between mb-20">
                <div>
                    <p className="text-[9px] tracking-[0.4em] text-[var(--muted)] uppercase mb-4">Selected Works</p>
                    <h2 className="font-editorial font-light text-6xl md:text-8xl leading-none tracking-tight text-[var(--ink)]">
                        Portfolio<span className="italic"> Index.</span>
                    </h2>
                </div>
                <p className="hidden md:block text-xs text-[var(--muted)] font-light max-w-[180px] text-right leading-relaxed">
                    A complete archive of projects from 2024 to present.
                </p>
            </div>

            {/* Column Headers */}
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-[var(--rule)]">
                <div className="col-span-1 text-[9px] tracking-[0.3em] uppercase text-[var(--muted)]">No.</div>
                <div className="col-span-5 text-[9px] tracking-[0.3em] uppercase text-[var(--muted)]">Project</div>
                <div className="col-span-3 text-[9px] tracking-[0.3em] uppercase text-[var(--muted)]">Category</div>
                <div className="col-span-2 text-[9px] tracking-[0.3em] uppercase text-[var(--muted)]">Year</div>
                <div className="col-span-1 text-[9px] tracking-[0.3em] uppercase text-[var(--muted)] text-right">Links</div>
            </div>

            {/* Project Rows */}
            {PROJECTS.map((project, i) => (
                <div
                    key={i}
                    onClick={() => {
                        const url = project.links?.demo && project.links.demo !== '#'
                            ? project.links.demo
                            : project.links?.github;
                        if (url) window.open(url, '_blank', 'noreferrer');
                    }}
                    className="project-row group grid grid-cols-12 gap-4 py-5 px-5 items-center cursor-pointer"
                >
                    {/* Index */}
                    <div className="col-span-1 font-mono text-[10px] text-[var(--muted)] group-hover:text-[var(--cream)] transition-colors">
                        {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Title + desc */}
                    <div className="col-span-5">
                        <span className="font-editorial text-2xl md:text-3xl font-light tracking-tight group-hover:italic transition-all duration-300">
                            {project.title || project.name}
                        </span>
                        <p className="text-xs font-light text-[var(--muted)] group-hover:text-[var(--cream)] mt-0.5 transition-colors truncate max-w-md">
                            {project.desc}
                        </p>
                    </div>

                    {/* Category */}
                    <div className="col-span-3">
                        <span className="text-[9px] tracking-[0.25em] uppercase font-medium text-[var(--muted)] group-hover:text-[var(--cream)] transition-colors">
                            {project.tags ? project.tags.join(' / ') : project.cat || '—'}
                        </span>
                    </div>

                    {/* Year */}
                    <div className="col-span-2 font-mono text-xs text-[var(--muted)] group-hover:text-[var(--cream)] transition-colors">
                        {project.date || project.year}
                    </div>

                    {/* Icons: GitHub + Live */}
                    <div className="col-span-1 flex items-center justify-end gap-3">
                        {/* GitHub icon — stops row click, opens github */}
                        {project.links?.github && project.links.github !== '#' && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[var(--cream)] hover:scale-110"
                                title="GitHub"
                            >
                                <Github size={14} strokeWidth={1.5} />
                            </a>
                        )}
                        {/* Arrow — live demo */}
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-[var(--cream)]">
                            ↗
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default FeaturedProjects;
