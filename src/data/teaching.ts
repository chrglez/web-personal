import { Globe, Calculator } from 'lucide-react';

export interface Course {
    id: number;
    title: string;
    code: string;
    role: string;
    description: string;
    icon: any;
    year: string;
}

export const teaching: Course[] = [
    {
        id: 1,
        title: "Quantitative Methods in Tourism",
        code: "51420",
        role: "Master's Course",
        description: "Máster Universitario en Turismo y Desarrollo Sostenible / Master in Tourism and Sustainable Development",
        icon: Globe,
        year: "2026-27"
    },
    {
        id: 2,
        title: "Matemáticas para la Economía II",
        code: "40706",
        role: "Degree Course",
        description: "Grado en Economía (Degree in Economics)",
        icon: Calculator,
        year: "2026-27"
    }
];
