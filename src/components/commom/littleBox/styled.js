import styled from "styled-components";


const StyledLittleBox = styled.div `

    background-color: #AA0A0A;
    border-radius: 4%;
    color: #FFFFFF;
    width: 141px;
    height: 134px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5em;

    &:hover {
        opacity: 80%;
        cursor: pointer;
    }

    .language {
        font-family: share-tech;
        font-size: 1.7em;
    }

    .schedule {
        font-size: 2.4em;
        font-family: share-tech;
    }
`


export { StyledLittleBox }