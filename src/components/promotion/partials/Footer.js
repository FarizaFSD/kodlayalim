import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../images/logo.png';
import Cookies from '../../Cookies';

const Footer = () => {
  return (
    <>
      <Cookies />
      <FootContainer>
        <Logo
          src={logo}
          alt='Logo'
        />
        <LinksContainer>
          <MyLink to='/'>Anasayfa</MyLink>
          <MyLink to='/hakkimizda'>Hakkımızda</MyLink>
          <MyLink to='/planlar'>Planlar</MyLink>
          <MyLink to='/cocuklar'>Çocuklar</MyLink>
          <MyLink to='/liseliler'>Liseliler</MyLink>
          <MyLink to='/yetiskinler'>Yetişkinler</MyLink>
        </LinksContainer>
        <LinksContainer>
          <MyLink to='/gizlilik-politikasi'>Gizlilik Politikası</MyLink>
          <MyLink to='/kvkk'>KVKK</MyLink>
          <MyLink to='/sss'>SSS</MyLink>
        </LinksContainer>
        <LinksContainer>
          <ContactLink href='mailto:info@kodlayalim.com'>
            info@kodlayalim.com
          </ContactLink>
          <ContactLink href='tel:905555555555'>+9 0 555 555 55 55</ContactLink>
        </LinksContainer>
      </FootContainer>
    </>
  );
};
const FootContainer = styled.div`
  position: relative;
  background-color: #d5dbdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  font-weight: 500;
  margin: 1.5rem;
  border-radius: 5px;
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: center;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: #283747;
  &:hover {
    color: #5d6d7e;
  }
`;
const ContactLink = styled.a`
  text-decoration: none;
  color: #283747;
  &:hover {
    color: #5d6d7e;
  }
`;
const Logo = styled.img`
  width: 2rem;
  margin-left: 2rem;
`;
export default Footer;
