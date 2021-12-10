import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
   


    .content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        height: 100%;
        width: 90%;

        overflow-y: scroll;
    }

   .text-header{
       font-size: 2em;
   }
`

export { Container }