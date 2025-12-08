import React from 'react';
import StatCard from './StatCard';
import { STATS } from '../data';

const Stats = () => {
    return (
        <div className="bg-dark-800/50 border-y border-dark-700">
            <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {STATS.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </div>
    );
};

export default Stats;
