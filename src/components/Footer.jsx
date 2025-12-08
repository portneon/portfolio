import React from 'react';
import { PROFILE } from '../data';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's build something together.</h2>
            <a href={`mailto:${PROFILE.email}`} className="text-indigo-600 text-lg hover:underline underline-offset-4 decoration-2">
                {PROFILE.email}
            </a>
            <p className="text-slate-400 text-sm mt-12">Designed & Built by Shashwat Sharma</p>
        </footer>
    );
};

export default Footer;
