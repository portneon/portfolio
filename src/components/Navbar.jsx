import React from 'react';

const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 mix-blend-multiply">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-6 flex justify-between items-center">
            <a href="/" className="font-editorial text-2xl tracking-widest font-light text-[var(--ink)] link-hover">
                SS.
            </a>
            <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.35em] uppercase font-medium text-[var(--muted)]">
                <a href="#work" className="link-hover hover:text-[var(--ink)] transition-colors">Portfolio</a>
                <a href="#skills" className="link-hover hover:text-[var(--ink)] transition-colors">Arsenal</a>
                <a href="#education" className="link-hover hover:text-[var(--ink)] transition-colors">About</a>
                <a href="#contact" className="link-hover hover:text-[var(--ink)] transition-colors">Contact</a>
            </div>
            <div className="text-[10px] tracking-[0.25em] text-[var(--muted)] uppercase font-medium">
                ©&nbsp;2025
            </div>
        </div>
        <div className="h-px bg-[var(--rule)] mx-8 md:mx-16"></div>
    </nav>
);

export default Navbar;