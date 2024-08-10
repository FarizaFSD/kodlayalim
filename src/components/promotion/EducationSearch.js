import React, { useState } from 'react';
import hero from '../images/hero-section.webp';
import styled from 'styled-components';
import axios from 'axios';

// htts://proje-bir.altayagency.com/api/search

const EducationSearch = () => {
  const [value, setValue] = useState('');

  const handler = () => {
    let response = axios.post('htts://proje-bir.altayagency.com/api/search', {
      value,
    });
    console.log(response);
  };

  return (
    <SectionOne>
      <BoxOne>
        <Heading>En iyi Yazılım Eğitimleri</Heading>
        <Paragraph>
          En iyi yazılım eğitimleri ile kendini geliştirin. Aşağıda kurslarımızı{' '}
          <br />
          arayabilirsiniz.
        </Paragraph>
        <Form onSubmit={handler}>
          <Search
            type='text'
            placeholder='Eğitim ara...'
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <Button type='submit'>Ara</Button>
        </Form>
      </BoxOne>
      <BoxTwo>
        <Pic
          src={hero}
          alt='laptop with code on the screen'
        />
      </BoxTwo>
    </SectionOne>
  );
};

const SectionOne = styled.section`
  background-color: #d5dbdb;
  border-radius: 10px;
  display: flex;
  margin: 1.5rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
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
  @media (max-width: 900px) {
    max-width: 100%;
    height: 100%;
  }
`;
const Heading = styled.h1`
  font-weight: 900;
  font-size: 3rem;
  color: #283747;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #283747;
`;
const Search = styled.input`
  width: 70%;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Pic = styled.img`
  border-radius: 10px;
  max-width: 100%;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    height: 80%;
  }
`;
const Form = styled.form`
  display: flex;
  gap: 7px;
`;
const Button = styled.button`
  border: none;
  background-color: #283747;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: 550;
  &: hover {
    background-color: #f7dc6f;
    color: #283747;
  }
`;
export default EducationSearch;
