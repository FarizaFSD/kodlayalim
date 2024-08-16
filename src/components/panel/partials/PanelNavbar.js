import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PanelNavbar = () => {
  const cikisYap = () => {};
  return (
    <PanelNavContainer>
      <MyLink to='dersler'>Dersler</MyLink>
      <MyLink to='canli-dersler'>Canlı dersler</MyLink>
      <MyLink to='mesajlar'>Mesajlar</MyLink>
      <MyLink to='notlar'>Notlar</MyLink>
      <Button onClick={cikisYap}>Çıkış Yap</Button>
    </PanelNavContainer>
  );
};
const PanelNavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #aeb6bf;
  padding: 2rem;
`;
const Button = styled.button`
  cursor: pointer;
  &: hover {
    background-color: #5d6d7e;
  }
  border: none;
  border-radius: 7px;
  background-color: #283747;
  color: #fff;
  font-weight: 700;
  padding: 10px 20px;
  font-size: 1.2rem;
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
