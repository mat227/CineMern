import LittleBox from "../../components/commom/littleBox"
import { Container } from "./styled"
import Header from "../../components/commom/header"
import { Background } from "../../components/styled/background"
import BigBox from "./bigBox"



export default function IngressDate() {
    return (
            <Container>
                <Background>
                <Header vertical="true1" headerText="Escolha a data que você deseja comprar o ingresso."  />
                <div className="boxs">
                    <div className="big-Box"><BigBox textTop="Sabado" textCenter="06" textBottom="Maio" /></div>
                    <div className="box-dates">
                        <LittleBox textTop="Sabado" textCenter="06" textBottom="Maio" />
                        <LittleBox textTop="Sabado" textCenter="06" textBottom="Maio" />
                        <LittleBox textTop="Sabado" textCenter="06" textBottom="Maio" />
                        <LittleBox textTop="Sabado" textCenter="06" textBottom="Maio" />
                        <LittleBox textTop="Sabado" textCenter="06" textBottom="Maio" />
                        <LittleBox textTop="Sabado" textCenter="06" textBottom="Maio" />
                    </div>
                </div>
                </Background>
            </Container>
    )
}