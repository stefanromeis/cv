import React from 'react';

type Skill = {
  name: string;
  level: number;
};

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Full-Stack Development',
    skills: [
      { name: 'JavaScript (ES6+)', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'React.js', level: 5 },
      { name: 'Next.js', level: 5 },
      { name: 'Node.js', level: 5 },
      { name: 'REST APIs', level: 5 },
      { name: 'WebSockets', level: 4 },
      { name: 'SQL / NoSQL', level: 4 },
    ],
  },
  {
    title: 'Architecture & Systems',
    skills: [
      { name: 'System Architecture', level: 4 },
      { name: 'Microservices', level: 4 },
      { name: 'Distributed Systems', level: 3 },
      { name: 'Web Authentication / OAuth', level: 5 },
      { name: 'SSR / Edge Rendering', level: 5 },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    skills: [
      { name: 'Docker', level: 5 },
      { name: 'AWS', level: 3 },
      { name: 'CI / CD', level: 4 },
      { name: 'Git (Advanced Workflows)', level: 5 },
    ],
  },
  {
    title: 'Performance & Advanced Topics',
    skills: [
      { name: 'Web Performance', level: 4 },
      { name: 'AI / Code Generation', level: 4 },
    ],
  },
  {
    title: 'Frontend & UI',
    skills: [
      { name: 'HTML', level: 5 },
      { name: 'CSS / SASS / Tailwind', level: 5 },
      { name: 'Grid & Layout Systems', level: 5 },
      { name: 'Interface Design', level: 5 },
      { name: 'Typography', level: 5 },
      { name: 'Animation & Transitions', level: 5 },
    ],
  },
  {
    title: 'Product & Collaboration',
    skills: [
      { name: 'Agile / Scrum', level: 5 },
      { name: 'Project Management', level: 4 },
      { name: 'Problem Framing & Solution Design', level: 5 },
    ],
  },
];

function SkillRating({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-1.5 h-1.5 rounded-full ${dot <= level ? 'bg-gray-900' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-4">
        SKILLS
      </h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {skillGroups.map((group, i) => (
          <div key={i}>
            <h3 className="text-xs font-semibold text-gray-900 mb-3">{group.title}</h3>
            <div className="space-y-2">
              {group.skills.map((skill, j) => (
                <div key={j} className="flex items-center justify-between gap-4">
                  <span className="text-xs text-gray-700">{skill.name}</span>
                  <SkillRating level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
