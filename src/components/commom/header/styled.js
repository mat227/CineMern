import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => props.column  === "true" || props.column  === "true1" ? "column" : "row"};
    align-items: center;

    background-color: transparent;
    width: 100%;
    padding: 2em 5em;
   


    .align-logo{
        display: flex;
        flex-direction: ${(props) => props.column  === "true" ? "column" : "row"};
        justify-content: space-between;
        align-items: center;

        width: 20em;
        margin-right: ${(props) => props.column  === "true" ? "0em" :  props.column  === "true1" ? "45em" : "8em"};
       
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
        margin-top: ${(props) => props.column  === "true" ? "1.5em" : "0em"};
    }
`

export { Container }