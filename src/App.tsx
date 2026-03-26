import React, { useState, useEffect } from 'react';
import { CVPage } from './pages/CVPage';
import { ExperienceDetailPage } from './pages/ExperienceDetailPage';
import { experiences } from './data/experiences';

export function App() {
  const [hash, setHash] = useState(window.location.hash.slice(1));

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const selected = experiences.find((e) => e.slug === hash);

  if (selected) {
    return <ExperienceDetailPage experience={selected} />;
  }

  return <CVPage />;
}
