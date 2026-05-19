import React from 'react';

const CoverLetter: React.FC = () => (
  <div className="p-8 max-w-2xl mx-auto text-sm text-gray-800 leading-relaxed">
    <div className="mb-8 text-xs text-gray-500">
      <p>Stefan Romeis · Hegelalle 50 · 14467 Potsdam</p>
      <p>s.romeis@gmail.com · +49 172 810 21 61</p>
      <p className="mt-1">Potsdam, May 2026</p>
    </div>

    <p className="mb-4 font-semibold">Application: Tech Lead (Agent Frontend) — Recare</p>

    <p className="mb-4">
      Dear Recare Hiring Team,
    </p>

    <p className="mb-4">
      Discharge management sits at one of the messiest intersections in healthcare: time pressure,
      fragmented data, and systems that were never designed to talk to each other. What drew me to
      Recare is that you're tackling this with a real product used in production hospitals — not a
      proof of concept — and that the engineering challenge at the core of the Agent is genuinely
      interesting.
    </p>

    <p className="mb-4">
      The role maps closely to where my experience sits. I've spent most of the past seven years as
      a principal frontend engineer building complex, stateful React applications. At workstreams.ai
      I owned the frontend architecture of a SaaS task management tool across six years, eventually
      leading a team of five developers, driving architectural decisions, and keeping delivery
      predictable while the product grew substantially in scope. More recently at Meplato I've been
      shaping the frontend architecture of a B2B eProcurement platform within a microservice
      landscape — maintaining a shared component library, integrating REST APIs, and working closely
      with backend and product teams.
    </p>

    <p className="mb-4">
      What interests me technically about the Recare Agent is the orchestration problem: surfacing
      AI capabilities like voice and document extraction in a way that healthcare professionals can
      trust and rely on under real pressure. That requires more than solid component work. It means
      thinking carefully about streaming state, async error surfaces, and what "reliability" looks
      like in a UI when the underlying model is non-deterministic. I've been working hands-on with
      AI-augmented development for the past two years and I'm comfortable reasoning about where the
      agentic layer ends and the UI contract begins.
    </p>

    <p className="mb-4">
      On the stack: React, TypeScript, GraphQL, and component-driven development with Storybook are
      all part of my regular work. I've set up and maintained Jest and Cypress pipelines, worked
      through Webpack builds, and have direct experience with SonarCloud and CI/CD on CircleCI-style
      setups. The gradual Webpack-to-Vite migration you mentioned is something I've navigated before
      and have a clear opinion on how to approach without disrupting the team.
    </p>

    <p className="mb-4">
      Working in a regulated environment with real consequences changes how you think about
      observability, graceful degradation, and the difference between a degraded experience and a
      failed one. I take that seriously.
    </p>

    <p className="mb-6">
      I'd welcome a conversation about the role and what you're building.
    </p>

    <p>
      Stefan Romeis
    </p>
  </div>
);

export default CoverLetter;
