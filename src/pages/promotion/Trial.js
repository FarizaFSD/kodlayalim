import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Trial = () => {
  const lessons = [
    {
      id: 1,
      title: '1. Internet, browser, domain tanımları',
      source: 'https://www.youtube.com/embed/NErrGZ64OdE?si=OXAsmHAkCvbNRcB_',
      description:
        ' Internet. Browser.Domain. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 2,
      title: '2. HTML5 konseptleri',
      source: 'https://www.youtube.com/embed/TxZwqVTaCmA?si=UwOZF9ca4tW-0ea8',
      description:
        ' HTML CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 3,
      title: '3. CSS3 ana kavramları',
      source: 'https://www.youtube.com/embed/SqcY0GlETPk?si=LAYRCLWf6z6_0PiC',
      description:
        'CSS CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 4,
      title: '4. SASS avantajları',
      source: 'https://www.youtube.com/embed/_uQrJ0TkZlc?si=G3JCL-9OwkRqqPrg ',
      description:
        'SASS CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 5,
      title: '5. GitHub önemi',
      source: 'https://www.youtube.com/embed/k9WqpQp8VSU?si=U2sbDJzWF3VKnZWe',
      description:
        'GITHUB CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 6,
      title: '6. JavaScript(başlangıç seviyesi)',
      source: 'https://www.youtube.com/embed/NpUuuT_EzSs?si=Ch_RZma46QuX3iOE',
      description:
        'JAVASCRIPT CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 7,
      title: '7. JavaScript(ileri seviyesi)',
      source: 'https://www.youtube.com/embed/lsMQRaeKNDk?si=rFEnqPtGgiUSDxtT',
      description:
        'JAVASCRIPT - ADVANCED LEVEL. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 8,
      title: '8. REST API nedir',
      source: 'https://www.youtube.com/embed/2mqN7ZhDsUA?si=seWCfU47G0arbadJ',
      description:
        'API CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 9,
      title: '9. React.js nedir',
      source: 'https://www.youtube.com/embed/pBSch5AsJWs?si=oAxXFWleYgWBu43Y',
      description:
        'REACT CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 10,
      title: '10. CSS3 ana kavramları',
      source: 'https://www.youtube.com/embed/NErrGZ64OdE?si=OXAsmHAkCvbNRcB_',
      description:
        'CSS MAIN CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 11,
      title: '11. Bootstrap avantajları',
      source: 'https://www.youtube.com/embed/TxZwqVTaCmA?si=UwOZF9ca4tW-0ea8',
      description:
        'BOOTSTRAP CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 12,
      title: '12. Webpack önemi',
      source: 'https://www.youtube.com/embed/SqcY0GlETPk?si=LAYRCLWf6z6_0PiC',
      description:
        'WEBPACK CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 13,
      title: '13. Python(başlangıç seviyesi)',
      source: 'https://www.youtube.com/embed/_uQrJ0TkZlc?si=G3JCL-9OwkRqqPrg ',
      description:
        'PYTHON CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 14,
      title: '14. Python(ileri seviyesi)',
      source: 'https://www.youtube.com/embed/k9WqpQp8VSU?si=U2sbDJzWF3VKnZWe',
      description:
        'PYTHON ADVANCED CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 15,
      title: '15. Node.js nedir',
      source: 'https://www.youtube.com/embed/NpUuuT_EzSs?si=Ch_RZma46QuX3iOE',
      description:
        'NODE.JS CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 16,
      title: '16. Redux Toolkit nedir',
      source: 'https://www.youtube.com/embed/lsMQRaeKNDk?si=rFEnqPtGgiUSDxtT',
      description:
        'REDUX TOOLKIT CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 17,
      title: '17. SQL nedir',
      source: 'https://www.youtube.com/embed/2mqN7ZhDsUA?si=seWCfU47G0arbadJ',
      description:
        'SQL CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
    {
      id: 18,
      title: '18. Tailwind CSS nedir',
      source: 'https://www.youtube.com/embed/pBSch5AsJWs?si=oAxXFWleYgWBu43Y',
      description:
        'TAILWIND CONCEPTS. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.',
    },
  ];

  const [video, setVideo] = useState(
    'https://www.youtube.com/embed/NErrGZ64OdE?si=OXAsmHAkCvbNRcB_'
  );
  const [title, setTitle] = useState('1. Internet, browser, domain tanımları');
  const [desc, setDesc] = useState(
    ' Internet. Browser.Domain. Vestibulum lacus ligula sollicitudin ultrices parturient nunc.'
  );
  const lessonHandler = (id) => {
    let kurs = lessons.find((data) => data.id === id);
    setVideo(kurs.source);
    setTitle(kurs.title);
    setDesc(kurs.description);
  };
  return (
    <TrialSection>
      <LinkWrapper>
        <IndexLink to='/'>Anasayfa</IndexLink>
        <span>/</span>
        <CurrentLink>Ucretsiz dene</CurrentLink>
      </LinkWrapper>
      <TrialHeader>Deneme dersleri izleyip karar verin!</TrialHeader>
      <TrialWrapper>
        <TrialVideoWrapper>
          <>
            <TrialVideo
              width='560'
              height='315'
              src={video}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen></TrialVideo>
            <TrialTitle>{title}</TrialTitle>
            <TrialText>{desc}</TrialText>
          </>
        </TrialVideoWrapper>

        <TrialLessons>
          <TrialLessonHeading>Ücretsiz dersler</TrialLessonHeading>
          {lessons.map((el) => (
            <TrialLesson
              key={el.id}
              onClick={() => lessonHandler(el.id)}>
              {el.title}
            </TrialLesson>
          ))}
        </TrialLessons>
      </TrialWrapper>
    </TrialSection>
  );
};
const TrialSection = styled.section`
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  height: 100%;
  text-align: center;
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
const TrialHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #283747;
  text-decoration: underline 3px solid #f7dc6f;
`;
const TrialWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
`;
const TrialLessonHeading = styled.h3`
  text-align: start;
  color: #283747;
`;
const TrialVideoWrapper = styled.div`
  width: 70%;
  border: 2px solid #283747;
  border-radius: 10px;
`;

const TrialVideo = styled.iframe`
  border-radius: 8px 0 8px 0 0;
  width: 100%;
  height: 500px;
`;
const TrialTitle = styled.h2`
  text-align: start;
  color: #283747;
  margin: 2rem;
  text-decoration: underline 2px solid #f7dc6f;
`;
const TrialText = styled.p`
  color: #283747;
  text-align: start;
  margin: 2rem;
`;
const TrialLessons = styled.div`
  width: 30%;
  border: 2px solid #283747;
  border-radius: 10px;
  padding: 1rem;
  max-height: 42em;
  overflow-y: auto;
`;
const TrialLesson = styled.p`
  text-align: start;
  color: #283747;
  border: 2px solid #f7dc6f;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
`;
export default Trial;
