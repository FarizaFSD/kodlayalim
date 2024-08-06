import React from 'react';
import styled from 'styled-components';
import children from '../../images/children.jpg';
import CTA from '../../components/CTA';
import { Link } from 'react-router-dom';

const Children = () => {
  return (
    <>
      <ChildrenSection>
        <LinkWrapper>
          <IndexLink to='/'>Anasayfa</IndexLink>
          <span>/</span>
          <CurrentLink>Çocuklar</CurrentLink>
        </LinkWrapper>
        <ChildrenHeading>Çocuklar</ChildrenHeading>
        <ChildrenWrapper>
          <ChildrenImage
            src={children}
            alt='Adult with PC'
          />
          <ChildrenText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </ChildrenText>
        </ChildrenWrapper>
      </ChildrenSection>
      <CTA />
    </>
  );
};
const ChildrenSection = styled.section`
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 100%;
  text-align: center;
`;
const ChildrenHeading = styled.h1`
  font-weight: 900;
  font-size: 2.2rem;
  color: #283747;
`;
const ChildrenWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const ChildrenText = styled.p`
  font-size: 1.2rem;
  color: #283747;
  max-width: 50%;
  margin: 1rem;
  text-align: center;
`;
const ChildrenImage = styled.img`
  max-width: 50%;
  border-radius: 10px;
  margin: 1rem;
`;
const LinkWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IndexLink = styled(Link)`
  color: #283747;
  &: hover {
    text-decoration: none;
  }
`;
const CurrentLink = styled(Link)`
  color: #566573;
  text-decoration: none;
`;
export default Children;
