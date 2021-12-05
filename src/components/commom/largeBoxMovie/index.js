
import {Box} from './styled'
import {useState} from 'react'

function LargeBox() {
    const [propsSimulation] = useState({
        img: "/assets/images/harry.jpg",
        filmTittle: "Harry Potter e a Ordem da Fênix",
        filmInfo: "Legendado e Dublado Classificação: +12"

    });


    return (
        <Box>
            <img src={propsSimulation.img} alt="" />
            <div className="tittleFilm">{propsSimulation.filmTittle}</div>
            <div className="filmInfo"> { propsSimulation.filmInfo }</div>
        </Box>
    )
}

export { LargeBox }; 