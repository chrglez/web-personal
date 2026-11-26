import { FileText, ExternalLink } from 'lucide-react';
import { Section } from '../Section';
import { publications } from '../../data/publications';
import { useLang } from '../../context/LanguageContext';

export const Publications = () => {
    const { t } = useLang();

    return (
        <Section id="publications" title={t.sections.publications} className="bg-ulpgc-gray-5">
            <div className="space-y-2 md:space-y-3 max-w-3xl">
                {publications.map((pub) => (
                    <div
                        key={pub.id}
                        className="bg-white p-4 md:p-5 rounded-lg border border-ulpgc-gray-10 hover:border-ulpgc-blue-10 hover:shadow-sm transition-all flex gap-3 md:gap-4 items-start"
                    >
                        {/* Year badge */}
                        <div className="hidden sm:flex flex-col items-center justify-center bg-ulpgc-blue-10 text-ulpgc-blue w-12 sm:w-14 h-12 sm:h-14 rounded-lg shrink-0">
                            <span className="text-xs sm:text-sm font-bold">{pub.year}</span>
                            <FileText size={14} className="opacity-50 mt-0.5" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-ulpgc-gray-dark mb-1 leading-snug">
                                {pub.title}
                            </h3>
                            <p
                                className="text-ulpgc-gray text-xs mb-1.5"
                                dangerouslySetInnerHTML={{
                                    __html: pub.authors.replace(
                                        /\*\*(.*?)\*\*/g,
                                        '<span class="font-semibold text-ulpgc-gray-dark">$1</span>'
                                    )
                                }}
                            />
                            <p className="text-xs text-ulpgc-blue font-medium italic mb-3">
                                {pub.venue}
                            </p>

                            <div className="flex gap-2">
                                {pub.links.pdf && (
                                    <a
                                        href={pub.links.pdf}
                                        target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-ulpgc-gray-5 text-ulpgc-gray text-xs font-medium hover:bg-ulpgc-blue-10 hover:text-ulpgc-blue transition-colors"
                                    >
                                        PDF
                                    </a>
                                )}
                                {pub.links.doi && pub.links.doi !== '#' && (
                                    <a
                                        href={pub.links.doi}
                                        target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-ulpgc-gray-5 text-ulpgc-gray text-xs font-medium hover:bg-ulpgc-blue-10 hover:text-ulpgc-blue transition-colors"
                                    >
                                        <ExternalLink size={11} /> DOI
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <a
                    href="https://scholar.google.es/citations?hl=es&user=aCeZn5kAAAAJ"
                    target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium text-ulpgc-blue hover:text-ulpgc-blue-dark transition-colors border-b border-ulpgc-blue-10 hover:border-ulpgc-blue pb-0.5"
                >
                    {t.publications.viewAll}
                </a>
            </div>
        </Section>
    );
};
