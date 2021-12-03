import { Background } from '../../components/styled/background.js'
import { Container } from './styled.js'
import Header from '../../components/commom/header/index.js'
import { BotaoHome } from '../../components/styled/buttons.js'





export default function Home(props){
    return(
        <Container>
            <Background>
                <Header vertical="true" verticalDate="true" headerText="O que você quer fazer?" />
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <BotaoHome>COMPRAR
                INGRESSO</BotaoHome>
                </div>
            </Background>
        </Container>
    )
}