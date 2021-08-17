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
          />
          <Input value="name" img_path="./assets/user_icon.svg" type="text" />
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
          <Button>Criar conta</Button>
          <AlreadyHave>
            Já tem uma conta? <span>Faça o login</span>
          </AlreadyHave>
        </Form>
      </FormWrapper>
    </CadastroWrapper>
  );
}
