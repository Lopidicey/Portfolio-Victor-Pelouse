import React from 'react';

interface SkillCardProps {
  category: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="p-6 rounded-lg bg-gray-800 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              <span className="text-sm font-medium text-gray-300">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-emerald-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}