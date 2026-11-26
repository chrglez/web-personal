import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export const Navbar = () => {
    const { t, lang, toggle } = useLang();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.publications, href: '#publications' },
        { label: t.nav.teaching, href: '#teaching' },
        { label: t.nav.contact, href: '#contact' },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-ulpgc-gray-10' : 'bg-transparent'}`}>
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="font-heading font-bold text-ulpgc-gray-dark tracking-tight">
                    Christian González
                    <span className="ml-2 text-xs font-normal text-ulpgc-blue border border-ulpgc-blue-10 bg-ulpgc-blue-10 px-2 py-0.5 rounded-full">
                        ULPGC
                    </span>
                </a>

                <div className="flex items-center gap-6">
                    {/* Desktop nav */}
                    <div className="hidden md:flex gap-8">
                        {navItems.map(item => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-ulpgc-gray hover:text-ulpgc-blue transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Language toggle */}
                    <button
                        onClick={toggle}
                        className="text-xs font-bold tracking-widest text-ulpgc-gray border border-ulpgc-gray-20 rounded-full px-2.5 py-1 hover:border-ulpgc-blue hover:text-ulpgc-blue transition-colors"
                        title="Switch language"
                    >
                        {lang === 'en' ? 'ES' : 'EN'}
                    </button>

                    {/* Mobile toggle */}
                    <button className="md:hidden text-ulpgc-gray-dark" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-ulpgc-gray-10 p-6 flex flex-col gap-6 shadow-xl">
                    {navItems.map(item => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-base font-medium text-ulpgc-gray-dark hover:text-ulpgc-blue transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
