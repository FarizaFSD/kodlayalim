import React from 'react';
import VideoBox from '../../components/VideoBox';
import Sss from '../../components/Sss';
import EducationSearch from '../../components/EducationSearch';
import Reason from '../../components/Reason';
import CTA from '../../components/CTA';

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
