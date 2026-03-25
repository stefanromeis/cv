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
      <div className="flex gap-8 justify-center">
        {languages.map((language, index) =>
        <div key={index} className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-8 border-gray-400 flex flex-col items-center justify-center mb-3">
              <span className="text-sm font-bold text-gray-900">
                {language.name}
              </span>
              <span className="text-xs text-gray-600 mt-1">
                {language.level}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>);

}