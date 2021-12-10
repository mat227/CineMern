import { StyledBigBox } from "./styled";

export default function BigBox(props) {
     return (
         <StyledBigBox>
             <div className="language"> {props.textTop} </div>
             <div className="schedule"> {props.textCenter} </div>
             <div className="language"> {props.textBottom} </div>
         </StyledBigBox>
     )
}