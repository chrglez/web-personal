import { Section } from '../Section';
import { teaching } from '../../data/teaching';
import { useLang } from '../../context/LanguageContext';

export const Teaching = () => {
    const { t } = useLang();

    return (
        <Section id="teaching" title={t.sections.teaching} className="bg-ulpgc-gray-5">
            <div className="grid md:grid-cols-2 gap-3 md:gap-4 max-w-3xl">
                {teaching.map((course) => {
                    const Icon = course.icon;
                    return (
                        <div
                            key={course.id}
                            className="bg-white p-4 md:p-5 rounded-lg border border-ulpgc-gray-10 hover:border-ulpgc-blue-10 hover:shadow-sm transition-all flex gap-3 md:gap-4 items-start"
                        >
                            <div className="w-9 h-9 md:w-10 md:h-10 bg-ulpgc-blue-10 rounded-lg flex items-center justify-center text-ulpgc-blue shrink-0 mt-0.5">
                                <Icon size={18} />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-ulpgc-blue tracking-wider uppercase">
                                    {course.code} · {course.role}
                                </span>
                                <h3 className="text-sm font-semibold text-ulpgc-gray-dark mt-0.5 mb-1">
                                    {course.title}
                                </h3>
                                <p className="text-xs text-ulpgc-gray leading-relaxed">
                                    {course.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};
