import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Head from 'next/head';
import Link from 'next/link';

import { Button } from '../components/FormButton/styles';
import Input from '../components/Input';
import MainTitle from '../components/MainTitle';
import { AuthContext } from '../contexts/AuthContext';
import api from '../services/api';
import {
  Form,
  CadastroImage,
  CadastroWrapper,
  FormWrapper,
  AlreadyHave,
} from '../styles/pages/Cadastro';

interface RegisterData {
  username: string;
  name: string;
  email: string;
  password: string;
}

export default function Cadastro() {
  const { handleSubmit, register } = useForm();
  const { signIn } = useContext(AuthContext);
  async function handleRegister({
    username,
    name,
    email,
    password,
  }: RegisterData) {
    await api.post('/users', {
      username,
      name,
      email,
      password,
    });
    await signIn({ username, password });
  }
  return (
    <CadastroWrapper>
      <Head>
        <title>Cadastro</title>
      </Head>
      <CadastroImage
        src="/assets/Cadastro-img.png"
        alt="Image of a traveller"
      />

      <FormWrapper>
        <img src="../assets/logo.svg" alt="easy travel" className="logo" />
        <MainTitle value="Cadastrar" />
        <Form onSubmit={handleSubmit(handleRegister)}>
          <Input
            {...register('username')}
            value="username"
            img_path="./assets/username_icon.svg"
            type="text"
            isRequired
          />
          <Input
            {...register('name')}
            value="nome"
            img_path="./assets/user_icon.svg"
            type="text"
            isRequired
          />
          <Input
            {...register('email')}
            value="email"
            img_path="./assets/email_icon.svg"
            type="email"
            isRequired
          />
          <Input
            {...register('password')}
            value="senha"
            img_path="./assets/password_icon.svg"
            type="password"
            isRequired
          />
          <Button>Criar conta</Button>
        </Form>
        <Link href="/login">
          <AlreadyHave>
            Já tem uma conta? <span>Faça o login</span>
          </AlreadyHave>
        </Link>
      </FormWrapper>
    </CadastroWrapper>
  );
}
