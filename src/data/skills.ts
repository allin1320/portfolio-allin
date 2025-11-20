export interface Skill {
  name: string;
  category: string;
  proficiencyLevel: number;
}

export const skills: Skill[] = [
  // Languages
  { name: "PHP", category: "Langage", proficiencyLevel: 5 },
  { name: "JavaScript", category: "Langage", proficiencyLevel: 3 },
  { name: "Python", category: "Langage", proficiencyLevel: 1 },
  { name: "Windev", category: "Langage", proficiencyLevel: 1 },
  // Frameworks
  { name: "Symfony", category: "Framework", proficiencyLevel: 5 },
  { name: "CodeIgniter", category: "Framework", proficiencyLevel: 3 },
  { name: "Bootstrap", category: "Framework", proficiencyLevel: 5 },
  { name: "AngularJS", category: "Framework", proficiencyLevel: 1 },
  { name: "React / ReactNative", category: "Framework", proficiencyLevel: 1 },
  // Outils & Technologies
  { name: "Git", category: "Outils & Technologies", proficiencyLevel: 3 },
  { name: "Docker", category: "Outils & Technologies", proficiencyLevel: 3 },
  { name: "IA / Machine Learning / MCP", category: "Outils & Technologies", proficiencyLevel: 1 },
];