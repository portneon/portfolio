import React from 'react';

const Navbar = () => (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-slate-200 px-6 py-3 rounded-full shadow-lg shadow-slate-200/50 flex items-center gap-6">
        <span className="font-bold text-slate-800 text-sm hidden md:block">SS.</span>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Work</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Stack</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
    </nav>
);

export default Navbar;
