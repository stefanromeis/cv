import React from 'react';
const languages = [
{
  name: 'GERMAN',
  level: 'Mother language'
},
{
  name: 'ENGLISH',
  level: 'Advanced Level'
}];

export function Languages() {
  return (
    <section>
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-6">
        LANGUAGES
      </h2>
      <div className="flex gap-6">
        {languages.map((language, index) =>
        <div key={index} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-4 border-gray-400 flex flex-col items-center justify-center mb-2">
              <span className="text-xs font-bold text-gray-900 text-center leading-tight">
                {language.name}
              </span>
              <span className="text-[10px] text-gray-600 mt-0.5 text-center leading-tight">
                {language.level}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>);

}