export type DetailRole = {
  title: string;
  period: string;
  location: string;
  paragraphs: string[];
};

export type Experience = {
  slug: string;
  period: string;
  title: string;
  subtitle?: string;
  company: string;
  description: string;
  detail: {
    company: string;
    duration?: string;
    roles: DetailRole[];
  };
};

export const experiences: Experience[] = [
  {
    slug: 'meplato',
    period: 'Mar 2025 – Present · Remote',
    title: 'Frontend Architect / Senior Frontend Developer',
    company: 'Meplato GmbH, Berlin',
    description: 'B2B eProcurement platform\nReact.js, TypeScript, Microservices, REST, CI/CD, Scrum',
    detail: {
      company: 'Meplato GmbH',
      roles: [
        {
          title: 'Frontend Architect / Senior Frontend Developer',
          period: 'March 2025 – Present',
          location: 'Metropolregion Berlin/Brandenburg · Remote',
          paragraphs: [
            'At Meplato, I worked on the development and evolution of a B2B eProcurement platform that helps organizations digitize and streamline their procurement processes. My main focus was on shaping and improving the frontend architecture within a microservice-based platform.',
            'I contributed to the development and maintenance of a shared UI library with reusable components and design patterns to ensure a consistent user experience across multiple applications and services. In addition, I implemented web interfaces for different platform modules and integrated them with backend services via APIs within the microservice architecture.',
            "Working closely with backend and product teams, I helped improve the performance, scalability, and maintainability of the platform's frontend solutions.",
          ],
        },
      ],
    },
  },
  {
    slug: 'workstreams',
    period: 'From October 2018 to February 2025',
    title: 'Principal Frontend Engineer',
    subtitle: 'Full Stack Engineer · 2018 to 2019',
    company: 'workstreams.ai GmbH, Berlin',
    description: 'Task management\nReact.js, Redux, Node.js, REST, AWS, Webpack, CI / CD, Selenium, AI, Scrum',
    detail: {
      company: 'workstreams.ai',
      duration: '6 years',
      roles: [
        {
          title: 'Senior Frontend Engineer / Dev Lead',
          period: 'January 2024 – September 2024',
          location: 'Berlin, Germany',
          paragraphs: [
            'In the last months I led a small team of 5 developers in crafting new features and supporting colleagues in the development of a frontend SaaS task management product at workstreams.ai. Additionally my tasks include to collaborated with stakeholders, designers, and conducted code testing to ensure high-quality deliverables. Successfully managed the development process, ensuring timely delivery and high-quality output.',
          ],
        },
        {
          title: 'Senior Frontend Engineer',
          period: 'October 2018 – January 2024',
          location: 'Berlin, Germany',
          paragraphs: [
            "As a Senior Frontend Engineer at workstreams.ai GmbH in Berlin, I spearheaded architectural decisions, integrated new features, and aligned with stakeholders to drive future development. By supporting fellow developers and delivering high-quality, well-tested code, I contributed to the company's success in developing innovative solutions and meeting project deadlines.",
          ],
        },
      ],
    },
  },
  {
    slug: 'paxlife',
    period: 'From July 2017 to August 2018',
    title: 'Senior Frontend Developer',
    company: 'Paxlife Innovations GmbH, Potsdam',
    description: 'In-flight entertainment, cloud sales platform and exhibition\nReact.js, Redux, Flow, SASS, GIT, Jira,\nNode.js, REST, Adobe Creative Suite',
    detail: {
      company: 'Paxlife Innovations GmbH',
      roles: [
        {
          title: 'Frontend Developer',
          period: 'August 2017 – September 2018',
          location: 'Potsdam, Germany',
          paragraphs: [
            'As a Frontend Developer at Paxlife Innovations GmbH in Potsdam, I focused on developing intuitive and engaging user interfaces for In-Flight Entertainment systems. I leveraged technologies such as HTML, JavaScript, React.js, and CSS to improve the passenger experience. Working within agile frameworks like SCRUM and Kanban, I ensured projects were delivered on time while collaborating closely with cross-functional teams.',
            "I also contributed to the development of a cloud-edge service, enabling centralized code deployment across a fleet of aircrafts. My expertise in Adobe Creative Suite and InVision helped me design and prototype captivating UI's, which I then implemented using React.js and React Native to create a seamless and user-friendly experience.",
          ],
        },
      ],
    },
  },
  {
    slug: 'ecomsilio',
    period: 'From January 2017 to July 2017',
    title: 'Full Stack Developer',
    company: 'Ecomsilio GmbH, Berlin',
    description: 'E-commerce\nJavaScript, jQuery, SASS, PHP, MySQL,\nTWIG, Node.js, REST, Adobe Creative Suite',
    detail: {
      company: 'ecomsilio GmbH',
      roles: [
        {
          title: 'Full Stack Developer',
          period: 'January 2017 – July 2017',
          location: 'Berlin, Germany',
          paragraphs: [
            'As a Full Stack Developer at ecomsilio GmbH, I specialized in developing innovative e-commerce solutions with Plentymarkets Multi-Channel Software. Additionally, I contributed significantly to optimizing warehouse management software, boosting productivity and enhancing customer satisfaction.',
          ],
        },
      ],
    },
  },
  {
    slug: 'hocaboo',
    period: 'From May 2016 to July 2016',
    title: 'Frontend Engineer',
    company: 'Hocaboo GmbH, Berlin',
    description: 'Recruiting platform for the hospitality industry\nAngular.js, SASS, Gulp,\nNode.js, Adobe Creative Suite',
    detail: {
      company: 'hocaboo',
      roles: [
        {
          title: 'Frontend Developer',
          period: 'May 2016 – July 2016',
          location: 'Berlin, Germany',
          paragraphs: [
            'At Hocaboo, I worked on a web application to bridge the gap between employees and employers in the hospitality sector. By leveraging my expertise in frontend development, I enhanced the platform\'s usability and functionality, resulting in a more engaging user experience. Additionally, I collaborated closely with team members to ensure the successful implementation of new features and improvements.',
          ],
        },
      ],
    },
  },
  {
    slug: 'fraunhofer',
    period: 'From April 2014 to July 2014',
    title: 'Frontend Engineer',
    company: 'Fraunhofer-Institut für\nNachrichtentechnik, Berlin',
    description: 'Touchless interaction research\nJavaScript, CSS, 3D.js, Kinect, HTML,\nWebsockets, Adobe Creative Suite',
    detail: {
      company: 'Fraunhofer Heinrich Hertz Institute, HHI',
      roles: [
        {
          title: 'Web Developer (Touchless Interaction)',
          period: 'April 2014 – July 2014',
          location: 'Berlin, Germany',
          paragraphs: [
            'At the HHI, my main tasks where based on researching innovative possibilities for touchless interactions. My primary objective was to explore the boundaries of touchless interaction within web-based environments. I developed various interactive games and a virtual school route trainer that combined Google Street View with Microsoft Kinect technology.',
          ],
        },
      ],
    },
  },
  {
    slug: 'lgb',
    period: 'From 2009 to 2020',
    title: 'Kartographer / GIS Specialist / Product Integrator',
    company: 'Landesvermessung und\nGeobasisinformation Brandenburg,\nPotsdam',
    description: 'Geoinformation systems and product integration\nJavaScript, CSS, HTML, GIS, Flash, Adobe Creative Suite',
    detail: {
      company: 'Landesvermessung und Geobasisinformation Brandenburg (LGB)',
      roles: [
        {
          title: 'Cartographer',
          period: 'July 2009 – June 2010',
          location: 'Potsdam, Germany',
          paragraphs: [
            'I worked as a Cartographer at LGB, integrating ArcGis into a production-ready state for a flexible geoinformation system. My responsibilities included developing and maintaining geospatial data products for mapping and analysis. I collaborated with the developers to translate the software requirements into working solutions.',
          ],
        },
      ],
    },
  },
];
