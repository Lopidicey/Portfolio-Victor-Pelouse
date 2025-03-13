import React from 'react';
import SkillCard from '../components/SkillCard';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 90 }, 
        { name: "Next.js", level: 85 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PHP", level: 75 },
        { name: "Java", level: 70 },
        { name: "Express", level: 85 },
        { name: "MySQL", level: 80 },
      ]
    },
    {
      category: "Autre(s)",
      skills: [
        { name: "Git", level: 90 },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Mes Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}