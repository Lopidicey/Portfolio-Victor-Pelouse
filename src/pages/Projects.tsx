import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Start-Alarm",
      description: "Application Web avec simulateur de pose d'équipements de sécurité.", 
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      technologies: ["React", "Node.js", "MySQL", "Tailwind CSS", "Express"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "Heavent",
      description: "Application de gestion de tâches avec fonctionnalités collaboratives",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
      technologies: ["HTML 5", "CSS 3", "PHP", "MySQL"],
      githubLink: "https://github.com",
    },
    {
      title: "Cétor",
      description: "Site portfolio responsive avec thème personnalisable",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["JavaScript", "CSS 3", "PHP / PHPMyAdmin", "MySQL"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
    {
      title: "Cétor",
      description: "Site portfolio responsive avec thème personnalisable",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["Python"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}