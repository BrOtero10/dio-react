import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        width: 100%;
        height: 7vh;
        background-color: #a6cbe8;
        border: none;
        border-radius: 10px;
        padding: 0 20px;
        text-align: right;
        font-size: 30px;
        font-family: 'Roboto';
        font-weight: 700;
        letter-spacing: min(8px, 0.5vw);
        color: white;
    }

    @media screen and (max-height: 440px) {
        input {
            font-size: 22px;
            height: 35px;
        }
    }
`