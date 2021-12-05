import { Container } from "./styled.js";
import FloatButton from '../floatingButton/index'

export default function BoxTicket(props) {
    return(
        <Container>
            <div className="align-text">
                <div className="seat-info"> {props.info.armchair} {props.info.halforwhole} #{props.info.randomNumber}</div>
                <div>
                    <div className="date"> {props.info.date}  {props.info.buyTime} </div>
                    <div className="name"> {props.info.name} </div>
                    <div className="dub-sub"> {props.info.dubSub} Sala{props.info.roomnumber} {props.info.timer}  </div>
                </div>

            </div>
            <FloatButton text="Menu"/>

        </Container>
    )
}