import React from 'react';
import { experiences } from '../../data/experiences';

export function WorkExperience() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-6">
        WORKING EXPERIENCE
      </h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={`#${exp.slug}`}
              className="relative pl-6 block group cursor-pointer"
            >
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gray-400 -translate-x-[3.5px]" />

              <div className="text-xs">
                <p className="text-gray-500 mb-1">{exp.period}</p>
                <h3 className="font-semibold text-gray-900 mb-0.5 group-hover:underline">{exp.title}</h3>
                {exp.subtitle && (
                  <p className="text-gray-500 mb-0.5">{exp.subtitle}</p>
                )}
                <p className="text-gray-700 mb-1 whitespace-pre-line">{exp.company}</p>
                <p className="text-gray-500 whitespace-pre-line leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
