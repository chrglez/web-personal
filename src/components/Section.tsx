import React from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-12 md:py-20 px-4 md:px-6 max-w-5xl mx-auto ${className}`}>
            {title && (
                <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 text-ulpgc-gray-dark tracking-tight relative inline-block">
                    {title}
                    <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-ulpgc-blue rounded-full" />
                </h2>
            )}
            {children}
        </section>
    );
};
