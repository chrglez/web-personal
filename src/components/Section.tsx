import React from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
            {title && (
                <h2 className="text-3xl font-bold mb-12 text-zinc-900 tracking-tight relative inline-block">
                    {title}
                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-600 rounded-full"></span>
                </h2>
            )}
            {children}
        </section>
    );
};
