import { useEffect, useState } from 'react'
import { Container } from './styled.js'
import { Background } from '../../components/styled/background.js'
import Header from '../../components/commom/header/index.js'
import BoxMovie from '../../components/commom/boxMovie/index.js'

export default function ChoiceMovie() {
    const [movies, setMovies] = useState([])

    const simulacao = () => {
        setMovies([
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            },
            {
                img: "/assets/images/matrix.jpg",
                name: "Matrix",
                desc: "Legendado e Dublado",
                classification: "14"
            }
        ])
    }

    useEffect(() => {
        simulacao()
    }, [])
    
    return(
        <Background>
            <Container>
                <Header headerText="Selecione o filme que deseja assistir"/>
                <div className="content">
                    {movies.map((item) =>
                         <BoxMovie info={item}/>
                    )}    
                </div>    
            </Container>
        </Background>
    )
}