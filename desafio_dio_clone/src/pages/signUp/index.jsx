import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, LeftContainer, RightContainer, SubtitleSignUp, TitleSignUp, HasAccountText, AgreeTermsText, Wrapper } from './styles'

import { api } from '../../services/api';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors  } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post('/users', {
        full_name: formData.full_name,
        email: formData.email,
        password: formData.senha
      });
      
      alert('Usuário criado com sucesso!');
      navigate('/feed');
    } catch(e) {
      console.error('Erro ao criar usuário:', e);
      alert('Não foi possível criar o usuário. Tente novamente.');
    }
  };

  return (
    <>
    <Header />
    <Container>
      <LeftContainer>
        <h2>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h2>
      </LeftContainer>
      <RightContainer>
        <TitleSignUp>Comece agora grátis</TitleSignUp>
        <SubtitleSignUp>Crie sua conta e make the change._</SubtitleSignUp>

        <Wrapper>
          <form>

            <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name={"full_name"} control={control}/>
            {errors.full_name && <span>Nome Completo é obrigatório</span>}

            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
            {errors.email && <span>E-mail é obrigatório</span>}

            <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
            {errors.senha && <span>Senha é obrigatório</span>}

            <Button title="Entrar" variant="secondary" type="submit"/>
          </form>
        </Wrapper>

        

        <AgreeTermsText>
          Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
        </AgreeTermsText>
        <HasAccountText>Já tenho conta. <span onClick={() => navigate('/login') }>Fazer login</span></HasAccountText>
      </RightContainer>
    </Container>
    </>
  )
}
