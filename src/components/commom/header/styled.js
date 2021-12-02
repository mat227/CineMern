import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: transparent;
    width: 100%;
    padding: 2em 2em;

    .align-logo{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 20em;
        margin-right: 8em;
    }

    .title-header{
        font-family: sans-serif;
        font-size: 3em;
        color: #F0A124;
    }

    .text-header{
        font-family: share-tech;
        font-size: 2.5em;
        color: white;
    }
`

export { Container }