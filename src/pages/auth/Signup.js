import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  return (
    <LoginContainer>
      <SubHeading>Kayıt Ol</SubHeading>
      <FormContainer>
        <Label>Ad ve Soyad</Label>
        <Input
          type='text'
          placeholder='Adınızı ve soyadınızı giriniz'
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <Label>E-posta</Label>
        <Input
          type='email'
          placeholder='E-posta adresinizi giriniz'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <Label>Şifre</Label>
        <Input
          type='password'
          placeholder='Şifrenizi giriniz'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <Label>Tekrar şifre</Label>
        <Input
          type='password'
          placeholder='Tekrar şifrenizi giriniz'
          onChange={(e) => setConfirmedPassword(e.target.value)}
          value={confirmedPassword}
          required
        />
        <IsAccount>
          <AskText>Hesabınız var mı?</AskText>
          <AskLink to='/giris-yap'>Giriş Yap</AskLink>
        </IsAccount>
        <Button>Kayıt ol</Button>
      </FormContainer>
    </LoginContainer>
  );
};
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 80vh;
  background-color: #2e4053;
  border-radius: 10px;
  margin: 1.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.11);
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 25%;
  padding: 1.2rem;
  background-color: #f2f4f4;
  border-radius: 5px;
`;
const SubHeading = styled.legend`
  font-weight: 600;
  font-size: 2.6rem;
  color: #fff;
  text-align: center;
`;
const Input = styled.input`
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  font-weight: 700;
  border: none;
  border-radius: 5px;
  background-color: #283747;
  padding: 10px 20px;
  color: #fff;
  &: hover {
    background-color: #f7dc6f;
    color: #283747;
  }
`;
const Label = styled.label`
  text-align: left;
  font-weight: 500;
`;
const IsAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const AskText = styled.p`
  color: #283747;
`;
const AskLink = styled(Link)`
  color: #283747;
`;

export default Signup;
