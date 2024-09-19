import styled from 'styled-components';

export const ButtonContainer = styled.button`
    height: 75%;
    border: 2px solid #CDCDCD;
    border-radius: 10px;
    background-color: #4d4d4d;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    @media screen and (max-height: 440px) {
        font-size: 20px;
        height: 90%;
    }
`