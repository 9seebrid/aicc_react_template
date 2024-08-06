import React from 'react';
import MainSection from './MainSection';
import DetailSection from './DetailSection';
import PeopleSection from '../Home/PeopleSection';

const index = () => {
  return (
    <div>
      <div className="container">
        <MainSection />
        <DetailSection />
      </div>
    </div>
  );
};

export default index;
