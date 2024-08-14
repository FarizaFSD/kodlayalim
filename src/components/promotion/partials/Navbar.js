import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../images/logo.png';
const Navbar = () => {
  return (
    <NavContainer>
      <Authorization>
        <AuthLinks>
          <MyLink to='/kayit-ol'>Kayıt Ol</MyLink>
          <MyLink to='/giris-yap'>Giriş Yap</MyLink>
        </AuthLinks>
      </Authorization>
      <NavContent>
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
        <BtnLink to='/ucretsiz-deneme'>Ücretsiz Dene</BtnLink>
      </NavContent>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1rem;
  font-weight: 500;
  @media (max-width: 1024px) {
    padding: 0.8rem 0.8rem;
    gap: 0.4rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.5rem;
    gap: 0.3rem;
  }
`;
const Logo = styled.img`
  width: 2.5rem;
  margin-left: 2rem;
`;
const Authorization = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 70%;
  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;
const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;
const AuthLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: #283747;
  &:hover {
    color: #5d6d7e;
  }
`;
const BtnLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  color: #fff;
  background-color: #283747;
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: 600;
  &:hover {
    background-color: #f7dc6f;
    color: #283747;
  }
`;
export default Navbar;
