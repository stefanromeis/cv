import React from 'react';
import {
  CpuIcon,
  PaletteIcon,
  DumbbellIcon,
  HeartIcon,
  PlaneIcon,
  HeadphonesIcon,
  FilmIcon,
  GamepadIcon,
  LandmarkIcon,
  BrainIcon } from
'lucide-react';
const interests = [
{
  icon: CpuIcon,
  label: 'Tech'
},
{
  icon: PaletteIcon,
  label: 'Design'
},
{
  icon: HeartIcon,
  label: 'Sport'
},
{
  icon: DumbbellIcon,
  label: 'Fitness'
},
{
  icon: PlaneIcon,
  label: 'Traveling'
},
{
  icon: HeadphonesIcon,
  label: 'Music'
},
{
  icon: FilmIcon,
  label: 'Film'
},
{
  icon: GamepadIcon,
  label: 'Games'
},
{
  icon: LandmarkIcon,
  label: 'Politics'
},
{
  icon: BrainIcon,
  label: 'Psychology'
}];

export function Interests() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-6">
        INTERESTS
      </h2>
      <div className="flex gap-6">
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center mb-2">
                <Icon className="w-6 h-6 text-gray-700" />
              </div>
              <span className="text-xs text-gray-700">{interest.label}</span>
            </div>);

        })}
      </div>
    </section>);

}