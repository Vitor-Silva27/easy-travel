import { Button } from '../components/FormButton/styles';
import Input from '../components/Input';
import MainTitle from '../components/MainTitle';
import {
  Form,
  LoginImage,
  LoginWrapper,
  FormWrapper,
} from '../styles/pages/Login';

export default function Login() {
  return (
    <LoginWrapper>
      <FormWrapper>
        <img src="./assets/logo.svg" alt="easy travel" className="logo" />
        <MainTitle value="Fazer Login" />
        <Form>
          <Input
            value="email"
            img_path="./assets/email_icon.svg"
            type="email"
          />
          <Input
            value="senha"
            img_path="./assets/password_icon.svg"
            type="password"
          />
          <Button>Entrar</Button>
          <p>already have an account? sign up</p>
        </Form>
      </FormWrapper>
      <div style={{ display: 'flex' }}>
        <LoginImage src="/assets/login-img.png" alt="Image of a traveller" />
      </div>
    </LoginWrapper>
  );
}
