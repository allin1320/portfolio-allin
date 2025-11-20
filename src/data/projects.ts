export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    title: "Plateforme SAAS",
    description: "SAAS de gestion de pointage et de ronde",
    technologies: ["Symfony", "MySQL", "APIPlatform"],
    image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=SAAS+Platform",
  },
  {
    title: "Système CRM",
    description: "Solution CRM complète pour la gestion des relations clients et des ventes.",
    technologies: ["Symfony", "MySQL", "APIPlatform"],
    image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=CRM+System",
  },
  {
    title: "Freelance Dispo",
    description: "Mise en relation entre Freelance et entreprise dans le domaine du tech",
    technologies: ["Symfony", "MySQL", "Stripe"],
    image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Freelance+Platform",
  },
  {
    title: "Intégration IA",
    description: "Mise en place de fonctionnalités basées sur l'IA, incluant l'analyse de données",
    technologies: ["Neuron AI", "OpenAI", "MCP"],
    image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=AI+Integration",
  },
];