import React from 'react';

const Section = ({ id, title, children, className = "" }) => (
    <section id={id} className={`py-20 px-6 md:px-12 max-w-5xl mx-auto ${className}`}>
        <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{title}</h2>
            <div className="h-px bg-slate-200 flex-1 mt-2"></div>
        </div>
        {children}
    </section>
);

export default Section;
