import React from 'react';
const experiences = [
{
  period: 'From October 2018 until now',
  title: 'Principal Frontend Engineer',
  subtitle: 'Full Stack Engineer · 2018 to 2019',
  company: 'workstreams.ai GmbH, Berlin',
  description:
  'task management\nReact.js, Redux, Scylla, Node.js, REST, AWS, Webpack, CI / CD, Selenium, AI, Scrum'
},
{
  period: 'From July 2017 to August 2018',
  title: 'Frontend Engineer',
  company: 'Paxlife Innovations GmbH, Potsdam',
  description:
  'in-flight entertainment,\ncloud sales platform and exhibition\nReact.js, Redux, Flow, SASS, GIT, Jira,\nNode.js, REST, Adobe Creative Suite'
},
{
  period: 'From January 2017 to July 2017',
  title: 'Frontend Engineer',
  company: 'Ecomstills GmbH, Berlin',
  description:
  'eCommerce\nJavaScript, jQuery, SASS, PHP, MySQL,\nTWIG, Node.js, REST, Adobe Creative Suite'
},
{
  period: 'From May 2016 to July 2011',
  title: 'Frontend Engineer',
  company: 'Hocaboo GmbH, Berlin',
  description:
  'recruiting platform for the hotellery\nAngular.js, SASS, Gulp,\nNode.js, Adobe Creative Suite'
},
{
  period: 'From April 2014 to July 2014',
  title: 'Frontend Engineer',
  company: 'Fraunhofer-Institut für\nNachrichtentechnik, Berlin',
  description:
  'touchless interaction research\nJavaScript, CSS, 3D.js, Kinect, HTML,\nWebsockets, Adobe Creative Suite'
},
{
  period: 'From 2009 to 2020',
  title: 'Freelancer',
  company: 'Landesvermessung und\nGeobasisinformation Brandenburg,\nPotsdam',
  description:
  'geoinformation systems, product integration\nJavaScript, CSS, HTML,\nGIS, Flash, Adobe Creative Suite'
}];

export function WorkExperience() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-6">
        WORKING EXPERIENCE
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />

        <div className="space-y-6">
          {experiences.map((exp, index) =>
          <div key={index} className="relative pl-6">
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gray-400 -translate-x-[3.5px]" />

              <div className="text-xs">
                <p className="text-gray-500 mb-1">{exp.period}</p>
                <h3 className="font-semibold text-gray-900 mb-0.5">
                  {exp.title}
                </h3>
                {exp.subtitle &&
              <p className="text-gray-500 mb-0.5">{exp.subtitle}</p>
              }
                <p className="text-gray-700 mb-1">{exp.company}</p>
                <p className="text-gray-500 whitespace-pre-line leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}