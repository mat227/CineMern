import styled from 'styled-components'



const Box = styled.div`
    display: flex;
    flex-direction: column;

    height: auto;
    width: 280px;
    background-color: #AA0A0A;
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
    border-radius: 16px 16px 16px 0px;
    padding: .4em 0em 1em 0em;

    align-items: center;
    text-align: center;

    img {
        width: 96%;
        height: 400px;

        border-radius: 16px 16px 0px 0px;
    }

    .tittleFilm {
        margin: .8em 0em .7em 0em;
        color: #FFCA76;
        font-family: share-tech;
        font-weight: 400;
        font-size: 22px;

        width: 60%;
    }

    .filmInfo {
        
        color: white;
        width: 60%;
        font-family: share-tech;
        font-size: 18px;
    }
`


export { Box };