import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const VideoBox = () => {
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchVideos = () => {
    axios
      .get('https://mocki.io/v1/a1e92535-adcd-4f28-8a3d-42ac6ec6c27d')
      .then((response) => {
        setCourses(response.data);
      });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const openCourse = (id) => {
    setOpen(true);
  };
  const closeCourse = () => setOpen(false);
  return (
    <Courses>
      <BoxV>
        <SubHeading>Kurslarımız</SubHeading>
        <Paragraph>
          Kariyerinizi geliştirecek en iyi kursları keşfedin. Aşağıdaki
          lislelerin ihtiyacınıza uygun olan kursu seçebilirsiniz.
        </Paragraph>
      </BoxV>

      <VideoB>
        {courses.map((el) => (
          <>
            <Card
              key={el.id}
              onClick={() => openCourse(el.id)}>
              <Img
                src={el.image}
                alt={el.title}
              />
              <Paragraph>{el.title}</Paragraph>
            </Card>
            {open && (
              <StyledModal
                open={open}
                onClose={closeCourse}
                aria-labelledby='modal-title'
                aria-describedby='modal-description'>
                <StyledBox>
                  <Typography
                    id='modal-title'
                    variant='h4'
                    component='h2'>
                    Kurs Özeti
                  </Typography>
                  <Typography
                    id='modal-description'
                    sx={{ mt: 2 }}>
                    {' '}
                    Kısa Tanıtım Video izleyebilirsiniz!
                  </Typography>
                  <Img
                    src={el.image}
                    alt={el.title}
                  />
                  <Paragraph>{el.title}</Paragraph>
                </StyledBox>
              </StyledModal>
            )}
          </>
        ))}
      </VideoB>
    </Courses>
  );
};

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
`;
const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: white;
  border: 2px solid #283747;
  box-shadow: 24px;
  padding: 16px;
  text-align: center;
`;

const VideoB = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;
const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #283747;
`;
const Card = styled.div`
  width: 20%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 1rem;
`;

const Img = styled.img`
  width: 200px;
  border-radius: 5px;
`;
const SubHeading = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  color: #283747;
`;
const Courses = styled.div`
  border-radius: 10px;
  margin: 1.5rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;
const BoxV = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export default VideoBox;
