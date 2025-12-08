import React from 'react';
import Section from './Section';

const Education = () => {
    return (
        <Section title="Education">
            <div className="space-y-8 max-w-3xl">
                <div className="flex flex-col md:flex-row gap-4 md:items-start border-l-2 border-dark-700 pl-6 relative">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-primary border-4 border-dark-900"></span>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">Bachelor of Technology (AI & ML)</h3>
                        <p className="text-accent-secondary">Newton School of Technology (ADYPU)</p>
                    </div>
                    <div className="text-right">
                        <span className="font-mono text-sm text-slate-400">2024 - 2028</span>
                        <p className="text-accent-primary font-bold text-sm mt-1">CGPA: 8.35</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-start border-l-2 border-dark-700 pl-6 relative">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-700 border-4 border-dark-900"></span>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-200">Intermediate (Class XII)</h3>
                        <p className="text-slate-400">A.B.S. Inter College</p>
                    </div>
                    <div className="text-right">
                        <span className="font-mono text-sm text-slate-400">2021 - 2024</span>
                        <p className="text-sm mt-1">78.4%</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;
