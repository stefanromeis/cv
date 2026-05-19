import React from 'react';

export function Publications() {
  return (
    <section className="mb-8">
      <h2 className="text-sm font-bold tracking-wider text-gray-900 mb-4">
        PUBLICATIONS
      </h2>
      <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
        <div>
          <div className="font-semibold">The Whole Web On One Site</div>
          <div>Analysis, Design and Implementation of a Single Page Application with Aurelia.io</div>
          <div className="italic">Master's Thesis, Beuth University of Applied Sciences Berlin, 2017</div>
          <div className="mt-1">Master of Science (M.Eng.), Media Informatics</div>
        </div>
        <div>
          <div className="font-semibold mt-4">Natural User Interfaces</div>
          <div>Implementation of a School Route Trainer with Microsoft Kinect and Google Street View</div>
          <div className="italic">Bachelor's Thesis, Beuth University of Applied Sciences Berlin, 2014</div>
          <div className="mt-1">Bachelor of Science (B.Eng.), Media Informatics</div>
        </div>
      </div>
    </section>
  );
}
