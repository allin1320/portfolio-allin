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
    image: "/saas.png",
  },
  {
    title: "Système CRM",
    description: "Solution CRM complète pour la gestion des relations clients et des ventes.",
    technologies: ["Symfony", "MySQL", "APIPlatform"],
    image: "/crm.png",
  },
  {
    title: "Freelance Dispo",
    description: "Mise en relation entre Freelance et entreprise dans le domaine du tech",
    technologies: ["Symfony", "MySQL", "Stripe"],
    image: "/freelance-dispo.png",
  },
  {
    title: "Intégration IA",
    description: "Mise en place de fonctionnalités basées sur l'IA, incluant l'analyse de données",
    technologies: ["Neuron AI", "OpenAI", "MCP"],
    image: "/ia.png",
  },
];