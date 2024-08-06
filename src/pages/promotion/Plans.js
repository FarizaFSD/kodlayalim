import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bestSeller from '../../images/best-seller.png';

const Plans = () => {
  const plans = [
    {
      id: 1,
      title: 'Başlangıç',
      description:
        'lorem  lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem',
      price: '9$/ay',
      button: 'Şimdı Katılın',
    },
    {
      id: 2,
      title: 'Profesyonel',
      description:
        'lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem',
      price: '19$/ay',
      button: 'Şimdı Katılın',
    },
    {
      id: 3,
      title: 'Premium',
      description:
        'lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem',
      price: '27$/ay',
      button: 'Şimdı Katılın',
    },
  ];
  return (
    <PlansSection>
      <LinkWrapper>
        <IndexLink to='/'>Anasayfa</IndexLink>
        <span>/</span>
        <CurrentLink>Planlar</CurrentLink>
      </LinkWrapper>
      <PlansHeading>Sizin için en iyi planı seçiniz!</PlansHeading>
      <PlansWrapper>
        {plans.map((el) =>
          el.id === 2 ? (
            <PlansCardBest>
              <PlansTitle>{el.title}</PlansTitle>
              {el.id === 2 ? (
                <PlanIcon
                  src={bestSeller}
                  alt='best seller icon'
                />
              ) : (
                ''
              )}
              <PlansText>{el.description}</PlansText>
              <PlansPrice>{el.price}</PlansPrice>
              <PlansButton>{el.button}</PlansButton>
            </PlansCardBest>
          ) : (
            <PlansCard key={el.id}>
              <PlansTitle>{el.title}</PlansTitle>
              {el.id === 2 ? (
                <PlanIcon
                  src={bestSeller}
                  alt='best seller icon'
                />
              ) : (
                ''
              )}
              <PlansText>{el.description}</PlansText>
              <PlansPrice>{el.price}</PlansPrice>
              <PlansButton>{el.button}</PlansButton>
            </PlansCard>
          )
        )}
      </PlansWrapper>
    </PlansSection>
  );
};
const PlansSection = styled.section`
  margin: 1.5rem;

  padding: 1rem;
  border-radius: 10px;
  height: 100vh;
  text-align: center;
`;
const PlansHeading = styled.h1`
  font-weight: 900;
  font-size: 2.2rem;
  color: #283747;
`;
const PlansWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;
const PlansCard = styled.div`
  position: relative;
  width: 20%;
  border-radius: 5px;
  padding: 2rem 2.5rem;
  box-shadow: 0 5px 9px rgba(0, 0, 0, 0.19);
  &: hover {
    box-shadow: 0 5px 9px #f7dc6f;
  }
`;
const PlansCardBest = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 2rem 2.5rem;
  box-shadow: 0 5px 9px rgba(0, 0, 0, 0.19);
  &: hover {
    box-shadow: 0 5px 9px #f7dc6f;
  }
  width: 28%;
  border: 2px solid #f7dc6f;
`;
const PlansTitle = styled.h4`
  background-color: #f7dc6f;
  color: #283747;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.4rem;
`;
const PlansText = styled.p`
  color: #283747;
  font-weight: 500;
  font-size: 1.1rem;
`;
const PlansPrice = styled.p`
  font-weight: 700;
  color: #283747;
  font-size: 2.7rem;
`;
const PlansButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  background-color: #283747;
  color: #f7dc6f;
  font-weight: 600;
  font-size: 1rem;
  &: hover {
    background-color: #34495e;
    color: #f1c40f;
  }
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

const PlanIcon = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: -15px;
  left: 380px;
`;
export default Plans;
/*&::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    width: 20px;
    height: 20px;
    background-image: url('../../images/best-seller.png');
    background-size: contain;
    background-repeat: no-repeat;
  }*/
