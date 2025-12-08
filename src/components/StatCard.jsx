import React from 'react';

const StatCard = ({ icon: Icon, value, label }) => (
    <div className="bg-dark-800 p-4 rounded border border-dark-700 flex items-center gap-4">
        <div className="p-3 bg-dark-900 rounded text-accent-secondary">
            <Icon size={24} />
        </div>
        <div>
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">{label}</div>
        </div>
    </div>
);

export default StatCard;
