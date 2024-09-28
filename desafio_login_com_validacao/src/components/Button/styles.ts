import styled from 'styled-components';

export const ButtonContainer = styled.button<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>`
    width: 100%;
    height: 42px;

    border: 1px solid #81259D;
    border-radius: 21px;
    
    background-color: #81259D;
    color: #FFF;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &:disabled {
        background-color: #81259D50;
        border: none;
    }
`