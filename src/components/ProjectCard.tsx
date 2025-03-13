import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      
      <div className="absolute bottom-0 w-full p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-emerald-700 px-2 py-1 rounded-full text-xs text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-emerald-400 transition-colors"
            >
              <Github className="mr-1" size={16} />
              Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-emerald-400 transition-colors"
            >
              <ExternalLink className="mr-1" size={16} />
              Demo
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-emerald-400 transition-colors"
            >
              <ExternalLink className="mr-1" size={16} />
              Skill
            </a>
          )}
        </div>
      </div>
    </div>
  );
}