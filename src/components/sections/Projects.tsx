import { ExternalLink, Github } from 'lucide-react';
import { Section } from '../Section';
import { projects } from '../../data/projects';
import { useLang } from '../../context/LanguageContext';

export const Projects = () => {
    const { t } = useLang();

    return (
        <Section id="projects" title={t.sections.projects}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {projects.map((project) => {
                    const desc = t.projects.find(p => p.id === project.id)?.description ?? project.description;
                    return (
                        <div
                            key={project.id}
                            className="group flex flex-col bg-white rounded-xl overflow-hidden border border-ulpgc-gray-10 hover:border-ulpgc-blue-10 hover:shadow-md transition-all duration-200"
                        >
                            {/* Image */}
                            <div className="relative h-44 overflow-hidden bg-ulpgc-gray-5">
                                <div className="absolute inset-0 bg-ulpgc-gray-10 animate-pulse" />
                                {(project.links.demo || project.links.github) ? (
                                    <a
                                        href={project.links.demo || project.links.github}
                                        target="_blank" rel="noopener noreferrer"
                                        className="block w-full h-full"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </a>
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}

                                {/* Tags overlay */}
                                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 bg-ulpgc-gray-dark/70 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 md:p-5 flex flex-col flex-grow">
                                <h3 className="font-bold text-ulpgc-gray-dark text-base mb-2 group-hover:text-ulpgc-blue transition-colors leading-snug">
                                    {(project.links.demo || project.links.github) ? (
                                        <a
                                            href={project.links.demo || project.links.github}
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            {project.title}
                                        </a>
                                    ) : (
                                        project.title
                                    )}
                                </h3>
                                <p className="text-ulpgc-gray text-sm leading-relaxed flex-grow">
                                    {desc}
                                </p>

                                <div className="mt-4 pt-4 border-t border-ulpgc-gray-10 flex gap-3">
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-medium text-ulpgc-gray hover:text-ulpgc-blue transition-colors"
                                        >
                                            <Github size={14} /> Code
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-medium text-ulpgc-blue hover:text-ulpgc-blue-dark transition-colors"
                                        >
                                            <ExternalLink size={14} /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};
