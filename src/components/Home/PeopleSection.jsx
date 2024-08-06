import React from 'react';
import { testimonials } from '../../constants/data';

const PeopleSection = () => {
  return (
    <div>
      <div className="tracking-tight font-customFontEn">
        <h2 className="my-20 text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold font-customFontEn text-center">
          What People are Saying
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((item, idx) => (
            <div key={idx} className="w-full p-3 flex sm:w-1/2 lg:w-1/3 text-neutral-400">
              <div className="border p-4 rounded-lg dark:bg-neutral-900 dark:border-neutral-800">
                <p>{item.text}</p>
                <div className="flex mt-5">
                  <img src={item.image} alt="people_Image" className="border w-12 rounded-full mr-5" />
                  <div>
                    <h6>{item.user}</h6>
                    <span className="text-black dark:text-neutral-700 tracking-tighter text-sm">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleSection;
