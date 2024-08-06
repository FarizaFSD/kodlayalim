import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginContainer>
      <SubHeading>Giriş yap</SubHeading>
      <FormContainer>
        <Label>E-posta</Label>
        <Input
          type='email'
          placeholder='E-posta adresinizi giriniz'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Label>Şifre</Label>
        <Input
          type='password'
          placeholder='Şifrenizi giriniz'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <IsAccount>
          <AskText>Hesabınız yok mu?</AskText>
          <AskLink to='/kayit-ol'>Kayıt Ol</AskLink>
        </IsAccount>

        <Button>Giriş Yap</Button>
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
  background-color: #d5dbdb;
  border-radius: 10px;
  margin: 1.5rem;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1);
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 250px;
  border-radius: 5px;
  padding: 1.2rem;
  width: 25%;
  background-color: #f2f4f4;
`;
const SubHeading = styled.legend`
  font-weight: 600;
  font-size: 2.4rem;
  color: #283747;
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
  text-align: center;
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

export default Login;
