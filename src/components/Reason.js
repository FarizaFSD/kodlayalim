import React from 'react';
import styled from 'styled-components';
import section2 from '../images/section2.jpg';

const Reason = () => {
  return (
    <SectionTwo>
      <BoxTwo>
        <Pic
          src={section2}
          alt='course'
        />
      </BoxTwo>
      <BoxOne>
        <SubHeading>Neden Kodlayalım?</SubHeading>
        <Paragraph>
          Kodlayalım,en güncel ve kaliteli yazılım eğitimlerini
          sunar.Eğitinlerimiz alanında uzmanlar ve size en iyi eğitim deneyimini
          sunmayı hedefler.Kodlayalım ile kariyerinize güçlü bir başlangıç
          yapabilirsiniz.
        </Paragraph>
      </BoxOne>
    </SectionTwo>
  );
};

const SectionTwo = styled.section`
  border-radius: 10px;
  display: flex;
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
`;

const BoxOne = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 100%;
`;

const BoxTwo = styled.div`
  width: 100%;
`;

const SubHeading = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  color: #283747;
`;
const Paragraph = styled.p`
  font-size: 1rem;
  color: #283747;
`;

const Pic = styled.img`
  border-radius: 10px;
  max-width: 100%;
`;
export default Reason;
