import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Sss = () => {
  const [question, setQuestion] = useState([]);

  const [param, setParam] = useState(null);
  const fetchQuestions = () => {
    axios
      .get('https://mocki.io/v1/163f95c8-0347-4800-888c-988c32bd1928')
      .then((response) => setQuestion(response.data));
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const toggleAccordion = (id) => {
    setParam(param === id ? null : id);
  };

  return (
    <FaqSection>
      <FaqTitle>Sıkça sorulan sorular</FaqTitle>
      {question.map((el) => (
        <FaqItem key={el.id}>
          <FaqQuestion onClick={() => toggleAccordion(el.id)}>
            {el.question}
          </FaqQuestion>
          {param === el.id && <FaqAnswer>{el.answer}</FaqAnswer>}
        </FaqItem>
      ))}
    </FaqSection>
  );
};
const FaqSection = styled.section`
  text-align: center;
  margin-bottom: 2rem;
`;
const FaqItem = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FaqTitle = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  color: #283747;
`;

const FaqQuestion = styled.p`
  background-color: #d5dbdb;
  border-radius: 5px;
  padding: 15px;
  color: #283747;
  font-weight: 600;
`;

const FaqAnswer = styled.p`
  background-color: #283747;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  padding: 1rem;
`;
export default Sss;
