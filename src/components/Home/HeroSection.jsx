import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 gap-10">
      <h1
        className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tight
      text-neutral-700 dark:text-neutral-300 font-semibold text-center"
      >
        AceDot Build Tools{' '}
        <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="text-center text-neutral-400 max-w-4xl font-customFontKr lg:text-lg mb:text-sm">
        모든 국민은 인간다운 생활을 할 권리를 가진다. 헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 이
        헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한
        대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.
      </p>
      {/* 태그 안에서는 {()=>{}} 아니고 {()=>()} */}
      <div className="flex gap-4">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={`font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
              idx === 0 && 'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-none'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex mt-10 gap-4 justify-center flex-col md:flex-row items-center">
        <video autoPlay muted loop className="vid md:w-1/2">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-1/2">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
