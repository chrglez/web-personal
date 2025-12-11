import { Github, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-zinc-300 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="font-bold text-white text-lg">Christian González-Martel</p>
                    <p className="text-sm text-zinc-500 mt-1">© {new Date().getFullYear()}. All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/chrglez" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub"><Github size={20} /></a>
                    <a href="https://x.com/chrglez" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Twitter/X">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                    </a>
                    <a href="https://scholar.google.es/citations?hl=es&user=aCeZn5kAAAAJ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="Google Scholar"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};
