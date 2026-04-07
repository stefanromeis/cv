import React from 'react';
const education = [
{
  period: 'From October 2014 to June 2017',
  degree: 'Media Informatics · Master of Science',
  institution: 'Beuth Hochschule für Technik, Berlin'
},
{
  period: 'From October 2011 to June 2014',
  degree: 'Media Informatics · Bachelor of Science',
  institution: 'Beuth Hochschule für Technik, Berlin'
},
{
  period: 'From April 2011 to August 2011',
  degree: 'Web Development',
  institution: 'WBS Training AG, Potsdam'
},
{
  period: 'From 2006 to 2009',
  degree: 'Design, Programming, Cartography',
  institution:
  'Ernst-Litfaß-Schule, Oberstufenzentrum Druck- und Medientechnik, Berlin'
}];

export function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-6">
        EDUCATION
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />

        <div className="space-y-6">
          {education.map((edu, index) =>
          <div key={index} className="relative pl-6">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gray-400 -translate-x-[40%]" />

              <div className="text-xs">
                <p className="text-gray-500 mb-1">{edu.period}</p>
                <h3 className="font-semibold text-gray-900 mb-0.5">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {edu.institution}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}