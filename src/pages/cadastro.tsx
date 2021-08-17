import Head from 'next/head';
import Link from 'next/link';

import { Button } from '../components/FormButton/styles';
import Input from '../components/Input';
import MainTitle from '../components/MainTitle';
import {
  Form,
  CadastroImage,
  CadastroWrapper,
  FormWrapper,
  AlreadyHave,
} from '../styles/pages/Cadastro';

export default function Cadastro() {
  return (
    <CadastroWrapper>
      <Head>
        <title>Cadastro</title>
      </Head>
      <div style={{ display: 'flex' }}>
        <CadastroImage
          src="/assets/Cadastro-img.png"
          alt="Image of a traveller"
        />
      </div>
      <FormWrapper>
        <img src="./assets/logo.svg" alt="easy travel" className="logo" />
        <MainTitle value="Cadastrar" />
        <Form>
          <Input
            value="username"
            img_path="./assets/username_icon.svg"
            type="text"
            isRequired
          />
          <Input
            value="name"
            img_path="./assets/user_icon.svg"
            type="text"
            isRequired
          />
          <Input
            value="email"
            img_path="./assets/email_icon.svg"
            type="email"
            isRequired
          />
          <Input
            value="senha"
            img_path="./assets/password_icon.svg"
            type="password"
            isRequired
          />
          <Button>Criar conta</Button>
          <Link href="/login">
            <AlreadyHave>
              Já tem uma conta? <span>Faça o login</span>
            </AlreadyHave>
          </Link>
        </Form>
      </FormWrapper>
    </CadastroWrapper>
  );
}
