import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Head from 'next/head';
import Link from 'next/link';

import { Button } from '../components/FormButton/styles';
import Input from '../components/Input';
import MainTitle from '../components/MainTitle';
import { AuthContext } from '../contexts/AuthContext';
import {
  Form,
  LoginImage,
  LoginWrapper,
  FormWrapper,
  DontHave,
} from '../styles/pages/Login';

interface SignInData {
  username: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: SignInData) {
    await signIn(data);
  }

  return (
    <LoginWrapper>
      <Head>
        <title>Login</title>
      </Head>
      <FormWrapper>
        <img src="./assets/logo.svg" alt="easy travel" className="logo" />
        <MainTitle value="Fazer Login" />
        <Form onSubmit={handleSubmit(handleSignIn)}>
          <Input
            {...register('username')}
            value="username"
            img_path="./assets/user_icon.svg"
            type="text"
            isRequired
          />
          <Input
            {...register('password')}
            value="senha"
            img_path="./assets/password_icon.svg"
            type="password"
            isRequired
          />
          <Button>Entrar</Button>
        </Form>
        <Link href="/cadastro">
          <DontHave>
            Não tem uma conta? <span>Cadastre-se agora</span>
          </DontHave>
        </Link>
      </FormWrapper>
      <LoginImage src="/assets/login-img.png" alt="Image of a traveller" />
    </LoginWrapper>
  );
}
