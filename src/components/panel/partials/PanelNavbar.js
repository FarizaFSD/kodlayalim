import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PanelNavbar = () => {
  return (
    <PanelNavContainer>
      <MyLink to='dersler'>Dersler</MyLink>
      <MyLink to='canli-dersler'>Canlı dersler</MyLink>
      <MyLink to='mesajlar'>Mesajlar</MyLink>
      <MyLink to='notlar'>Notlar</MyLink>
    </PanelNavContainer>
  );
};
const PanelNavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #aeb6bf;
  padding: 2rem;
`;

const MyLink = styled(Link)`
  color: #283747;
  font-weight: 800;
  font-size: 1.4rem;
  text-decoration: none;
  cursor: pointer;
  &: hover {
    text-decoration: underline;
  }
`;
export default PanelNavbar;
