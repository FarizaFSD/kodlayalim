import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import logo from '../../../images/logo.jpg';
const PanelNavbar = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const cikisYap = async () => {
    try {
      const token = localStorage.getItem('authToken');
      let response = await axios.post(
        'http://127.0.0.1:8000/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem('authToken');
      }
    } catch (error) {
      setErrorMessage(
        'Giriş yaparken bir hata oluştu. Lütfen bilgilerinizi kontrol edin.'
      );
      console.error('Login error:', error);
    }
  };
  return (
    <PanelNavContainer>
      <Logo
        src={logo}
        alt='logo'
      />
      <MyLink to='dersler'>Dersler</MyLink>
      <MyLink to='canli-dersler'>Canlı dersler</MyLink>
      <MyLink to='mesajlar'>Mesajlar</MyLink>
      <MyLink to='notlar'>Notlar</MyLink>
      <Button onClick={cikisYap}>Çıkış Yap</Button>
    </PanelNavContainer>
  );
};

const Logo = styled.img`
  width: 5rem;
  border-radius: 5px;
`;
const PanelNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  gap: 2rem;
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
