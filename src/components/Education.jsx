import React from 'react';

const entries = [
    {
        degree: "B.Tech — Artificial Intelligence & Machine Learning",
        school: "Newton School of Technology (ADYPU)",
        year: "2024 — 2028",
        grade: "8.35 CGPA",
        highlight: true,
    },
    {
        degree: "Intermediate — Class XII (Science)",
        school: "A.B.S. Inter College",
        year: "2021 — 2024",
        grade: "78.4%",
        highlight: false,
    },
];

const Education = () => (
    <section id="education" className="bg-[var(--cream)] py-32 px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto">

            {/* Header */}
            <div className="mb-20">
                <p className="text-[9px] tracking-[0.4em] text-[var(--muted)] uppercase mb-4">Background</p>
                <h2 className="font-editorial font-light text-6xl md:text-8xl leading-none tracking-tight text-[var(--ink)]">
                    Education.
                </h2>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-[var(--rule)]">
                <div className="col-span-2 text-[9px] tracking-[0.3em] uppercase text-[var(--muted)]">Period</div>
                <div className="col-span-6 text-[9px] tracking-[0.3em] uppercase text-[var(--muted)]">Programme</div>
                <div className="col-span-3 text-[9px] tracking-[0.3em] uppercase text-[var(--muted)]">Institution</div>
                <div className="col-span-1 text-[9px] tracking-[0.3em] uppercase text-[var(--muted)] text-right">Grade</div>
            </div>

            {entries.map((e, i) => (
                <div
                    key={i}
                    className="group grid grid-cols-12 gap-4 py-8 border-b border-[var(--rule)] items-start hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-colors duration-300 px-0 hover:px-4 -mx-0 hover:-mx-4"
                >
                    <div className="col-span-2 font-mono text-xs text-[var(--muted)] group-hover:text-zinc-400 transition-colors pt-1">
                        {e.year}
                    </div>
                    <div className="col-span-6">
                        <span className={`font-editorial text-2xl md:text-3xl font-light leading-tight tracking-tight ${e.highlight ? 'italic' : ''}`}>
                            {e.degree}
                        </span>
                    </div>
                    <div className="col-span-3 text-xs font-light text-[var(--muted)] group-hover:text-zinc-400 transition-colors pt-1 leading-relaxed">
                        {e.school}
                    </div>
                    <div className="col-span-1 text-right">
                        <span className="font-mono text-xs font-medium">{e.grade}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Education;
