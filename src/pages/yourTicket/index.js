import { Container } from './styled.js'
import { Background } from '../../components/styled/background.js'
import Header from '../../components/commom/header/index.js'
import BoxTicket from '../../components/commom/boxTicket/index.js'
import { useEffect, useState } from 'react'

export default function ChoiceMovie() {
    const [ticket, setTickes] = useState([])

    const simulacao = () => {
        setTickes([
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
            {
                armchair: "A1",
                halforwhole:"Meia",
                randomNumber:"859204",
                date:"12/10/2021",
                buyTime:"17:05",
                name: "Harry Poter",
                dubSub: "Dublado",
                roomnumber: "08",
                timer:"13:00"
            },
          
        ])
    }

    useEffect(() => {
        simulacao()
    }, [])
    
    return(
        <Background>
            <Container>
            <Header vertical="true" verticalDate="true" headerText="Parabéns! Sua compra foi realizada com sucesso.Agora é só aproveitar o filme :)" />
                <div className="content">
                    {ticket.map((item) =>
                         <BoxTicket info={item}/>
                    )}    

                </div>    

            </Container>
        </Background>

    )
}