import React from 'react';

export function PersonalStatement() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-4">
        PERSONAL STATEMENT
      </h2>
      <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
        <p>
          Frontend Architect and Principal Engineer based in Potsdam, with a Master's degree in
          Media Informatics and over 13 years of professional experience specialising in React.js,
          TypeScript, and the broader frontend ecosystem. My work centres on UI architecture,
          scalable component systems, performance engineering, and AI-augmented development
          workflows within microservice-based platforms.
        </p>
        <p>
          Known for bridging design, product, and engineering — I don't implement designs
          literally, but interpret their intent and translate it into component architecture that
          stays reusable and maintainable as the product grows. A background in visual design and
          cartography shaped that editorial judgment: deciding what matters, what gets simplified,
          and what gets emphasized — in maps then, in interfaces and system boundaries now.
        </p>
        <p>
          In recent roles I have shaped frontend architecture for B2B SaaS platforms, built and
          maintained shared UI libraries and design systems used across multiple applications, led
          small development teams, and worked with AI on both sides: shipping AI-driven product
          features in a SaaS task management platform, and integrating AI agents into everyday
          engineering workflows to speed up delivery and support data-driven decisions — always with robustness,
          maintainability, and user experience at the forefront.
        </p>
      </div>
    </section>
  );
}
