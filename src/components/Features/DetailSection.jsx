import React, { useState } from 'react';
import { featuresDetail } from '../../constants/data';

const DetailSection = () => {
  const [closed, setClosed] = useState(false);
  const handleMoreBtn = () => {
    setClosed(!closed);
    console.log(closed);
  };
  return (
    <div>
      <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold font-customFontEn text-center mb-20">
          Easily Build{' '}
          <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
        <div>
          {featuresDetail.map((item, idx) => (
            <div key={idx} className="text-center w-[80%] m-auto">
              <h5 className="my-10 text-3xl sm:text-4xl">{item.text}</h5>
              <div className="w-full p-8 border rounded-xl border-neutral-700">
                <p className={`${closed === true ? '' : 'truncate'} w-[90%] m-auto`}>{item.description}</p>
                {/* {`${closed }`} */}
                <button className="pt-8" onClick={handleMoreBtn}>
                  {closed ? 'Less' : 'More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
