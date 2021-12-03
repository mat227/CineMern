import styled from 'styled-components'

const Style = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;
    margin: .5em 1em .5em 3em;

    div {
        color: white;
        font-weight: bold;
        font-size: 24px;
        
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }


    select {
        width: 158px;
        height: 34px;
            
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 26px;
        color: #4F4F4F;
        font-size: 18px;

        padding: .1em 1em;
    }

    select:focus {
        outline: none;
    }


   
`

export { Style };