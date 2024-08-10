import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Cookies = () => {
  // const [visited, setVisited] = useState(0);
  // const logins = JSON.parse(localStorage.getItem('logins')) || [];
  // let login = {
  //   isLogin: { visited },
  // };
  // const cookies = () => {
  //   logins.push(login);
  //   localStorage.setItem('logins', JSON.stringify(logins));
  //   setVisited(1);
  // };

  // useEffect(() => {}, []);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowCookieBanner(false);
  };
  return (
    <>
      {showCookieBanner === true ? (
        <CookiesContainer>
          <CookiesTextContainer>
            <CookieText>
              Bu site çerez kullanıyor. Daha fazla bilgi için gizlilik
              politikamızı okuyun.
            </CookieText>
          </CookiesTextContainer>
          <BtnsContainer>
            <ButtonAccept onClick={handleAccept}>Kabul et</ButtonAccept>
            <Button type='button'>Ayarla</Button>
            <Button type='button'>Reddet</Button>
          </BtnsContainer>
        </CookiesContainer>
      ) : (
        ''
      )}
    </>
  );
};
const CookiesContainer = styled.div`
  position: sticky;
  bottom: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  padding: 1rem;
  text-align: center;
  background-color: #fcf3cf;
  width: 30%;
  margin-left: 1.5rem;
`;

const CookiesTextContainer = styled.div`
  width: 100%;
`;
const CookieText = styled.p`
  color: #283747;
  font-weight: 500;
  font-size: 1rem;
`;
const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const ButtonAccept = styled.button`
  border: none;
  background-color: #283747;
  color: #f7dc6f;

  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  &: hover {
    background-color: #f7dc6f;
    color: #283747;
  }
`;
const Button = styled.button`
  border: none;
  background-color: #f7dc6f;
  color: #283747;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  &: hover {
    background-color: #283747;
    color: #f7dc6f;
  }
`;
export default Cookies;
