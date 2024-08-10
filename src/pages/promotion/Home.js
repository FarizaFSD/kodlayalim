import React from 'react';
import VideoBox from '../../components/promotion/VideoBox';
import Sss from '../../components/promotion/Sss';
import EducationSearch from '../../components/promotion/EducationSearch';
import Reason from '../../components/promotion/Reason';
import CTA from '../../components/promotion/CTA';

const Home = () => {
  return (
    <>
      <EducationSearch />
      <Reason />
      <VideoBox />
      <Sss />
      <CTA />
    </>
  );
};

export default Home;
