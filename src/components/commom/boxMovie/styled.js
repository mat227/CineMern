import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: #AA0A0A;
    
    width: 22em;
    padding: .3em;
    margin: .5em;

    border-radius: 10px 10px 0px 0px;
    cursor: pointer;

    .img-movie{
        height: 10em;
        width: 8em;

        border-radius: 10px 0px 0px 0px;
    }

    .align-text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 7em;
    }

    .title-movie{
        font-family: share-tech;
        font-size: 1.2em;
        color: #FFCA76;

        line-height: 1.3em;

        width: 11em;
        margin-left: .5em;
    }

    .desc{
        font-family: share-tech;
        font-size: 1em;
        color: white;

        width: 11em;
        margin: .3em 0em 0em .5em;
    }

`
export { Container }