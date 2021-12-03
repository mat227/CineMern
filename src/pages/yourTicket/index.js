import { Container } from './styled.js'
import { Background } from '../../components/styled/background.js'
import Header from '../../components/commom/header/index.js'
import BoxTicket from '../../components/commom/boxMovie/index.js'
import { useEffect, useState } from 'react'

export default function ChoiceMovie() {
    const [ticket, setTickes] = useState([])

    const simulacao = () => {
        setTickes([
            {
                img: "/assets/images/matrix.jpg",
                name: "infernoooooooooo",
                desc: "Legendado e Dublado",
                classification: "14"
            },
          
        ])
    }

    useEffect(() => {
        simulacao()
    }, [])
    
    return(
        <Background>
            <Container>
                <Header />
                <div className="content">
                    {ticket.map((item) =>
                         <BoxTicket info={item}/>
                    )}    
                </div>    
            </Container>
        </Background>
    )
}