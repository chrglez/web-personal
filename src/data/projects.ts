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
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tags: ["R", "Quarto", "Automation"],
        links: {
            demo: "https://www.datosdelanzarote.com/item/informe-del-panel-de-indicadores-de-turismo-de-lanzarote"
        }
    },
    {
        id: 2,
        title: "Gran Canaria Tourism Reports",
        description: "Automated reporting pipeline for tourism statistics developed for Turismo Gran Canaria. Focuses on reproducibility and efficient data handling.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
        tags: ["R", "Quarto", "Data Analysis"],
        links: {
            demo: "https://www.grancanaria.com/turismo/es/area-profesional/informes-y-estadisticas/informes/"
        }
    },
    {
        id: 3,
        title: "Gran Canaria Tourism Dashboard",
        description: "Interactive dashboard for real-time monitoring and visualization of tourism indicators for Gran Canaria, built with R and Shiny.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["R", "Shiny", "Dashboard"],
        links: {
            demo: "https://www.grancanaria.com/turismo/es/area-profesional/informes-y-estadisticas/cuadro-de-mando/"
        }
    }
];
