import React, { useState } from 'react';
import { PROFILE } from '../data';

const Footer = () => {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(PROFILE.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer id="contact" className="bg-[var(--ink)] text-[var(--cream)] py-32 px-8 md:px-16">
            <div className="max-w-[1600px] mx-auto">

                {/* Big CTA */}
                <div className="border-b border-zinc-800 pb-20 mb-20">
                    <p className="text-[9px] tracking-[0.4em] text-zinc-500 uppercase mb-8">Let's Collaborate</p>
                    <h2 className="font-editorial font-light text-[10vw] leading-none tracking-tight mb-12">
                        Let's&nbsp;Talk.
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <button
                            onClick={copy}
                            className="group relative flex items-center gap-4 py-4 px-10 border border-zinc-600 hover:border-[var(--cream)] transition-colors overflow-hidden"
                        >
                            <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase font-medium group-hover:text-[var(--ink)] transition-colors duration-500">
                                {copied ? 'Copied!' : PROFILE.email}
                            </span>
                            <div className="absolute inset-0 bg-[var(--cream)] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                        </button>

                        <div className="flex gap-6">
                            <a href={PROFILE.github} target="_blank" rel="noreferrer"
                                className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 link-hover hover:text-[var(--cream)] transition-colors">
                                GitHub ↗
                            </a>
                            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"
                                className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 link-hover hover:text-[var(--cream)] transition-colors">
                                LinkedIn ↗
                            </a>
                            <a href={PROFILE.leetcode} target="_blank" rel="noreferrer"
                                className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 link-hover hover:text-[var(--cream)] transition-colors">
                                LeetCode ↗
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <span className="font-editorial text-3xl font-light tracking-widest">SS.</span>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-[9px] tracking-[0.3em] uppercase text-zinc-600">
                        <span>Shashwat Sharma</span>
                        <span>Pune, India</span>
                        <span>
                            {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}
                        </span>
                    </div>
                    <p className="text-[9px] tracking-[0.2em] text-zinc-600 uppercase">
                        Designed & Built with precision ©&nbsp;{new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
