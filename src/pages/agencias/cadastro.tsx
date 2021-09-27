import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Head from 'next/head';
import Link from 'next/link';

import { Button } from '../../components/FormButton/styles';
import Input from '../../components/Input';
import MainTitle from '../../components/MainTitle';
import { AgencyAuthContext } from '../../contexts/AgencyContext';
import api from '../../services/api';
import {
  Form,
  CadastroImage,
  CadastroWrapper,
  FormWrapper,
  AlreadyHave,
} from '../../styles/pages/Cadastro';

interface RegisterData {
  agencyName: string;
  email: string;
  password: string;
}

export default function AgencyCadastro() {
  const { handleSubmit, register } = useForm();
  const { agencySignIn } = useContext(AgencyAuthContext);
  async function handleRegister({ agencyName, email, password }: RegisterData) {
    await api.post('/agencies', {
      agency_name: agencyName,
      email,
      password,
    });
    await agencySignIn({ agencyName, password });
  }
  return (
    <CadastroWrapper>
      <Head>
        <title>Cadastro</title>
      </Head>
      <CadastroImage
        src="/assets/agencia_cadastro.jpg"
        alt="Image of a plane"
      />

      <FormWrapper>
        <img src="../assets/logo.svg" alt="easy travel" className="logo" />
        <MainTitle value="Cadastrar" />
        <Form onSubmit={handleSubmit(handleRegister)}>
          <Input
            {...register('agencyName')}
            value="nome"
            img_path="../assets/user_icon.svg"
            type="text"
            isRequired
          />
          <Input
            {...register('email')}
            value="email"
            img_path="../assets/email_icon.svg"
            type="email"
            isRequired
          />
          <Input
            {...register('password')}
            value="senha"
            img_path="../assets/password_icon.svg"
            type="password"
            isRequired
          />
          <Button>Criar conta</Button>
        </Form>
        <Link href="/agencias/login">
          <AlreadyHave>
            Já tem uma conta? <span>Faça o login</span>
          </AlreadyHave>
        </Link>
      </FormWrapper>
    </CadastroWrapper>
  );
}
