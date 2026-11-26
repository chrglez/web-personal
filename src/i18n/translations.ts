export type Lang = 'en' | 'es';

export const translations = {
    en: {
        nav: {
            projects: 'Projects',
            publications: 'Publications',
            teaching: 'Teaching',
            contact: 'Contact',
        },
        hero: {
            role: 'Associate Professor',
            dept: ['Dept. Quantitative Methods', 'in Economics & Management', 'ULPGC'],
            bio: 'I am an Associate Professor of Quantitative Methods at the Universidad de Las Palmas de Gran Canaria (ULPGC), affiliated with the GIR Finanzas Cuantitativas y Computacionales research group. My research applies statistical and computational methods to tourism economics, computational finance, health economics, and the analysis of online consumer behaviour. I collaborate with public institutions and tourism boards to build data-driven tools that translate complex data into actionable insights.',
            interests_label: 'Interests',
            education_label: 'Education',
            interests: [
                'Tourism Analytics',
                'Quantitative Methods',
                'Computational Finance',
                'Machine Learning',
                'Online Reviews',
                'Health Economics',
            ],
            education: [
                { degree: 'PhD in Economics', institution: 'ULPGC' },
                { degree: 'BSc in Economics', institution: 'ULPGC' },
                { degree: 'BSc in Economic and Business Sciences', institution: 'ULPGC' },
            ],
        },
        sections: {
            projects: 'Projects',
            publications: 'Publications',
            teaching: 'Teaching',
        },
        teaching: {
            linkLabel: 'Course page',
        },
        projects: [
            { id: 1, description: 'Development of automated systems for generating tourism indicator reports for the Cabildo de Lanzarote. Streamlining data processing and visualization.' },
            { id: 2, description: 'Automated reporting pipeline for tourism statistics developed for Turismo Gran Canaria. Focuses on reproducibility and efficient data handling.' },
            { id: 3, description: 'Interactive dashboard for real-time monitoring and visualization of tourism indicators for Gran Canaria, built with R and Shiny.' },
        ],
        publications: {
            viewAll: 'View all publications on Google Scholar →',
        },
        contact: {
            title: 'Get in touch',
            description: 'Open to research collaborations, consulting projects, and speaking engagements.',
        },
        footer: {
            role: 'Associate Professor · ULPGC',
            rights: 'All rights reserved.',
        },
    },
    es: {
        nav: {
            projects: 'Proyectos',
            publications: 'Publicaciones',
            teaching: 'Docencia',
            contact: 'Contacto',
        },
        hero: {
            role: 'Profesor Titular',
            dept: ['Dpto. Métodos Cuantitativos', 'en Economía y Gestión', 'ULPGC'],
            bio: 'Soy Profesor Titular del área de Métodos Cuantitativos en la Universidad de Las Palmas de Gran Canaria (ULPGC), adscrito al grupo de investigación GIR Finanzas Cuantitativas y Computacionales. Mi investigación aplica métodos estadísticos y computacionales a la economía del turismo, las finanzas computacionales, la economía de la salud y el análisis del comportamiento online del consumidor. Colaboro con instituciones públicas y organismos turísticos para desarrollar herramientas basadas en datos que transforman información compleja en conocimiento accionable.',
            interests_label: 'Intereses',
            education_label: 'Formación',
            interests: [
                'Analítica Turística',
                'Métodos Cuantitativos',
                'Finanzas Computacionales',
                'Aprendizaje Automático',
                'Reseñas Online',
                'Economía de la Salud',
            ],
            education: [
                { degree: 'Doctor en Economía', institution: 'ULPGC' },
                { degree: 'Licenciado en Economía', institution: 'ULPGC' },
                { degree: 'Licenciado en Ciencias Económicas y Empresariales', institution: 'ULPGC' },
            ],
        },
        sections: {
            projects: 'Proyectos',
            publications: 'Publicaciones',
            teaching: 'Docencia',
        },
        teaching: {
            linkLabel: 'Guía docente',
        },
        projects: [
            { id: 1, description: 'Desarrollo de sistemas automatizados para la generación de informes de indicadores turísticos para el Cabildo de Lanzarote. Optimización del procesamiento de datos y visualización.' },
            { id: 2, description: 'Pipeline de informes automatizados de estadísticas turísticas desarrollado para Turismo Gran Canaria. Centrado en la reproducibilidad y el manejo eficiente de datos.' },
            { id: 3, description: 'Panel interactivo para el seguimiento y visualización en tiempo real de indicadores turísticos de Gran Canaria, desarrollado con R y Shiny.' },
        ],
        publications: {
            viewAll: 'Ver todas las publicaciones en Google Scholar →',
        },
        contact: {
            title: 'Hablemos',
            description: 'Abierto a colaboraciones de investigación, proyectos de consultoría y participación en congresos.',
        },
        footer: {
            role: 'Profesor Titular · ULPGC',
            rights: 'Todos los derechos reservados.',
        },
    },
};
