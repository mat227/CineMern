import Header from "../../components/commom/header"
import { LargeBox } from "../../components/commom/largeBoxMovie"
import { StyledSelectTime } from "./styled"
import LittleBox from "../../components/commom/littleBox"
import { Background } from "../../components/styled/background"



export default function SelectTime() {
    return (
        <Background> 
            <StyledSelectTime>
                <Header headerText="Selecione o horário e o idioma"/>
                <main>
                        <LargeBox />
                <div className="content">
                    <div className="row">
                        <div className="box">    <LittleBox /> </div>
                        <div className="box">    <LittleBox /> </div>
                        <div className="box">    <LittleBox /> </div>
                    </div>
                        <div className="row">
                            <div className="box">    <LittleBox /> </div>
                            <div className="box">    <LittleBox /> </div>
                            <div className="box">    <LittleBox /> </div>
                        </div>
                    </div>
                </main>
            </StyledSelectTime>
       </Background>
    )
}