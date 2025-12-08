import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, date, tech, desc, points, links }) => (
    <div className="bg-dark-800 border border-dark-700 p-6 rounded-lg hover:border-accent-primary/50 transition-all hover:-translate-y-1 group">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">{title}</h3>
                <p className="text-sm text-slate-400 font-mono mt-1">{date}</p>
            </div>
            <div className="flex gap-3">
                {links.github && <a href={links.github} className="text-slate-400 hover:text-white"><Github size={20} /></a>}
                {links.demo && <a href={links.demo} className="text-slate-400 hover:text-white"><ExternalLink size={20} /></a>}
            </div>
        </div>
        <p className="text-slate-300 mb-4 text-sm leading-relaxed">{desc}</p>
        <ul className="space-y-2 mb-6">
            {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-accent-secondary mt-1">▹</span> {pt}
                </li>
            ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-auto">
            {tech.map(t => (
                <span key={t} className="px-3 py-1 bg-dark-900 text-accent-primary text-xs font-mono rounded-full border border-dark-700">
                    {t}
                </span>
            ))}
        </div>
    </div>
);

export default ProjectCard;
