import { Container } from "./styled.js";

export default function Header(props) {
    return(
        <Container>
            <div className="align-logo">
                <img src="/assets/images/logo.svg" alt="logo"/>
                <div className="title-header"> CineMonk </div>
            </div> 
            <div className="text-header"> {props.headerText} </div>   
        </Container>
    )
}