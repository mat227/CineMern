import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;
   


    .content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        height: 28em;
        width: 85%;

        overflow-y: scroll;
    }
`

export { Container }