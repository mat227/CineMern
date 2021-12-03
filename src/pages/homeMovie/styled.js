import styled from 'styled-components'


const Container = styled.div`
    

   section{
        display: flex;
        flex-direction: row;


        justify-content: space-between;

      
        width: 1430px;
        height: auto;

        padding: 1em 10em 0em 10em;

    }

    .middle-bar {
        border: 1px solid #5A1010;
        height: 85%;
        margin-top: 1.9em;
    }

    .infoBox {

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-top: 2em;

        background: linear-gradient(180deg, #AA0A0A 0%, rgba(83, 0, 0, 0.92) 126.82%);
        border-radius: 10px;

        width: 776px;
        height: 371px;
    }

    .infoBox .tittle {
        margin-bottom: 1.2em;

        color: #FFB540;
        font-size: 40px;
        line-height: 45px;
        font-weight: bold;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .places, .requests {
        width: 50%;
        text-align: center;
        margin: 1em 0em;

        position: relative;
    }

    

    .typeIngress{
        width: 82%;
        text-align: right;
    }
 
    .typeIngress div {
        font-weight: bold;
        font-size: 28px;
        line-height: 41px;
        color: white;


        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }


    .pre-total {
        position: relative;
    }

    .total {

        position: absolute;
        
        top: 3.7em;
        left: 2em;
        font-weight: bold;
        font-size: 32px;
        line-height: 31px;
        text-align: center;

        color: #FFFFFF;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`


export { Container };