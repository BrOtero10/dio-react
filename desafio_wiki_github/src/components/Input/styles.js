import styled from 'styled-components'

export const InputContainer = styled.div`
    border: 1px solid #fafafa;
    border-radius: 20px;

    height: 62px;
    width: 80%;
    margin: 20px;

    input {
        background-color: transparent;
        border: none;
        width: calc(100% - 40px);
        height: 62px;
        padding: 0 20px;
        color: white;
        font-size: 20px;
    }
`