import React from 'react';
import { MailIcon, PhoneIcon, GlobeIcon } from 'lucide-react';
export function CVHeader() {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 pb-8 border-b border-gray-200">
      {/* Photo and Name Section */}
      <div className="flex items-center gap-6">
        <img
          src="/me.jpg"
          alt="Stefan Romeis"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900">
            STEFAN ROMEIS
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-1">
            Senior Frontend Engineer
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8 md:ml-auto text-sm">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
          <p className="text-gray-600 leading-relaxed">
            Hegelalle 50
            <br />
            14467 Potsdam
            <br />
            GERMANY
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
          <div className="space-y-1">
            <a
              href="mailto:s.romeis@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              
              <MailIcon className="w-4 h-4" />
              s.romeis@gmail.com
            </a>
            <a
              href="tel:+4917281021161"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              
              <PhoneIcon className="w-4 h-4" />
              +49 172 810 21 61
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Web</h3>
          <div className="space-y-1">
            <a
              href="https://linkedin.com/in/romeis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              
              <GlobeIcon className="w-4 h-4" />
              linkedin.com/in/romeis
            </a>
            <a
              href="https://github.com/stefanromeis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              
              <GlobeIcon className="w-4 h-4" />
              github.com/stefanromeis
            </a>
          </div>
        </div>
      </div>
    </header>);

}