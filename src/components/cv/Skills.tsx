import React from 'react';
const techSkills = [
{
  name: 'JavaScript',
  level: 5
},
{
  name: 'React.js',
  level: 5
},
{
  name: 'Redux',
  level: 5
},
{
  name: 'Hooks',
  level: 5
},
{
  name: 'TypeScript',
  level: 5
},
{
  name: 'Next.js',
  level: 4
},
{
  name: 'HTML',
  level: 5
},
{
  name: 'CSS / SASS / Stylus',
  level: 5
},
{
  name: 'Node.js',
  level: 4
},
{
  name: 'SQL',
  level: 3
},
{
  name: 'Git',
  level: 5
},
{
  name: 'PWA',
  level: 4
},
{
  name: 'Webpack',
  level: 4
},
{
  name: 'Selenium',
  level: 3
},
{
  name: 'AWS',
  level: 3
}];

const knowledgeSkills = [
{
  name: 'Grid and layout',
  level: 5
},
{
  name: 'Typography',
  level: 5
},
{
  name: 'Color theory',
  level: 5
},
{
  name: 'Interface Design',
  level: 5
},
{
  name: 'Marketing and SEO',
  level: 4
},
{
  name: '2D / 3D Rendering',
  level: 3
},
{
  name: 'Animation and Transition',
  level: 5
},
{
  name: 'REST API',
  level: 5
},
{
  name: 'Web authentication',
  level: 5
},
{
  name: 'Automated testing',
  level: 4
},
{
  name: 'Database integration tasks',
  level: 4
},
{
  name: 'CI / CD',
  level: 4
},
{
  name: 'Project management',
  level: 4
},
{
  name: 'GIT',
  level: 5
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