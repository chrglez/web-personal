import { Mail, Github, FileText } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';
import { useLang } from '../../context/LanguageContext';

const XIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

export const Hero = () => {
    const { t } = useLang();
    const h = t.hero;

    return (
        <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 bg-white border-b border-ulpgc-gray-10">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

                    {/* Left: photo + identity + social */}
                    <div className="md:w-52 flex flex-col items-center text-center shrink-0">
                        <div
                            role="img"
                            aria-label="Christian González Martel"
                            className="w-32 h-32 md:w-44 md:h-44 rounded-full shadow-md ring-4 ring-ulpgc-blue-10"
                            style={{
                                backgroundImage: `url(${profileImg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: '30% 40%',
                            }}
                        />
                        <h1 className="mt-4 md:mt-5 text-lg md:text-xl font-bold text-ulpgc-gray-dark leading-snug">
                            Christian González Martel
                        </h1>
                        <p className="text-ulpgc-blue text-sm font-semibold mt-1">
                            {h.role}
                        </p>
                        <p className="text-ulpgc-gray text-xs mt-0.5 leading-relaxed">
                            {h.dept[0]}<br />
                            {h.dept[1]}<br />
                            {h.dept[2]}
                        </p>

                        {/* Social icon buttons */}
                        <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-5">
                            <a
                                href="mailto:christian.gonzalez@ulpgc.es"
                                title="Email"
                                className="p-2 rounded-full bg-ulpgc-blue-10 text-ulpgc-blue hover:bg-ulpgc-blue hover:text-white transition-colors"
                            >
                                <Mail size={16} />
                            </a>
                            <a
                                href="https://scholar.google.es/citations?hl=es&user=aCeZn5kAAAAJ"
                                target="_blank" rel="noopener noreferrer"
                                title="Google Scholar"
                                className="p-2 rounded-full bg-ulpgc-blue-10 text-ulpgc-blue hover:bg-ulpgc-blue hover:text-white transition-colors"
                            >
                                <FileText size={16} />
                            </a>
                            <a
                                href="https://github.com/chrglez"
                                target="_blank" rel="noopener noreferrer"
                                title="GitHub"
                                className="p-2 rounded-full bg-ulpgc-blue-10 text-ulpgc-blue hover:bg-ulpgc-blue hover:text-white transition-colors"
                            >
                                <Github size={16} />
                            </a>
                            <a
                                href="https://x.com/chrglez"
                                target="_blank" rel="noopener noreferrer"
                                title="Twitter / X"
                                className="p-2 rounded-full bg-ulpgc-blue-10 text-ulpgc-blue hover:bg-ulpgc-blue hover:text-white transition-colors"
                            >
                                <XIcon />
                            </a>
                            <a
                                href="https://orcid.org/0000-0003-1081-0843"
                                target="_blank" rel="noopener noreferrer"
                                title="ORCID"
                                className="px-2 py-1.5 rounded-full bg-ulpgc-blue-10 text-ulpgc-blue hover:bg-ulpgc-blue hover:text-white transition-colors text-xs font-bold leading-none flex items-center"
                            >
                                iD
                            </a>
                        </div>
                    </div>

                    {/* Right: bio + interests + education */}
                    <div className="flex-1 pt-1">
                        <p className="text-ulpgc-gray leading-relaxed text-base">
                            {h.bio}
                        </p>

                        <div className="mt-8 grid sm:grid-cols-2 gap-8">
                            {/* Interests */}
                            <div>
                                <h3 className="font-bold text-ulpgc-gray-dark mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <span className="w-1 h-4 bg-ulpgc-blue rounded-full inline-block" />
                                    {h.interests_label}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {h.interests.map(item => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 bg-ulpgc-blue-10 text-ulpgc-blue text-xs font-medium rounded-full"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Education */}
                            <div>
                                <h3 className="font-bold text-ulpgc-gray-dark mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <span className="w-1 h-4 bg-ulpgc-orange rounded-full inline-block" />
                                    {h.education_label}
                                </h3>
                                <ul className="space-y-2">
                                    {h.education.map((item, i) => (
                                        <li key={i} className="text-sm">
                                            <span className="font-semibold text-ulpgc-gray-dark">
                                                {item.degree}
                                            </span>
                                            <br />
                                            <span className="text-ulpgc-gray">{item.institution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
