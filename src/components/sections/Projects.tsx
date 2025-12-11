import { ExternalLink, Github } from 'lucide-react';
import { Section } from '../Section';
import { projects } from '../../data/projects';

export const Projects = () => {
    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 transform hover:-translate-y-1">
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-zinc-200 animate-pulse" /> {/* Placeholder while loading */}
                            {(project.links.demo || project.links.github) ? (
                                <a
                                    href={project.links.demo || project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full cursor-pointer"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="relative w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </a>
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            )}

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

                            {/* Floating Tags - Glassmorphism */}
                            <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 backdrop-blur-md bg-black/30 text-white border border-white/20 text-xs font-medium rounded-full shadow-lg">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                {(project.links.demo || project.links.github) ? (
                                    <a
                                        href={project.links.demo || project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-indigo-600 transition-colors"
                                    >
                                        {project.title}
                                    </a>
                                ) : (
                                    project.title
                                )}
                            </h3>
                            <p className="text-zinc-500 mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mt-auto flex gap-4 pt-4 border-t border-zinc-50">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-zinc-50 text-zinc-700 rounded-xl font-medium hover:bg-zinc-100 hover:text-zinc-900 transition-colors group/btn"
                                    >
                                        <Github size={18} className="group-hover/btn:scale-110 transition-transform" /> Code
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 group/btn"
                                    >
                                        <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" /> Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
