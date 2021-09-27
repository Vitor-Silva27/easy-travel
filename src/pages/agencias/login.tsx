import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Head from 'next/head';
import Link from 'next/link';

import { Button } from '../../components/FormButton/styles';
import Input from '../../components/Input';
import MainTitle from '../../components/MainTitle';
import { AgencyAuthContext } from '../../contexts/AgencyContext';
import {
  Form,
  LoginImage,
  LoginWrapper,
  FormWrapper,
  DontHave,
} from '../../styles/pages/Login';

interface SignInData {
  agencyName: string;
  password: string;
}

export default function AgencyLogin() {
  const { register, handleSubmit } = useForm();
  const { agencySignIn } = useContext(AgencyAuthContext);

  async function handleSignIn({ agencyName, password }: SignInData) {
    await agencySignIn({ agencyName, password });
  }

  return (
    <LoginWrapper>
      <Head>
        <title>Login</title>
      </Head>
      <FormWrapper>
        <img src="../assets/logo.svg" alt="easy travel" className="logo" />
        <MainTitle value="Fazer Login" />
        <Form onSubmit={handleSubmit(handleSignIn)}>
          <Input
            {...register('agencyName')}
            value="Nome"
            img_path="../assets/user_icon.svg"
            type="text"
            isRequired
          />
          <Input
            {...register('password')}
            value="senha"
            img_path="../assets/password_icon.svg"
            type="password"
            isRequired
          />
          <Button>Entrar</Button>
        </Form>
        <Link href="/agencias/cadastro">
          <DontHave>
            Não tem uma conta? <span>Cadastre-se agora</span>
          </DontHave>
        </Link>
      </FormWrapper>
      <LoginImage src="/assets/agencia_login.jpg" alt="Image of a plane" />
    </LoginWrapper>
  );
}
