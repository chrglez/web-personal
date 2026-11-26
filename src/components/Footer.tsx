import { Github, Mail } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const XIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

export const Footer = () => {
    const { t } = useLang();

    return (
        <footer className="bg-ulpgc-gray-dark text-ulpgc-gray-50 py-10 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="font-heading font-bold text-white text-sm">
                        Christian González Martel
                    </p>
                    <p className="text-xs text-ulpgc-gray-50 mt-0.5">
                        {t.footer.role} ·{' '}
                        <a
                            href="https://orcid.org/0000-0003-1081-0843"
                            target="_blank" rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            ORCID 0000-0003-1081-0843
                        </a>
                    </p>
                    <p className="text-xs text-ulpgc-gray-80 mt-1">
                        © {new Date().getFullYear()}. {t.footer.rights}
                    </p>
                </div>

                <div className="flex gap-4 items-center">
                    <a
                        href="mailto:christian.gonzalez@ulpgc.es"
                        title="Email"
                        className="text-ulpgc-gray-50 hover:text-white transition-colors"
                    >
                        <Mail size={18} />
                    </a>
                    <a
                        href="https://github.com/chrglez"
                        target="_blank" rel="noopener noreferrer"
                        title="GitHub"
                        className="text-ulpgc-gray-50 hover:text-white transition-colors"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://x.com/chrglez"
                        target="_blank" rel="noopener noreferrer"
                        title="Twitter / X"
                        className="text-ulpgc-gray-50 hover:text-white transition-colors"
                    >
                        <XIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
};
