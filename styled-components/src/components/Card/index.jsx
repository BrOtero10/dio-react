import { FiThumbsUp } from 'react-icons/fi'

import { 
    CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture 
} from './styles'

export default function Card() {
  return (
    <CardContainer>
        <ImageBackground src='https://avatars.githubusercontent.com/u/128537888?v=4'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/128537888?v=4'/>
                <div>
                    <h4>Bruno Otero</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp dio do Global avanade ... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
