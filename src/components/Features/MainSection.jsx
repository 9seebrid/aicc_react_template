import React from 'react';
import MainImg from '../../assets/feature_main.jpg';

const MainSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full xl:w-5/6">
        <img src={MainImg} alt="FeatursMain_Image" />
      </div>
      <div></div>
    </div>
  );
};

export default MainSection;
