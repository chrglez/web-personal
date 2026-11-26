import lanzaroteReport from '../assets/projects/lanzarote-tourism-report.jpg';
import granCanariaReport from '../assets/projects/gran-canaria-tourism-report.jpg';
import granCanariaDashboard from '../assets/projects/gran-canaria-dashboard.jpg';

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    links: {
        github?: string;
        demo?: string;
    };
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Lanzarote Tourism Automation",
        description: "Development of automated systems for generating tourism indicator reports for the Cabildo de Lanzarote. Streamlining data processing and visualization.",
        image: lanzaroteReport,
        tags: ["R", "Quarto", "Automation"],
        links: {
            demo: "https://www.datosdelanzarote.com/item/informe-del-panel-de-indicadores-de-turismo-de-lanzarote"
        }
    },
    {
        id: 2,
        title: "Gran Canaria Tourism Reports",
        description: "Automated reporting pipeline for tourism statistics developed for Turismo Gran Canaria. Focuses on reproducibility and efficient data handling.",
        image: granCanariaReport,
        tags: ["R", "Quarto", "Data Analysis"],
        links: {
            demo: "https://www.grancanaria.com/turismo/es/area-profesional/informes-y-estadisticas/informes/"
        }
    },
    {
        id: 3,
        title: "Gran Canaria Tourism Dashboard",
        description: "Interactive dashboard for real-time monitoring and visualization of tourism indicators for Gran Canaria, built with R and Shiny.",
        image: granCanariaDashboard,
        tags: ["R", "Shiny", "Dashboard"],
        links: {
            demo: "https://www.grancanaria.com/turismo/es/area-profesional/informes-y-estadisticas/cuadro-de-mando/"
        }
    }
];
