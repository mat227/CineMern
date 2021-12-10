import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: url('/assets/images/ticket.svg');
    background-size: 25em;
    background-position: center center;
   background-repeat: no-repeat;
    width: 25em;
    padding-left:7.8em;
padding-bottom: 2em;
    cursor: pointer;

   

    .align-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: .5em;
        margin-top: 2em;
    }

    .seat-info{
        font-family: share-tech;
        font-size: 1.3em;
        color: #960404;
        line-height: 1.3em;
        margin-left: -1.7em;
    }

    .name{
        font-family: share-tech;
        font-size: 1.7em;
        line-height: 1.3em;
        margin-bottom: -1em;
    }

    .dub-sub{
        font-family: share-tech;
        font-size: 1.3em;
        color: #960404;
        line-height: 1.3em;
        margin-top: 1.3em;
    }

`
export { Container }