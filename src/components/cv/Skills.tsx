import React from 'react';
const techSkills = [
{
  name: 'JavaScript (ES6+)',
  level: 5
},
{
  name: 'TypeScript',
  level: 4
},
{
  name: 'React.js',
  level: 5
},
{
  name: 'Next.js',
  level: 5
},
{
  name: 'Node.js',
  level: 5
},
{
  name: 'CSS / SASS / Tailwind',
  level: 5
},
{
  name: 'HTML',
  level: 5
},
{
  name: 'Docker',
  level: 5
},
{
  name: 'REST APIs',
  level: 5
},
{
  name: 'Git',
  level: 5
},
{
  name: 'SQL / NoSQL',
  level: 4
},
{
  name: 'System architecture',
  level: 4
},
{
  name: 'Microservices',
  level: 3
}];

const knowledgeSkills = [
{
  name: 'Grid and layout',
  level: 5
},
{
  name: 'Interface Design',
  level: 5
},
{
  name: 'Typography',
  level: 5
},
{
  name: 'Animation and Transition',
  level: 5
},
{
  name: 'Web authentication / OAuth',
  level: 5
},
{
  name: 'SSR / Edge rendering',
  level: 5
},
{
  name: 'AI / Code generation',
  level: 4
},
{
  name: 'Distributed systems',
  level: 3
},
{
  name: 'Web performance',
  level: 4
},
{
  name: 'CI / CD',
  level: 4
},
{
  name: 'Project management',
  level: 4
}];

function SkillRating({ level }: {level: number;}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((dot) =>
      <div
        key={dot}
        className={`w-1.5 h-1.5 rounded-full ${dot <= level ? 'bg-gray-900' : 'bg-gray-300'}`} />
      )}
    </div>);
}

export function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-4">
        SKILLS
      </h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h3 className="text-xs font-semibold text-gray-900 mb-3">Tech</h3>
          <div className="space-y-2">
            {techSkills.map((skill, index) =>
            <div
              key={index}
              className="flex items-center justify-between gap-4">
              
                <span className="text-xs text-gray-700">{skill.name}</span>
                <SkillRating level={skill.level} />
              </div>
            )}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-semibold text-gray-900 mb-3">
            Knowledge
          </h3>
          <div className="space-y-2">
            {knowledgeSkills.map((skill, index) =>
            <div
              key={index}
              className="flex items-center justify-between gap-4">
              
                <span className="text-xs text-gray-700">{skill.name}</span>
                <SkillRating level={skill.level} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}