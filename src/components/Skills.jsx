import React from 'react';
import Section from './Section';
import { SKILLS } from '../data';

const Skills = () => {
    return (
        <Section id="skills" title="Technical Arsenal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {SKILLS.map((skillGroup) => (
                    <div key={skillGroup.category} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-slate-800 mb-4">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-md border border-slate-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
