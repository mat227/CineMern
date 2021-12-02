import { Container } from "./styled.js";

export default function BoxMovie(props) {
    return(
        <Container>
            <img className="img-movie" src={props.info.img} alt="movie"/>
            <div className="align-text">
                <div className="title-movie"> {props.info.name} </div>
                <div>
                    <div className="desc"> {props.info.desc} </div>
                    <div className="desc"> Classificação: +{props.info.classification} </div>
                </div>
            </div>
        </Container>
    )
}