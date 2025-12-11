import { Section } from '../Section';
import { teaching } from '../../data/teaching';

export const Teaching = () => {
    return (
        <Section id="teaching" title="Teaching & Mentorship">
            <div className="grid md:grid-cols-3 gap-6">
                {teaching.map((course) => {
                    const Icon = course.icon;
                    return (
                        <div key={course.id} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm relative overflow-hidden group hover:border-indigo-100 transition-all">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Icon size={100} className="text-indigo-600" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                                    <Icon size={24} />
                                </div>
                                <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase mb-2 block">{course.code}</span>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2">{course.title}</h3>
                                <p className="text-sm text-zinc-500 font-medium mb-4">{course.role} • {course.year}</p>
                                <p className="text-zinc-600 text-sm leading-relaxed mb-6">{course.description}</p>

                                <a href="#" className="text-sm font-semibold text-zinc-900 border-b-2 border-indigo-100 hover:border-indigo-600 transition-all inline-block pb-0.5">
                                    View Syllabus
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}
