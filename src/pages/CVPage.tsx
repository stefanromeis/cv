import React from 'react';
import { CVHeader } from '../components/cv/CVHeader';
import { PersonalStatement } from '../components/cv/PersonalStatement';
import { Specialties } from '../components/cv/Specialties';
import { Skills } from '../components/cv/Skills';
import { WorkExperience } from '../components/cv/WorkExperience';
import { Education } from '../components/cv/Education';
import { Interests } from '../components/cv/Interests';
import { Languages } from '../components/cv/Languages';
export function CVPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <CVHeader />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <PersonalStatement />
            <Specialties />
            <Skills />
            <Interests />
          </div>

          {/* Right Column */}
          <div>
            <WorkExperience />
            <Education />
            <Languages />
          </div>
        </div>
      </div>
    </main>);

}