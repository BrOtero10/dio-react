import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Card from '../../components/Card'
import UserInfo from '../../components/UserInfo'

import { Container, Column, Title, TitleHighLight } from "./styles"


export default function Feed(  ) {

    return (
        <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3} >
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo name="Bruno Otero" image='https://avatars.githubusercontent.com/u/128537888?v=4' percentual={30} />
                <UserInfo name="Bruno Otero" image='https://avatars.githubusercontent.com/u/128537888?v=4' percentual={40} />
                <UserInfo name="Bruno Otero" image='https://avatars.githubusercontent.com/u/128537888?v=4' percentual={50} />
                <UserInfo name="Bruno Otero" image='https://avatars.githubusercontent.com/u/128537888?v=4' percentual={60} />
                <UserInfo name="Bruno Otero" image='https://avatars.githubusercontent.com/u/128537888?v=4' percentual={100} />
            </Column>
            
        </Container>
        </>
    )
}