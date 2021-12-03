import Header from "../../components/commom/header";
import { Background } from "../../components/styled/background";
import { LargeBox } from '../../components/commom/largeBoxMovie';
import { Container } from './styled';
import Input from './inputComponents';
import Button from '../../components/commom/floatingButton'

function HomeMovie() {
    return (
        <Container>
            
            <Background>
            <Button text="Concluir" />
                <Header headerText="Selecione a melhor opção de pagamento" />
                <section>
                    <LargeBox />
                    <div className="infoBox">
                        <div className="places">
                            <div className="tittle">Lugares</div>
                            <Input accent="A1" />
                            <Input accent="A2" />
                            <Input accent="A3" />
                            <Input accent="A4" />
                            <Input accent="A5"/>
                        </div>
                        <div className="middle-bar"></div>
                        <div className="requests">
                            <div className="tittle">Pedido</div>
                            <div className="typeIngress">
                                <div>Ingressos Meia:  &nbsp;  &nbsp;  01</div>
                                <div> Ingressos Inteira:  &nbsp;  &nbsp;    04</div>
                            </div>
                           
                            <div className="pre-total">
                                <div className="total"> Total: R$ 100,00 </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Background>
        </Container>
    )
}


export default HomeMovie;