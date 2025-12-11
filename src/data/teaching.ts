import { Globe, BarChart3, Binary, Calculator } from 'lucide-react';

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
        description: "Máster Universitario en Turismo y Desarrollo Sostenible / Master In Tourism And Sustainable Development",
        icon: Globe,
        year: "2025"
    },
    {
        id: 2,
        title: "Inteligencia Turística y Análisis de Datos",
        code: "51432",
        role: "Master's Course",
        description: "Máster Universitario en Turismo: Digitalización, Innovación e Inteligencia",
        icon: BarChart3,
        year: "2025"
    },
    {
        id: 3,
        title: "Métodos Estadísticos I",
        code: "40366",
        role: "Degree Course",
        description: "Grado en Ciencia e Ingeniería de Datos (Degree in Data Science and Engineering)",
        icon: Binary,
        year: "2025"
    },
    {
        id: 4,
        title: "Matemáticas para la Economía II",
        code: "40706",
        role: "Degree Course",
        description: "Grado en Economía (Degree in Economics)",
        icon: Calculator,
        year: "2025"
    }
];
