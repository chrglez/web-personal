import { ArrowRight, Mail, FileText, Github } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-20 px-6">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-in slide-in-from-left duration-700">
                    <div className="space-y-4">
                        <p className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Associate Professor at ULPGC</p>
                        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-tight">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Christian González</span>.
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-lg leading-relaxed">
                            My research focuses on applying machine learning techniques to Financial Economics, Computational Economics, and data-driven applications in tourism and health economics. I have been a visiting researcher at the Barcelona Supercomputing Center (BSC-CNS) and Universitat de Barcelona. I teach in the Economics, Business Administration, and Data Science programs at the University of Las Palmas de Gran Canaria (ULPGC). I am also passionate about R and reproducible data analysis.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <a href="#projects" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-200">
                            Research & Projects <ArrowRight size={20} />
                        </a>
                        <button
                            onClick={() => window.location.href = 'mailto:christian.gonzalez' + '@' + 'ulpgc.es'}
                            className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-full font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
                            Contact Me <Mail size={20} />
                        </button>
                    </div>

                    <div className="flex gap-8 pt-8 border-t border-zinc-100">
                        <div>
                            <span className="block text-3xl font-bold text-zinc-900">16+</span>
                            <span className="text-sm text-zinc-500">Scopus Pubs</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-zinc-900">12+</span>
                            <span className="text-sm text-zinc-500">Projects</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-bold text-zinc-900">+25</span>
                            <span className="text-sm text-zinc-500">Years Exp.</span>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <a href="https://github.com/chrglez" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-indigo-600 transition-colors"><Github size={24} /></a>
                        <a href="https://x.com/chrglez" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-indigo-600 transition-colors">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                        </a>
                        <a href="https://scholar.google.es/citations?hl=es&user=aCeZn5kAAAAJ" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-indigo-600 transition-colors"><FileText size={24} /></a>
                        <a href="https://orcid.org/0000-0003-1081-0843" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-indigo-600 transition-colors"><span className="font-bold text-lg">iD</span></a>
                    </div>
                </div>

                <div className="relative mt-12 lg:mt-0 animate-in fade-in duration-1000 delay-300 flex justify-center">
                    {/* Abstract decorative blobs - centered around the image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="relative">
                        <img
                            src="/profile.jpg"
                            alt="Christian González"
                            className="relative z-10 w-80 h-80 object-cover object-center rounded-full shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 -right-12 z-20 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-xs animate-bounce-slow">
                            <p className="text-sm font-medium text-zinc-500">Focus Area</p>
                            <p className="text-lg font-bold text-zinc-900">Computational Economics</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
