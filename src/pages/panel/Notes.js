import React from 'react';
import styled from 'styled-components';
const Notes = () => {
  return (
    <LessonsContainer>
      <Heading>Notlar</Heading>
    </LessonsContainer>
  );
};

const LessonsContainer = styled.div`
  background-color: #d6dbdf;
  width: 100%;
`;
const Heading = styled.h1`
  color: #283747;
  text-align: center;
`;
export default Notes;
