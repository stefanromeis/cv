import React from 'react';
import { experiences } from '../../data/experiences';

function parseTechStack(description: string): { summary: string; tech: string[] } {
  const lines = description.split('\n');
  const summary = lines[0];
  const tech = lines
    .slice(1)
    .join(', ')
    .split(/,\s*/)
    .map((t) => t.trim())
    .filter(Boolean);
  return { summary, tech };
}

export function WorkExperience() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-6">
        WORKING EXPERIENCE
      </h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const { summary, tech } = parseTechStack(exp.description);
            return (
              <a
                key={index}
                href={`#${exp.slug}`}
                className="relative pl-6 block group cursor-pointer"
              >
                <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gray-400 -translate-x-[40%]" />

                <div className="text-xs">
                  <p className="text-gray-500 mb-1">{exp.period}</p>
                  <h3 className="font-semibold text-gray-900 mb-0.5 group-hover:underline">
                    {exp.title}
                  </h3>
                  {exp.subtitle && (
                    <p className="text-gray-500 mb-0.5">{exp.subtitle}</p>
                  )}
                  <p className="text-gray-700 mb-1 whitespace-pre-line">{exp.company}</p>
                  <p className="text-gray-500 mb-2">{summary}</p>
                  {tech.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[8px] md:text-[7px] px-1.5 md:px-1 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
