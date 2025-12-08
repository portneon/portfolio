import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Section from './Section';
import { PROJECTS } from '../data';

const FeaturedProjects = () => {
    return (
        <Section id="projects" title="Selected Works">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, i) => (
                    <div key={i} className="group bg-white rounded-2xl border border-slate-200 p-8 flex flex-col hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                                <span className="text-xs font-semibold text-indigo-500 bg-indigo-50 px-2 py-1 rounded mt-2 inline-block">
                                    {project.date}
                                </span>
                            </div>
                            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href={project.links.github} className="text-slate-400 hover:text-indigo-600"><Github size={20} /></a>
                                <a href={project.links.demo} className="text-slate-400 hover:text-indigo-600"><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-6 flex-grow text-sm">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono font-medium text-slate-400">#{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default FeaturedProjects;
