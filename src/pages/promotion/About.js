import React from 'react';
import styled from 'styled-components';
import about from '../../images/about.jpg';
import vision from '../../images/vision.jpg';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <AboutSection>
        <LinkWrapper>
          <IndexLink to='/'>Anasayfa</IndexLink>
          <span>/</span>
          <CurrentLink>Hakkımızda</CurrentLink>
        </LinkWrapper>
        <AboutHeading>Hakkımızda</AboutHeading>
        <AboutWrapper>
          <AboutText>
            Hakkımızda Yazısının Unsurları Hakkımızda bölümünde “biz buyuz”
            demek için şirketinizi, değerlerinizi, misyon ve vizyonunuzu açık,
            doğru ve net bilgilerle anlatabilirsiniz. Markanızın imajını
            güçlendirecek olan bu yazıda ürün ya da satışa odaklanmak yerine
            markanızın kimliğini ön plana çıkarmanız gerekir. Hakkımızda
            Yazısının Unsurları Hakkımızda bölümünde “biz buyuz” demek için
            şirketinizi, değerlerinizi, misyon ve vizyonunuzu açık, doğru ve net
            bilgilerle anlatabilirsiniz. Markanızın imajını güçlendirecek olan
            bu yazıda ürün ya da satışa odaklanmak yerine markanızın kimliğini
            ön plana çıkarmanız gerekir.
          </AboutText>
          <AboutImage
            src={about}
            alt='Joy of life-long learning process'
          />
        </AboutWrapper>
      </AboutSection>
      <VisionContainer>
        <VisionTitle>Vizyonumuz</VisionTitle>
        <VisionWrapper>
          <VisionImage
            src={vision}
            alt='Vision'
          />
          <VisionText>
            {' '}
            Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat
            venenatis integer metus venenatis, enim primis class dictum. Metus
            porttitor nullam ac luctus cursus. Natoque senectus lobortis dictum
            ipsum aptent sem vivamus. Habitasse lectus ligula conubia elementum
            non pharetra cras non. Scelerisque inceptos porttitor semper
            bibendum sagittis felis. Massa aliquet eu ridiculus, rutrum torquent
            dictum libero. Vestibulum lacus ligula sollicitudin ultrices
            parturient nunc. Maximus lectus facilisi felis morbi curabitur ad
            sollicitudin ridiculus. Dignissim tempor elementum tristique sem ad
            justo molestie. Fusce accumsan porttitor etiam ad nisi ante etiam.
            Neque eu ridiculus libero sit nam interdum. Sapien neque hac integer
            placerat elit aenean ultrices efficitur. Ipsum pretium consequat
            vulputate, ligula faucibus nec nisi tincidunt. Auctor iaculis
            senectus tellus; egestas dignissim habitant. Nullam venenatis sapien
            vestibulum inceptos ornare; dis magna. Eros phasellus donec pulvinar
            ac pulvinar nisl dui. Aenean dui aliquet aliquam dolor etiam orci
            montes. Quam proin accumsan consectetur accumsan himenaeos at. Sem
            tempor non vitae curae volutpat ipsum. Dictum nisi maximus nunc
            nascetur nam purus ornare tristique litora. Luctus rhoncus augue
            luctus habitant consequat. Hendrerit aliquet gravida suspendisse
            efficitur class mauris semper. Hac in massa nec enim fermentum.
            Etiam pretium commodo dapibus conubia dapibus porttitor penatibus.
            Integer potenti netus urna rhoncus; curabitur ligula urna. Lacus
            ridiculus habitant finibus a fusce imperdiet.
          </VisionText>
        </VisionWrapper>
      </VisionContainer>
    </>
  );
};
const AboutSection = styled.section`
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 100%;
  text-align: center;
`;
const AboutHeading = styled.h1`
  font-weight: 900;
  font-size: 2.2rem;
  color: #283747;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #283747;
  max-width: 50%;
  margin: 1rem;
  text-align: center;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;
const AboutImage = styled.img`
  max-width: 50%;
  max-height: 50%;
  border-radius: 10px;
  margin: 1rem;
  @media (max-width: 1024px) {
    max-width: 40%;
    max-height: auto;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    order: -1;
  }
`;
const AboutWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const VisionContainer = styled.div`
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;
const VisionWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const VisionImage = styled.img`
  max-width: 30%;
  border-radius: 10px;
  margin: 1rem;
  @media (max-width: 900px) {
    max-width: 100%;
    order: -1;
  }
`;
const VisionTitle = styled.h2`
  font-size: 2rem;
  color: #283747;
`;
const VisionText = styled.p`
  font-size: 1.2rem;
  color: #283747;
  margin: 1rem;
  text-align: center;
  max-width: 60%;
  @media (max-width: 900px) {
    max-width: 100%;
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
export default About;
