import Button from '../Button'
import { 
    BuscarInputContainer,
    Column,
    Container,
    Menu,
    MenuRight,
    Input,
    Row,
    UserPicture,
    Wrapper
} from './styles'

export default function Header({ autenticado }) {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src="" alt="Logo da DIO"/>
                { autenticado && (
                    <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                )}
                
            </Row>
            <Row>
                { autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/128537888?v=4' />
                ) : (
                    <>
                    <MenuRight href='#'>
                    Home
                    </MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                    </>
                ) }
                
            </Row>
        </Container>
    </Wrapper>
  )
}
