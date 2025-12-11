import { FileText, Download } from 'lucide-react';
import { Section } from '../Section';
import { publications } from '../../data/publications';

export const Publications = () => {
    return (
        <Section id="publications" title="Recent Publications" className="bg-zinc-50/50">
            <div className="space-y-4 max-w-4xl">
                {publications.map((pub) => (
                    <div key={pub.id} className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start">
                        <div className="hidden sm:flex flex-col items-center justify-center bg-indigo-50 text-indigo-700 w-16 h-16 rounded-lg shrink-0">
                            <span className="text-sm font-bold">{pub.year}</span>
                            <FileText size={20} className="opacity-50" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-zinc-900 mb-1 leading-snug">{pub.title}</h3>
                            {/* Parse bold markdown manually for simplicity since we don't have a markdown parser here */}
                            <p className="text-zinc-600 text-sm mb-2" dangerouslySetInnerHTML={{ __html: pub.authors.replace(/\*\*(.*?)\*\*/g, '<span class="text-zinc-900 font-semibold">$1</span>') }} />
                            <p className="text-sm text-indigo-600 italic mb-4">{pub.venue}</p>

                            <div className="flex gap-3">
                                {pub.links.pdf && (
                                    <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium hover:bg-zinc-200 transition-colors">
                                        <Download size={14} /> PDF
                                    </a>
                                )}
                                {pub.links.doi && (
                                    <a href={pub.links.doi} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium hover:bg-zinc-200 transition-colors">
                                        DOI
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
