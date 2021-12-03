import styled from 'styled-components'

const Eclipse = styled.div`

    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
    position: absolute;
    width: 130px;
    height: 130px;
    left: 1100px;
    top: 600px;

    text-align: center;
    background: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);
    border-radius: 50%;
    color: #626262;
    font-size: 28px;
    font-weight: bold;
    

    text-shadow: 0px 4px 10px rgba(108, 108, 108, 0.25);
`


export { Eclipse };