import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: url('/assets/images/ticket.svg');
    background-size: 30em;
    background-position: center center;
   
    width: 25em;
    padding-left:7.8em;

    border-radius: 10px 10px 0px 0px;
    cursor: pointer;

   

    .align-text{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .seat-info{
        font-family: share-tech;
        font-size: 1.2em;
        color: #960404;
        line-height: 1.3em;
    }

    .name{
        font-family: share-tech;
        font-size: 2em;
        line-height: 1.3em;
        margin-bottom: -.5em;
    }

    .dub-sub{
        font-family: share-tech;
        font-size: 1.5em;
        color: #960404;
        line-height: 1.3em;
        margin-top: 1.3em;
    }

`
export { Container }