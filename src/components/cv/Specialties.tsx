import React from 'react';
import { LayersIcon, PenToolIcon, MonitorIcon, AtomIcon, SparklesIcon } from 'lucide-react';
const specialties = [
{
  icon: LayersIcon,
  label: 'Architecture'
},
{
  icon: MonitorIcon,
  label: 'Web\nDevelopment'
},
{
  icon: SparklesIcon,
  label: 'AI\nEngineering'
},
{
  icon: AtomIcon,
  label: 'React.js'
},
{
  icon: PenToolIcon,
  label: 'Design'
}];

export function Specialties() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-6">
        SPECIALITIES
      </h2>
      <div className="flex justify-between items-start gap-4">
        {specialties.map((specialty, index) => {
          const Icon = specialty.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-gray-700" />
              </div>
              <span className="text-xs text-gray-700 whitespace-pre-line leading-tight">
                {specialty.label}
              </span>
            </div>);

        })}
      </div>
    </section>);

}