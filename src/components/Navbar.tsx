import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Teaching', href: '#teaching' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold text-zinc-900 tracking-tighter">
                    C<span className="text-indigo-600">.</span> González-Martel
                </a>

                {/* Desktop */}
                <div className="hidden md:flex gap-8">
                    {navItems.map(item => (
                        <a key={item.label} href={item.href} className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-zinc-800" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-zinc-100 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-2">
                    {navItems.map(item => (
                        <a key={item.label} href={item.href} className="text-lg font-medium text-zinc-800" onClick={() => setIsOpen(false)}>
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
