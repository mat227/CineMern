import styled from "styled-components";


const StyledBigBox = styled.div `

    background-color: #AA0A0A;
    border-radius: 4%;
    color: #FFFFFF;
    width: 281px;
    height: 274px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;
    &:hover {
        opacity: 80%;
        cursor: pointer;
    }

    .language {
        font-family: share-tech;
        font-size: 3.5em;
        margin: 0.25em;
    }

    .schedule {
        font-size: 4em;
        font-family: share-tech;
    }
`


export { StyledBigBox }