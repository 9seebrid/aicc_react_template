import React from 'react';
import { features } from '../../constants/data';

const FeaturesSection = () => {
  return (
    <div className="my-20 border-b border-neutral-700">
      <div>
        <span
          className="bg-neutral-800 text-indigo-500 rounded-full h-8 font-medium
          px-4 py-1 uppercase block w-fit m-auto mb-20"
        >
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold font-customFontEn text-center">
          Easily Build{' '}
          <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
        <div className="container grid lg:grid-cols-3 grid-cols-2">
          {features.map((item, idx) => (
            <div key={idx}>
              {item.icon}
              {item.text}
              {item.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
