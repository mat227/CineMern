import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;


    .content{
        display: flex;;
        flex-direction: row;
        flex-wrap: wrap;

        height: 28em;
        width: 85%;

        overflow-y: scroll;
    }

    @media(max-width: 1280px) {
        .content{
            height: 46em;
            width: 90%;
        }
    }

    @media(min-width: 1440px) {
        .content{
            height: 35em;
            width: 80%;
        }
    }

    @media(min-width: 1920px) {
        .content{
            height: 46em;
            width: 80%;
        }
    }

`

export { Container }