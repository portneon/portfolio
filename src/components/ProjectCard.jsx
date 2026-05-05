const ProjectCard = ({ title, desc, tech, links, index }) => (
    <div className="group py-16 border-b border-zinc-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-vogue">
        <div className="md:col-span-1 font-mono text-xs text-zinc-300">
            0{index + 1}
        </div>
        <div className="md:col-span-7">
            <h3 className="font-editorial text-4xl md:text-6xl mb-4 group-hover:italic transition-all duration-500 cursor-default">
                {title}
            </h3>
            <div className="flex flex-wrap gap-4">
                {tech.map(t => (
                    <span key={t} className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-400">{t}</span>
                ))}
            </div>
        </div>
        <div className="md:col-span-4 md:text-right">
            <p className="text-sm font-light leading-relaxed text-zinc-500 mb-6 italic">
                "{desc}"
            </p>
            <a href={links.demo} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-zinc-900 pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all">
                View Case Study
            </a>
        </div>
    </div>
);

export default ProjectCard;
