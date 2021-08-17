import Head from 'next/head';
import Link from 'next/link';

import { Button } from '../components/FormButton/styles';
import Input from '../components/Input';
import MainTitle from '../components/MainTitle';
import {
  Form,
  LoginImage,
  LoginWrapper,
  FormWrapper,
  DontHave,
} from '../styles/pages/Login';

export default function Login() {
  return (
    <LoginWrapper>
      <Head>
        <title>Login</title>
      </Head>
      <FormWrapper>
        <img src="./assets/logo.svg" alt="easy travel" className="logo" />
        <MainTitle value="Fazer Login" />
        <Form>
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
          <Button>Entrar</Button>
          <Link href="/cadastro">
            <DontHave>
              Não tem uma conta? <span>Cadastre-se agora</span>
            </DontHave>
          </Link>
        </Form>
      </FormWrapper>
      <div style={{ display: 'flex' }}>
        <LoginImage src="/assets/login-img.png" alt="Image of a traveller" />
      </div>
    </LoginWrapper>
  );
}
