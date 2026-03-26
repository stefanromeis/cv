import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import { Experience } from '../data/experiences';

export function ExperienceDetailPage({ experience }: { experience: Experience }) {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-2xl mx-auto px-8 py-12 print:px-0 print:py-0">
        <a
          href="#"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-10 print:hidden"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to CV
        </a>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {experience.detail.company}
          </h1>
          {experience.detail.duration && (
            <p className="text-sm text-gray-500 mt-1">{experience.detail.duration}</p>
          )}
        </div>

        <div className="mt-10 space-y-10">
          {experience.detail.roles.map((role, i) => (
            <div key={i} className={i > 0 ? 'pt-10 border-t border-gray-100' : ''}>
              <h2 className="text-base font-semibold text-gray-900">{role.title}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{role.period}</p>
              <p className="text-sm text-gray-400 mb-6">{role.location}</p>
              <div className="space-y-4">
                {role.paragraphs.map((p, j) => (
                  <p key={j} className="text-sm text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
