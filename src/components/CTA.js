import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <CTAsection>
      <CTAtitle>Hemen Başlayın!</CTAtitle>
      <CTAdescription>
        Kodlayalım ile hemen yazılım eğitimlerine başlayarak kariyerinize yeni
        bir yön verin. Size en uygun kursları bulun ve hemen başlayın!
      </CTAdescription>
      <CTALink to='/kayit-ol'>Kayıt Ol</CTALink>
      <CTALink to='/giris-yap'>Giriş Yap</CTALink>
      <CTALink to='/ucretsiz-deneme'>Ücretsiz Dene</CTALink>
    </CTAsection>
  );
};
const CTAsection = styled.section`
  text-align: center;
  margin: 3rem 1.5rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;
`;

const CTAtitle = styled.h2`
  font-weight: 700;
  font-size: 2.2rem;
  color: #283747;
`;
const CTAdescription = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #283747;
  margin-bottom: 3rem;
`;
const CTALink = styled(Link)`
  background-color: #283747;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  margin-right: 1rem;
  padding: 8px 16px;
  border-radius: 5px;
  &: hover {
    background-color: #f7dc6f;
    color: #283747;
  }
`;

export default CTA;
