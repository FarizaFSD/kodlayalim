import React from 'react';
import styled from 'styled-components';
import CTA from '../../components/promotion/CTA';
import teens from '../../images/teens.jpg';
import { Link } from 'react-router-dom';

const Teens = () => {
  return (
    <>
      <TeensSection>
        <LinkWrapper>
          <IndexLink to='/'>Anasayfa</IndexLink>
          <span>/</span>
          <CurrentLink>Liseliler</CurrentLink>
        </LinkWrapper>
        <TeensHeading>Liseliler</TeensHeading>
        <TeensWrapper>
          <TeensImage
            src={teens}
            alt='Adult with PC'
          />
          <TeensText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </TeensText>
        </TeensWrapper>
      </TeensSection>
      <CTA />
    </>
  );
};
const TeensSection = styled.section`
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  height: 100%;
  text-align: center;
`;
const TeensHeading = styled.h1`
  font-weight: 900;
  font-size: 2.2rem;
  color: #283747;
`;
const TeensWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const TeensText = styled.p`
  font-size: 1.2rem;
  color: #283747;
  max-width: 50%;
  margin: 1rem;
  text-align: center;
`;
const TeensImage = styled.img`
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
export default Teens;
