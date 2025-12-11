export interface Publication {
    id: number;
    title: string;
    authors: string;
    venue: string;
    year: number;
    links: {
        pdf?: string;
        doi?: string;
    };
}

export const publications: Publication[] = [
    {
        id: 1,
        title: "Análisis de equidad y sostenibilidad presupuestaria del sistema de copago farmacéutico en España",
        authors: "Pinilla, J., **González-Martel, C.**, González López-Valcárcel, B., et al.",
        venue: "Gaceta Sanitaria",
        year: 2025,
        links: {
            doi: "https://doi.org/10.1016/j.gaceta.2024.102427"
        }
    },
    {
        id: 2,
        title: "Managing score heterogeneity between online consumer review websites",
        authors: "Martel–Escobar, M., **González-Martel, C.**, Vázquez-Polo, F.J.",
        venue: "Cogent Social Sciences",
        year: 2023,
        links: {
            doi: "https://doi.org/10.1080/23311886.2023.2267261"
        }
    },
    {
        id: 3,
        title: "Dynamics in accommodation feature preferences: exploring the use of time series analysis of online reviews",
        authors: "Teichert, T., **González-Martel, C.**, Hernández, J.M., Schweiggart, N.",
        venue: "International Journal of Contemporary Hospitality Management",
        year: 2023,
        links: {
            doi: "#"
        }
    },
    {
        id: 4,
        title: "Factors influencing the co-occurrence of visits to attractions: The case of Madrid, Spain",
        authors: "Hernández, J.M., Santana-Jiménez, Y., **González-Martel, C.**",
        venue: "Tourism Management",
        year: 2021,
        links: {
            doi: "https://doi.org/10.1016/j.tourman.2020.104236"
        }
    },
    {
        id: 5,
        title: "Sequence effects of city tour experiences: A tourism fatigue perspective",
        authors: "Teichert, T., Sun, H., **González-Martel, C.**",
        venue: "Journal of Destination Marketing & Management",
        year: 2021,
        links: {
            doi: "https://doi.org/10.1016/j.jdmm.2021.100646"
        }
    }
];
