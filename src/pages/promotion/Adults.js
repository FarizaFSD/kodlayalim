import React from 'react';
import styled from 'styled-components';
import adults from '../../images/adults.jpg';
import CTA from '../../components/promotion/CTA';
import { Link } from 'react-router-dom';

const Adults = () => {
  return (
    <>
      <AdultsSection>
        <LinkWrapper>
          <IndexLink to='/'>Anasayfa</IndexLink>
          <span>/</span>
          <CurrentLink>Yetişkinler</CurrentLink>
        </LinkWrapper>
        <AdultsHeading>Yetişkinler</AdultsHeading>
        <AdultsWrapper>
          <AboutImage
            src={adults}
            alt='Adult with PC'
          />
          <AdultsText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </AdultsText>
        </AdultsWrapper>
      </AdultsSection>
      <CTA />
    </>
  );
};
const AdultsSection = styled.section`
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  height: 100%;
  text-align: center;
`;
const AdultsHeading = styled.h1`
  font-weight: 900;
  font-size: 2.2rem;
  color: #283747;
`;
const AdultsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const AdultsText = styled.p`
  font-size: 1.2rem;
  color: #283747;
  max-width: 50%;
  margin: 1rem;
  text-align: center;
`;
const AboutImage = styled.img`
  max-width: 50%;
  max-height: 100%;
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
export default Adults;
